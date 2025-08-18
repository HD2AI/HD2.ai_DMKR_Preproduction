
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 flex items-center justify-center min-h-[calc(100vh-200px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-secondary/50 rounded-xl border border-border/50 text-center"
      >
        <h1 className="text-3xl font-bold mb-6 gradient-text">Login</h1>
        <p className="text-muted-foreground mb-8">
          Access your client portal or account details here. This feature is currently under development.
        </p>
        
        <form className="space-y-4 mb-6">
           <div>
              <label htmlFor="email-login" className="sr-only">Email</label>
              <input
                type="email"
                id="email-login"
                disabled
                className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
                placeholder="Email Address"
              />
            </div>
             <div>
              <label htmlFor="password-login" className="sr-only">Password</label>
              <input
                type="password"
                id="password-login"
                disabled
                className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
                placeholder="Password"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:opacity-70"
              disabled
            >
              Log In (Coming Soon)
            </Button>
        </form>

        <p className="text-sm text-muted-foreground">
          Need an account? <Link to="/quote" className="text-indigo-400 hover:underline">Contact us</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
  