// Application configuration based on environment

// Environment detection
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;
export const isTest = import.meta.env.MODE === 'test';

// API Configuration
export const config = {
  // Supabase
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },

  // API endpoints
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || (isProduction ? 'https://api.dmkr.co.uk' : 'http://localhost:3000'),
    timeout: 10000,
  },

  // Analytics
  analytics: {
    enabled: import.meta.env.VITE_ENABLE_ANALYTICS === 'true' && isProduction,
    trackingId: import.meta.env.VITE_GA_TRACKING_ID,
  },

  // Error tracking
  errorTracking: {
    enabled: import.meta.env.VITE_ENABLE_ERROR_TRACKING === 'true' && isProduction,
    dsn: import.meta.env.VITE_SENTRY_DSN,
  },

  // Performance monitoring
  performance: {
    enabled: import.meta.env.VITE_ENABLE_PERFORMANCE_MONITORING === 'true',
    sampleRate: isProduction ? 0.1 : 1.0, // 10% in production, 100% in development
  },

  // Feature flags
  features: {
    enableServiceWorker: isProduction,
    enableOfflineMode: isProduction,
    enablePWA: isProduction,
    enableImageOptimization: true,
    enableLazyLoading: true,
  },

  // Security
  security: {
    enableCSP: isProduction,
    enableRateLimiting: true,
    maxFormSubmissions: 5,
    rateLimitWindow: 15 * 60 * 1000, // 15 minutes
  },

  // UI Configuration
  ui: {
    theme: 'dark',
    animations: {
      enabled: true,
      reducedMotion: false,
    },
    images: {
      lazyLoadThreshold: 0.1,
      retryAttempts: 3,
      placeholderQuality: 10,
    },
  },

  // Business information
  business: {
    name: 'DMKR.co.uk',
    phone: '07392-556260',
    email: 'info@dmkr.co.uk',
    address: {
      street: '260 Keldregate',
      city: 'UK',
      country: 'United Kingdom',
    },
    hours: {
      weekdays: '8:00 AM - 6:00 PM',
      saturday: '8:00 AM - 6:00 PM',
      sunday: 'Closed',
    },
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedin: '',
    },
  },

  // SEO
  seo: {
    siteName: 'DMKR.co.uk - Professional Tiling Services',
    defaultTitle: 'DMKR.co.uk - Expert Bathroom & Kitchen Tiling',
    defaultDescription: 'Professional tiling services in the UK. Expert bathroom, kitchen, and commercial tiling with 3-year warranty. Free consultations and quotes available.',
    keywords: 'tiling services, bathroom tiling, kitchen tiling, commercial tiling, tile installation, UK tilers, professional tiling',
    author: 'DMKR.co.uk',
    siteUrl: isProduction ? 'https://dmkr.co.uk' : 'http://localhost:5173',
    ogImage: '/dmkr-logo.png',
  },
};

// Validate configuration
export const validateConfig = () => {
  const errors = [];

  // Check required Supabase configuration
  if (!config.supabase.url) {
    errors.push('Missing VITE_SUPABASE_URL');
  }
  if (!config.supabase.anonKey) {
    errors.push('Missing VITE_SUPABASE_ANON_KEY');
  }

  // Check URL formats
  if (config.supabase.url && !isValidUrl(config.supabase.url)) {
    errors.push('Invalid VITE_SUPABASE_URL format');
  }

  if (config.api.baseUrl && !isValidUrl(config.api.baseUrl)) {
    errors.push('Invalid VITE_API_BASE_URL format');
  }

  // Check analytics configuration in production
  if (isProduction && config.analytics.enabled && !config.analytics.trackingId) {
    console.warn('Analytics enabled but no tracking ID provided');
  }

  // Check error tracking configuration in production
  if (isProduction && config.errorTracking.enabled && !config.errorTracking.dsn) {
    console.warn('Error tracking enabled but no DSN provided');
  }

  if (errors.length > 0) {
    const errorMessage = `Configuration errors: ${errors.join(', ')}`;
    console.error(errorMessage);
    
    if (isProduction) {
      throw new Error(errorMessage);
    }
  }

  return errors.length === 0;
};

// Helper function to validate URLs
const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

// Get environment-specific configuration
export const getEnvConfig = () => {
  return {
    environment: import.meta.env.MODE,
    isDevelopment,
    isProduction,
    isTest,
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    buildTime: import.meta.env.VITE_BUILD_TIME || new Date().toISOString(),
  };
};

// Debug configuration (development only)
if (isDevelopment) {
  console.group('Application Configuration');
  console.log('Environment:', getEnvConfig());
  console.log('Config:', config);
  console.groupEnd();
}

export default config;