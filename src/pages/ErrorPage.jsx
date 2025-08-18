import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, RefreshCw, Phone, Mail } from 'lucide-react';

const ErrorPage = ({ 
  errorCode = '500',
  title = 'Something went wrong',
  message = 'We encountered an unexpected error. Please try again later.',
  showRetry = true,
  showContactInfo = true 
}) => {
  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Error Code Display */}
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-bold text-gray-200 dark:text-gray-800 select-none">
              {errorCode}
            </div>
            <AlertTriangle className="h-16 w-16 text-destructive absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Error Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h1>

          {/* Error Message */}
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            {message}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {showRetry && (
              <Button 
                size="lg" 
                onClick={handleRetry}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            )}
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleGoHome}
            >
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Button>
          </div>

          {/* Contact Information */}
          {showContactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary/50 rounded-xl p-6 border border-border/50"
            >
              <h3 className="text-lg font-semibold mb-4">Need immediate assistance?</h3>
              <p className="text-muted-foreground mb-4">
                If this problem persists, please contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:07392556260" 
                  className="inline-flex items-center justify-center px-4 py-2 bg-background/50 hover:bg-background/80 border border-border/30 hover:border-border/60 rounded-lg transition-all duration-200 text-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  07392-556260
                </a>
                <a 
                  href="mailto:info@dmkr.co.uk" 
                  className="inline-flex items-center justify-center px-4 py-2 bg-background/50 hover:bg-background/80 border border-border/30 hover:border-border/60 rounded-lg transition-all duration-200 text-foreground hover:text-primary"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  info@dmkr.co.uk
                </a>
              </div>
            </motion.div>
          )}

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <p className="text-sm text-muted-foreground">
              Error ID: {Date.now().toString(36).toUpperCase()} • 
              Time: {new Date().toLocaleString()}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Specific error page components
export const ServerErrorPage = () => (
  <ErrorPage
    errorCode="500"
    title="Server Error"
    message="Our servers are experiencing some issues. We're working to fix this as quickly as possible."
  />
);

export const ServiceUnavailablePage = () => (
  <ErrorPage
    errorCode="503"
    title="Service Unavailable"
    message="We're currently performing maintenance. Please check back in a few minutes."
    showRetry={false}
  />
);

export const ForbiddenPage = () => (
  <ErrorPage
    errorCode="403"
    title="Access Forbidden"
    message="You don't have permission to access this resource."
    showRetry={false}
    showContactInfo={false}
  />
);

export const NetworkErrorPage = () => (
  <ErrorPage
    errorCode="ERR"
    title="Connection Error"
    message="Unable to connect to our servers. Please check your internet connection and try again."
  />
);

export default ErrorPage;