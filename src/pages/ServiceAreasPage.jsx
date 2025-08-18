import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const ServiceAreasPage = () => {
  const areas = [
    'Greater London', 'Surrey', 'Kent', 'Essex', 'Hertfordshire', 
    'Berkshire', 'Buckinghamshire', 'Sussex'
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Service <span className="gradient-text">Areas</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          DMKR.co.uk proudly offers professional tiling services across the following regions. Contact us to confirm availability in your specific location.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.05 }}
            className="flex items-center p-4 bg-secondary/50 rounded-lg border border-border/50"
          >
            <MapPin className="h-5 w-5 text-indigo-400 mr-3 shrink-0" />
            <span className="font-medium">{area}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-muted-foreground">Don't see your area listed?</p>
        <Link to="/quote" className="text-indigo-400 hover:text-indigo-300 font-medium underline">
          Contact us for inquiries
        </Link>
      </motion.div>
    </div>
  );
};

export default ServiceAreasPage;
