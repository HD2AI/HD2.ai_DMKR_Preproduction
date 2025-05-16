
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex items-center justify-center min-h-[calc(100vh-200px)] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <AlertTriangle className="h-16 w-16 text-destructive mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't seem to exist.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700" asChild>
          <Link to="/">
            Go Back Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
  