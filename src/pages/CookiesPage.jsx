
import React from 'react';
import { motion } from 'framer-motion';

const CookiesPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Cookie <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-muted-foreground">Last Updated: 2025-05-02</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="prose prose-invert max-w-none lg:prose-lg text-muted-foreground space-y-4"
      >
        <h2>What Are Cookies</h2>
        <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the site's functionality.</p>

        <h2>How We Use Cookies</h2>
        <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
        
        <h2>Disabling Cookies</h2>
        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.</p>

        <h2>The Cookies We Set</h2>
        <ul>
          <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</li>
          <li><strong>(Potentially) Third-Party Cookies:</strong> In some special cases, we also use cookies provided by trusted third parties. For example, this site might use Google Analytics which is one of a widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</li>
        </ul>

        <h2>More Information</h2>
        <p>Hopefully, that has clarified things for you. As was previously mentioned, if there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
        <p>However, if you are still looking for more information, then you can contact us through one of our preferred contact methods: info@DMKR.co.uk</p>

        <p><i>This is a template Cookie Policy. You should consult with a legal professional and potentially use a cookie consent management tool to ensure compliance with regulations like GDPR and CCPA.</i></p>
      </motion.div>
    </div>
  );
};

export default CookiesPage;
  