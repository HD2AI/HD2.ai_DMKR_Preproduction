
import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-muted-foreground">Last Updated: 2025-05-02</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="prose prose-invert max-w-none lg:prose-lg text-muted-foreground space-y-4"
      >
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the DMKR.co.uk website ("Site") or engaging our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not use this Site or our services.</p>

        <h2>2. Services</h2>
        <p>DMKR.co.uk provides professional tiling installation and related services ("Services"). All services are subject to a separate agreement or quote which will outline the specific scope of work, materials, timeline, and costs.</p>

        <h2>3. Quotes and Payments</h2>
        <p>Quotes provided are estimates based on the information available at the time. Final costs may vary based on unforeseen site conditions or changes requested by the client. Payment terms will be specified in the service agreement or quote.</p>

        <h2>4. Use of the Site</h2>
        <p>You agree to use the Site only for lawful purposes. You may not use the Site in any manner that could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site.</p>

        <h2>5. Intellectual Property</h2>
        <p>All content on this Site, including text, graphics, logos, images, and software, is the property of DMKR.co.uk or its content suppliers and protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from the content without our express written permission.</p>
        
        <h2>6. Disclaimers</h2>
        <p>The Site and Services are provided "as is" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted or error-free.</p>

        <h2>7. Limitation of Liability</h2>
        <p>In no event shall DMKR.co.uk be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or Services.</p>

        <h2>8. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law principles.</p>

        <h2>9. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. We will post the revised Terms on the Site. Your continued use of the Site or Services after such changes constitutes your acceptance of the new Terms.</p>

        <h2>10. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at: info@DMKR.co.uk</p>

        <p><i>This is a template Terms of Service. You should consult with a legal professional to ensure it meets all legal requirements for your specific business and location.</i></p>
      </motion.div>
    </div>
  );
};

export default TermsPage;
  