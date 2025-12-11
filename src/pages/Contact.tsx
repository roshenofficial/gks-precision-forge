import { useState } from "react";
import { Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "No. 9-A, Developed Plot, SIDCO Industrial Estate, Ambattur, Chennai – 600098, Tamil Nadu, India",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@geekayseng.com",
    href: "mailto:info@geekayseng.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "24/7 Global Support",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    partRequirement: "",
    volumeEstimate: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    
    setFormData({
      companyName: "",
      email: "",
      phone: "",
      partRequirement: "",
      volumeEstimate: "",
      timeline: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in your precision machining services.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="container-wide section-padding !py-0">
          <div className="max-w-3xl">
            <span className="font-display text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Let's Build<br />
              <span className="text-primary">Together</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Looking for a precision machining partner you can rely on? Share your requirements and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="section-title text-2xl mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>GST Number:</strong> 33AADFG6951H1ZG
                </p>
                
                <Button variant="outline" className="w-full" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="industrial-card p-8">
                <h2 className="section-title text-2xl mb-2">Request a Quote</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will respond within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your company name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Input
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="e.g., 2 weeks, 1 month"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="partRequirement">Part Requirement *</Label>
                      <Input
                        id="partRequirement"
                        name="partRequirement"
                        value={formData.partRequirement}
                        onChange={handleChange}
                        placeholder="Describe the parts needed"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="volumeEstimate">Volume Estimate</Label>
                      <Input
                        id="volumeEstimate"
                        name="volumeEstimate"
                        value={formData.volumeEstimate}
                        onChange={handleChange}
                        placeholder="e.g., 1000 units/month"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any additional specifications, drawings, or requirements..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 bg-secondary flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">
            SIDCO Industrial Estate, Ambattur, Chennai – 600098
          </p>
        </div>
      </section>
    </Layout>
  );
}
