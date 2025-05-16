
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CareersPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Join Our <span className="gradient-text">Team</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We're always looking for talented and passionate individuals to join DMKR.co.uk. Explore opportunities to grow with us.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-lg mx-auto p-8 bg-secondary/50 rounded-xl border border-border/50"
      >
        <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
        <p className="text-muted-foreground mb-6">
          There are no specific openings at the moment, but we are always interested in hearing from experienced tilers and project managers.
        </p>
        <Button 
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
          asChild
        >
          <Link to="/quote">Submit Your Interest</Link>
        </Button>
         <p className="text-xs text-muted-foreground mt-4">
          Use the contact form to tell us about yourself.
        </p>
      </motion.div>
    </div>
  );
};

export default CareersPage;
  