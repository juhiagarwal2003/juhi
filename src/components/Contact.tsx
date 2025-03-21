
import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Mail, Linkedin, Github, Code, Send } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate inputs
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill out all fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Show toast to indicate message is being sent
      toast.info('Sending your message...');
      
      // Store the contact message in Supabase database
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);
      
      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      // Trigger email sending via edge function
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          recipientEmail: 'juhiagarwal200379@gmail.com'
        }
      });
      
      if (error) {
        console.error('Edge function error:', error);
        throw error;
      }

      console.log('Email function response:', data);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(error.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contacts = [
    {
      icon: Mail,
      title: 'Email',
      value: 'juhi.agarwal@example.com',
      url: 'mailto:juhi.agarwal@example.com',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/juhi-agarwal',
      url: 'https://linkedin.com',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/juhi-agarwal',
      url: 'https://github.com',
    },
    {
      icon: Code,
      title: 'LeetCode',
      value: 'leetcode.com/juhi-agarwal',
      url: 'https://leetcode.com',
    },
  ];

  return (
    <section id="contact" className="section-container">
      <ScrollReveal>
        <span className="pill bg-primary/10 text-primary block mx-auto w-fit mb-4">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        <ScrollReveal delay={200} className="md:col-span-2">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group hover:bg-card p-3 rounded-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">{contact.title}</h4>
                    <p className="group-hover:text-primary transition-colors">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} className="md:col-span-3">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
