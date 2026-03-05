import { useState } from "react";
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import SectionReveal from "@/components/section-reveal";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Bot detection field - should remain empty
  });


  const contactMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; message: string; honeypot?: string }) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error?.error || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Client-side validation to match backend requirements
    if (formData.message.length < 10) {
      toast({
        title: "Error",
        description: "Message must be at least 10 characters long.",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.message.length > 1000) {
      toast({
        title: "Error",
        description: "Message cannot exceed 1000 characters.",
        variant: "destructive",
      });
      return;
    }
    
    contactMutation.mutate({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      honeypot: formData.honeypot,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "klamichhan@brynmawr.edu",
      color: "bg-primary/20 text-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "484-598-3364",
      color: "bg-accent/20 text-accent",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bryn Mawr, PA",
      color: "bg-secondary/20 text-secondary",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/kripa-lamichhane/", color: "bg-primary hover:bg-primary/90 text-primary-foreground" },
    { icon: Github, href: "https://github.com/TECNA7/", color: "bg-secondary hover:bg-secondary/90 text-secondary-foreground" },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <SectionReveal>
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating or discussing opportunities? I'd love to hear from you!
            </p>
          </div>
        </SectionReveal>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <SectionReveal key={index}>
                <div className="bg-card p-6 rounded-2xl shadow-lg card-hover" data-testid={`contact-info-${index}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${info.color}`}>
                      <info.icon className="text-xl w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-card-foreground">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
            
            <SectionReveal>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg ${social.color}`}
                    data-testid={`social-link-${index}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </SectionReveal>
          </div>
          
          <SectionReveal>
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-lg space-y-6" data-testid="contact-form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  placeholder="Kripa Lamichhane"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  placeholder="kreepalamichhane@gmail.com"
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                  data-testid="textarea-message"
                />
              </div>
              {/* Honeypot field for bot detection - hidden from users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-primary-foreground py-4 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105 disabled:hover:scale-100"
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </SectionReveal>
        </div>

        {/* Testimonials Section */}
        <SectionReveal>
          <div className="mt-24">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text">
                What People Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Testimonials from people who recommend me
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <SectionReveal>
                <div className="bg-card p-8 rounded-2xl shadow-lg" data-testid="testimonial-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-card-foreground mb-1">
                        Ryan Hendry
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Director of Operations, FSH Technologies
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed mb-7">
                    "Kripa Lamichhane is one of those few Technical Product Managers who combine strategic thinking, and fast execution. At FSH Tech, Kripa built systems and led AI agents that improved how teams worked together, from automating reporting and workflows to aligning teams around measurable goals. She balances user needs with technical realities and consistently delivers products that meet both vision and practicality. What stands out most is her ownership and positive energy. She listens carefully, and brings a calm, solution-focused mind to every challenge. Kripa does not just manage products; she elevates how teams collaborate and deliver."


                  </p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="bg-card p-8 rounded-2xl shadow-lg" data-testid="testimonial-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-card-foreground mb-1">
                        Shayna Nickel
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Director of Innovation Lab at Haverford College
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "As Director of Innovation, I had the opportunity to mentor and collaborate with Kripa Lamichhane during the development of RateMySemesterAbroad. Kripa brought remarkable clarity and initiative to the project from the start. She approached the challenge like a true builder, combining research, user insight, and technical execution to turn a student idea into a functional and impactful product. Kripa’s curiosity and drive to solve real problems stood out throughout the process. She is not only technically skilled but also deeply thoughtful in how she connects ideas, people, and purpose. I have no doubt she will continue creating meaningful solutions in any environment she joins."
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="bg-card p-8 rounded-2xl shadow-lg" data-testid="testimonial-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-card-foreground mb-1">
                        Betsy Horner
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Director of the Quantitative Program at Bryn Mawr College
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                   
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="bg-card p-8 rounded-2xl shadow-lg" data-testid="testimonial-3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-card-foreground mb-1">
                        Katie Krimmel
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Dean, Career & Civic Engagement Center at Bryn Mawr College
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
        
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Contact;
