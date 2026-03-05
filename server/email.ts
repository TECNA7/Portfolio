// Email service using SendGrid integration
import { MailService } from '@sendgrid/mail';

const mailService = new MailService();

// Check for API key but don't crash if missing
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn("SENDGRID_API_KEY not set - email sending will be disabled");
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  // Check if SendGrid is configured
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SendGrid not configured - skipping email send');
    return false;
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  const emailHtml = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Message:</strong></p>
    <p>${formData.message.replace(/\n/g, '<br>')}</p>
  `;

  const emailText = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
  `;

  // Use environment variables for email addresses
  const recipientEmail = process.env.CONTACT_EMAIL || 'kreepalamichhane@gmail.com';
  const senderEmail = process.env.SENDER_EMAIL || 'kreepalamichhane@gmail.com';

  return await sendEmail({
    to: recipientEmail,
    from: senderEmail,
    subject: `Portfolio Contact: Message from ${formData.name}`,
    text: emailText,
    html: emailHtml,
  });
}