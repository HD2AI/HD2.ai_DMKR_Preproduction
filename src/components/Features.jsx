
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Clock, Award, Wrench as Tool, Palette, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Layers className="h-10 w-10 text-indigo-400" />,
      title: 'Premium Materials',
      description: 'We use only the highest quality tiles and materials for durability and aesthetic appeal.'
    },
    {
      icon: <Clock className="h-10 w-10 text-indigo-400" />,
      title: 'Timely Completion',
      description: 'Projects completed on schedule with minimal disruption to your daily routine.'
    },
    {
      icon: <Award className="h-10 w-10 text-indigo-400" />,
      title: 'Expert Craftsmanship',
      description: 'Our skilled professionals deliver flawless installations with meticulous attention to detail.'
    },
    {
      icon: <Tool className="h-10 w-10 text-indigo-400" />,
      title: 'Comprehensive Services',
      description: 'From design consultation to installation and maintenance, we handle every aspect.'
    },
    {
      icon: <Palette className="h-10 w-10 text-indigo-400" />,
      title: 'Custom Designs',
      description: 'Create unique patterns and layouts tailored to your specific style preferences.'
    },
    {
      icon: <Shield className="h-10 w-10 text-indigo-400" />,
      title: 'Guaranteed Quality', 
      description: 'All our work comes with a 3-year warranty for your peace of mind.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="blur-overlay top-40 left-[30%]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">DMKR.co.uk</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine technical expertise with artistic vision to deliver exceptional tiling solutions for any space.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="feature-card bg-secondary/50 rounded-lg p-6 border border-border/50"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 relative rounded-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Transforming Spaces with <span className="gradient-text">Precision & Style</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                From elegant bathroom renovations to stunning kitchen backsplashes, our expert tilers bring your vision to life with meticulous craftsmanship and attention to detail.
              </p>
              <ul className="space-y-3">
                {[
                  'Bathroom and kitchen tiling',
                  'Floor installations',
                  'Outdoor tiling solutions',
                  'Commercial projects'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><path d="m5 12 5 5L20 7"></path></svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <img  
                className="w-full h-full object-cover" 
                alt="Modern bathroom with elegant tile work"
               src="https://images.unsplash.com/photo-1700074817207-c55fc074a562" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent lg:bg-gradient-to-l"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
  