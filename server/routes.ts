import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

// Rate limiting store (in-memory for simplicity)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 contact submissions per 15 minutes per IP

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(1).max(100).trim(),
  email: z.string().email().max(254),
  message: z.string().min(10).max(1000).trim(),
  honeypot: z.string().optional(), // Honeypot field for bot detection
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact messages admin endpoint - REMOVED for security
  // TODO: Add authentication/authorization if admin access is needed

  // Contact form submission endpoint with security protections
  app.post("/api/contact", async (req, res) => {
    try {
      const clientIP = req.ip || req.connection.remoteAddress || "unknown";
      
      // Rate limiting check
      const now = Date.now();
      const userLimit = rateLimitStore.get(clientIP);
      
      if (userLimit && now < userLimit.resetTime) {
        if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
          return res.status(429).json({ 
            error: "Too many requests. Please wait before sending another message." 
          });
        }
        userLimit.count++;
      } else {
        rateLimitStore.set(clientIP, { 
          count: 1, 
          resetTime: now + RATE_LIMIT_WINDOW 
        });
      }

      // Validate input with Zod
      const validationResult = contactSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Invalid input. Please check your information and try again." 
        });
      }

      const { name, email, message, honeypot } = validationResult.data;

      // Honeypot check (bot detection)
      if (honeypot && honeypot.trim() !== "") {
        // Silent rejection - don't tell bots they failed
        return res.json({ success: true, message: "Message sent successfully!" });
      }

      // ALWAYS save the contact message first (never lose data!)
      const savedMessage = await storage.createContactMessage({ name, email, message });

      // Try to send email using SendGrid (the reliable option)
      try {
        const emailSent = await sendContactEmail({ name, email, message });
        
        if (emailSent) {
          // Mark email as sent in storage
          await storage.updateContactMessageEmailStatus(savedMessage.id, "sent");
          res.json({ success: true, message: "Message sent successfully!" });
        } else {
          // Mark email as failed but still return success (message is saved)
          await storage.updateContactMessageEmailStatus(savedMessage.id, "failed");
          console.log(`Contact message saved (ID: ${savedMessage.id}) but email delivery failed`);
          res.json({ success: true, message: "Message sent successfully!" });
        }
      } catch (error) {
        // Mark email as failed but still return success (message is saved)
        await storage.updateContactMessageEmailStatus(savedMessage.id, "failed");
        console.error("Email sending error:", error);
        console.log(`Contact message saved (ID: ${savedMessage.id}) but email delivery failed`);
        res.json({ success: true, message: "Message sent successfully!" });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
