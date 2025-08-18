
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-muted-foreground">Last Updated: 2025-05-02</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="prose prose-invert max-w-none lg:prose-lg text-muted-foreground space-y-4"
      >
        <p>DMKR.co.uk ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL] or use our services.</p>
        
        <h2>Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us. The personal information we collect may include the following:</p>
        <ul>
          <li>Personal Identification Information (Name, email address, phone number, etc.)</li>
          <li>Project Details (Information you provide about your tiling needs)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use personal information collected via our website for a variety of business purposes described below:</p>
        <ul>
          <li>To provide and manage our services.</li>
          <li>To respond to user inquiries/offer support to users.</li>
          <li>To send administrative information to you.</li>
          <li>To send you marketing and promotional communications (if you opt-in).</li>
          <li>To protect our Services.</li>
        </ul>

        <h2>Disclosure of Your Information</h2>
        <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
        <ul>
          <li>By Law or to Protect Rights</li>
          <li>Third-Party Service Providers (e.g., hosting, email delivery)</li>
        </ul>

        <h2>Security of Your Information</h2>
        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

        <h2>Your Privacy Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data.</p>

        <h2>Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at: info@DMKR.co.uk</p>
        
        <p><i>This is a template Privacy Policy. You should consult with a legal professional to ensure it meets all legal requirements for your specific business and location.</i></p>
      </motion.div>
    </div>
  );
};

export default PrivacyPage;
  