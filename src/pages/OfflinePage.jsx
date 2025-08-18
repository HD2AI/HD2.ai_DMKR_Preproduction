import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WifiOff, RefreshCw, Home, Phone, Mail } from 'lucide-react';

const OfflinePage = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Automatically reload when back online
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    
    // Check if we're back online
    if (navigator.onLine) {
      window.location.reload();
    } else {
      // Show feedback that we're still offline
      setTimeout(() => {
        setRetryCount(prev => prev);
      }, 1000);
    }
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
          {/* Offline Icon */}
          <motion.div
            animate={{ 
              scale: isOnline ? [1, 1.1, 1] : 1,
              rotate: isOnline ? [0, 10, -10, 0] : 0
            }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mb-4">
                <WifiOff className="h-12 w-12 text-white" />
              </div>
              {isOnline && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <RefreshCw className="h-4 w-4 text-white" />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Status Message */}
          <AnimatePresence mode="wait">
            {isOnline ? (
              <motion.div
                key="online"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
                  Connection Restored!
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Great! You're back online. Refreshing the page...
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="offline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  You're Offline
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  It looks like you've lost your internet connection. Please check your network and try again.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          {!isOnline && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button 
                size="lg" 
                onClick={handleRetry}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                disabled={isOnline}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again {retryCount > 0 && `(${retryCount})`}
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleGoHome}
              >
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Button>
            </motion.div>
          )}

          {/* Offline Tips */}
          {!isOnline && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary/50 rounded-xl p-6 border border-border/50 mb-8"
            >
              <h3 className="text-lg font-semibold mb-4">While you're offline:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <h4 className="font-medium">Troubleshooting:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Check your WiFi connection</li>
                    <li>• Try switching to mobile data</li>
                    <li>• Restart your router</li>
                    <li>• Check if other websites work</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">What you can do:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Some cached pages may still work</li>
                    <li>• Contact us by phone</li>
                    <li>• Try again in a few minutes</li>
                    <li>• Check our social media for updates</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact Information */}
          {!isOnline && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-lg border border-indigo-500/20 p-6"
            >
              <h3 className="text-lg font-semibold mb-4">Need to reach us urgently?</h3>
              <p className="text-muted-foreground mb-4">
                You can still contact us directly even while offline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:07392556260" 
                  className="inline-flex items-center justify-center px-4 py-2 bg-background/50 hover:bg-background/80 border border-border/30 hover:border-border/60 rounded-lg transition-all duration-200 text-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 07392-556260
                </a>
                <a 
                  href="mailto:info@dmkr.co.uk" 
                  className="inline-flex items-center justify-center px-4 py-2 bg-background/50 hover:bg-background/80 border border-border/30 hover:border-border/60 rounded-lg transition-all duration-200 text-foreground hover:text-primary"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email: info@dmkr.co.uk
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default OfflinePage;