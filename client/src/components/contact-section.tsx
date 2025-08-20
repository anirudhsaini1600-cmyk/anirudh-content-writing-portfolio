import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "anirudhsaini1600@gmail.com",
      href: "mailto:anirudhsaini1600@gmail.com",
      color: "bg-primary"
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+91 8571078587",
      href: "tel:+918571078587",
      color: "bg-secondary"
    },
    {
      icon: "fab fa-linkedin-in",
      label: "LinkedIn",
      value: "linkedin.com/in/anirudhs123",
      href: "https://www.linkedin.com/in/anirudhs123",
      color: "bg-blue-600"
    }
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/anirudhs123",
      icon: "fab fa-linkedin-in",
      color: "bg-blue-600 hover:bg-blue-700",
      testId: "social-linkedin"
    },
    {
      href: "https://medium.com/@anirudhsaini1600",
      icon: "fab fa-medium-m",
      color: "bg-black hover:bg-gray-800",
      testId: "social-medium"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-4" data-testid="contact-title">Let's Work Together</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600" data-testid="contact-subtitle">
            Ready to create content that converts? Let's discuss your project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-6" data-testid="contact-info-title">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
                    <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center text-white`}>
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <p className="text-neutral-500">{info.label}</p>
                      <a 
                        href={info.href} 
                        className="text-lg font-semibold text-accent hover:text-primary transition-colors"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-accent mb-4" data-testid="social-media-title">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`w-12 h-12 ${social.color} text-white rounded-full flex items-center justify-center transition-colors`}
                    data-testid={social.testId}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-neutral-50 p-8 rounded-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-accent">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="border-neutral-200 focus:border-primary" 
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-accent">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          {...field} 
                          className="border-neutral-200 focus:border-primary"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-accent">Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Tell me about your content needs..."
                          className="border-neutral-200 focus:border-primary min-h-[120px]"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-blue-800 text-white font-semibold"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <i className="fas fa-paper-plane ml-2"></i>
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
