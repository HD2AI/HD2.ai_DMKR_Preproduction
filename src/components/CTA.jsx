
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { sanitizeInput, isValidEmail, isValidPhoneNumber, formRateLimiter } from '@/lib/security';

const CTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData((prevData) => ({
      ...prevData,
      [id]: sanitizedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Rate limiting check
    const clientId = formData.email || 'anonymous';
    if (!formRateLimiter.isAllowed(clientId)) {
      const remainingTime = Math.ceil(formRateLimiter.getRemainingTime(clientId) / 1000 / 60);
      toast({
        variant: "destructive",
        title: "Too Many Requests",
        description: `Please wait ${remainingTime} minutes before submitting again.`,
      });
      setIsSubmitting(false);
      return;
    }

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in your name, email, and project details.",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    if (!isValidEmail(formData.email)) {
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    // Phone validation (if provided)
    if (formData.phone && !isValidPhoneNumber(formData.phone)) {
      toast({
        variant: "destructive",
        title: "Invalid Phone Number",
        description: "Please enter a valid UK phone number.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('quote_requests')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            phone: formData.phone || null, // Handle optional phone
            service_needed: formData.service || null, // Handle optional service
            project_details: formData.message 
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      toast({
        title: "Quote Request Submitted!",
        description: "Thank you! We've received your request and will be in touch shortly.",
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' }); // Reset form
      
    } catch (error) {
      console.error("Error submitting quote request:", error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: `Could not submit your request: ${error.message}. Please try again or contact us directly.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="blur-overlay top-20 right-[20%]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your <span className="gradient-text">Space?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a free consultation and quote. Our expert team is ready to bring your vision to life with precision and style.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <a href="tel:5551234567" className="text-muted-foreground hover:text-foreground">(0) 7392-556260</a>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 8am-6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <a href="mailto:info@DMKR.co.uk" className="text-muted-foreground hover:text-foreground">info@DMKR.co.uk</a>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-medium">SITE VISITS BY APPOINTMENT ONLY</h3>
                  <p className="text-muted-foreground">The office, 260 Keldregate</p>
                  <p className="text-sm text-muted-foreground">Open: Mon-Sat, 8am-6pm</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700" asChild>
                <Link to="/quote">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gradient-border" asChild>
                <Link to="/service-areas">
                  View Service Areas
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary/50 rounded-xl p-6 border border-border/50"
          >
            <h3 className="text-xl font-semibold mb-6">Get Your Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">
                  Service Needed
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select a service</option>
                  <option value="bathroom">Bathroom Tiling</option>
                  <option value="kitchen">Kitchen Tiling</option>
                  <option value="floor">Floor Tiling</option>
                  <option value="outdoor">Outdoor Tiling</option>
                  <option value="commercial">Commercial Project</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Tell us about your project"
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our <Link to="/privacy" className="underline hover:text-foreground">privacy policy</Link> and <Link to="/terms" className="underline hover:text-foreground">terms of service</Link>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
  