// Security utilities and configurations

// Environment variable validation
export const validateEnvironment = () => {
  const requiredVars = [
    'VITE_SUPABASE_URL',
    'VITE_SUPABASE_ANON_KEY'
  ];

  const missing = requiredVars.filter(varName => !import.meta.env[varName]);
  
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    if (import.meta.env.PROD) {
      throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
  }

  // Validate URL format
  if (import.meta.env.VITE_SUPABASE_URL && !isValidUrl(import.meta.env.VITE_SUPABASE_URL)) {
    throw new Error('Invalid VITE_SUPABASE_URL format');
  }

  return true;
};

// URL validation
const isValidUrl = (string) => {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
};

// Sanitize user input to prevent XSS
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/[<>]/g, '') // Remove < and > characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Validate email format
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number (UK format)
export const isValidPhoneNumber = (phone) => {
  const ukPhoneRegex = /^(\+44|0)[1-9]\d{8,9}$/;
  return ukPhoneRegex.test(phone.replace(/\s/g, ''));
};

// Content Security Policy headers (for server configuration)
export const getCSPHeaders = () => {
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://*.supabase.co https://*.supabase.io",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ];

  return cspDirectives.join('; ');
};

// Security headers for server configuration
export const getSecurityHeaders = () => {
  return {
    'Content-Security-Policy': getCSPHeaders(),
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  };
};

// Rate limiting for form submissions
class RateLimiter {
  constructor(maxAttempts = 5, windowMs = 15 * 60 * 1000) { // 5 attempts per 15 minutes
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
    this.attempts = new Map();
  }

  isAllowed(identifier) {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const validAttempts = userAttempts.filter(timestamp => now - timestamp < this.windowMs);
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }

    // Add current attempt
    validAttempts.push(now);
    this.attempts.set(identifier, validAttempts);
    
    return true;
  }

  getRemainingTime(identifier) {
    const userAttempts = this.attempts.get(identifier) || [];
    if (userAttempts.length === 0) return 0;
    
    const oldestAttempt = Math.min(...userAttempts);
    const remainingTime = this.windowMs - (Date.now() - oldestAttempt);
    
    return Math.max(0, remainingTime);
  }
}

export const formRateLimiter = new RateLimiter();

// Secure local storage wrapper
export const secureStorage = {
  setItem: (key, value) => {
    try {
      const encrypted = btoa(JSON.stringify(value)); // Simple base64 encoding
      localStorage.setItem(key, encrypted);
    } catch (error) {
      console.error('Failed to store item securely:', error);
    }
  },

  getItem: (key) => {
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return null;
      
      return JSON.parse(atob(encrypted));
    } catch (error) {
      console.error('Failed to retrieve item securely:', error);
      return null;
    }
  },

  removeItem: (key) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  }
};

// Initialize security on app start
export const initializeSecurity = () => {
  // Validate environment
  validateEnvironment();

  // Disable right-click in production (optional)
  if (import.meta.env.PROD) {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    // Disable F12, Ctrl+Shift+I, etc. (optional - can be bypassed)
    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    });
  }

  // Clear sensitive data on page unload
  window.addEventListener('beforeunload', () => {
    // Clear any sensitive data from memory
    if (window.sensitiveData) {
      window.sensitiveData = null;
    }
  });

  console.log('Security initialized');
};