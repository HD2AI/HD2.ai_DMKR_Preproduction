import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 hero-pattern">
      {/* Decorative blurs */}
      <div className="blur-overlay top-20 left-[20%]"></div>
      <div className="blur-overlay bottom-20 right-[10%]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="max-w-2xl">
            <motion.div variants={item}>
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 mb-6">
                Professional Tiling Solutions
              </span>
            </motion.div>
            
            <motion.h1 
              variants={item} 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
            >
              Transform Your Spaces With <span className="gradient-text">Expert Tiling</span>
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
            >
              Professional tiling services by DMKR for residential and commercial projects. 
              Quality craftsmanship, premium materials, and exceptional results.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700" asChild>
                <Link to="/quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gradient-border" asChild>
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-400" />
                <span className="text-sm">Free Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-400" />
                <span className="text-sm">3-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-400" />
                <span className="text-sm">Licensed Professionals</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            variants={item}
            className="relative lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              className="w-full h-full object-cover rounded-lg"
              alt="Professional tiler installing ceramic tiles"
              src="https://images.unsplash.com/photo-1571680009459-42cf3eb79e15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              onError={(e) => {
                console.error('Hero image failed to load');
                e.target.style.display = 'none';
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Trusted by 200+ Homeowners</h3>
                  <p className="text-xs text-muted-foreground mt-1">Join our satisfied customers with premium tiling solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
