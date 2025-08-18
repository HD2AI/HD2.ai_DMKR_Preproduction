
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft, Search, Phone } from 'lucide-react';

const NotFoundPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  // Extract potential search term from URL
  useEffect(() => {
    const path = location.pathname.slice(1); // Remove leading slash
    if (path) {
      setSearchTerm(path.replace(/[-_]/g, ' '));
    }
  }, [location]);

  // Suggested pages based on common routes
  const suggestedPages = [
    { name: 'Portfolio', path: '/portfolio', description: 'View our completed projects' },
    { name: 'Get Quote', path: '/quote', description: 'Request a free consultation' },
    { name: 'About Us', path: '/about', description: 'Learn about our company' },
    { name: 'Service Areas', path: '/service-areas', description: 'Check if we serve your area' },
    { name: 'Blog', path: '/blog', description: 'Read our latest articles' },
  ];

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-bold text-gray-200 dark:text-gray-800 select-none">
              404
            </div>
            <AlertTriangle className="h-16 w-16 text-destructive absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-muted-foreground mb-2">
            Sorry, we couldn't find the page you're looking for.
          </p>
          
          {searchTerm && (
            <p className="text-sm text-muted-foreground mb-8">
              You were looking for: <span className="font-medium">"{searchTerm}"</span>
            </p>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            asChild
          >
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={handleGoBack}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            asChild
          >
            <Link to="/quote">
              <Phone className="h-4 w-4 mr-2" />
              Get Help
            </Link>
          </Button>
        </motion.div>

        {/* Suggested Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-secondary/50 rounded-xl p-8 border border-border/50"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">
            Maybe you're looking for one of these?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestedPages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={page.path}
                  className="block p-4 rounded-lg bg-background/50 hover:bg-background/80 border border-border/30 hover:border-border/60 transition-all duration-200 group"
                >
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {page.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {page.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-lg border border-indigo-500/20"
        >
          <h3 className="text-lg font-semibold mb-2">Still need help?</h3>
          <p className="text-muted-foreground mb-4">
            Contact us directly and we'll help you find what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:07392556260" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              07392-556260
            </a>
            <a 
              href="mailto:info@dmkr.co.uk" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <Search className="h-4 w-4 mr-2" />
              info@dmkr.co.uk
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
  