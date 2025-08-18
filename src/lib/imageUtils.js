import { getPlaceholderImage } from '@/assets/placeholders';

/**
 * Preloads an image and returns a promise
 * @param {string} src - Image source URL
 * @returns {Promise<HTMLImageElement>}
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preloads multiple images
 * @param {string[]} sources - Array of image source URLs
 * @returns {Promise<HTMLImageElement[]>}
 */
export const preloadImages = async (sources) => {
  try {
    const promises = sources.map(src => preloadImage(src));
    return await Promise.allSettled(promises);
  } catch (error) {
    console.warn('Some images failed to preload:', error);
    return [];
  }
};

/**
 * Generates responsive image sources for different screen sizes
 * @param {string} baseSrc - Base image URL
 * @param {Object} options - Options for responsive images
 * @returns {Object} Responsive image sources
 */
export const generateResponsiveImages = (baseSrc, options = {}) => {
  const {
    sizes = [320, 640, 768, 1024, 1280, 1920],
    format = 'webp',
    fallbackFormat = 'jpg'
  } = options;

  // This would typically integrate with an image optimization service
  // For now, we'll return the original source with different size parameters
  const sources = sizes.map(size => ({
    size,
    webp: `${baseSrc}?w=${size}&f=${format}`,
    fallback: `${baseSrc}?w=${size}&f=${fallbackFormat}`
  }));

  return {
    sources,
    srcSet: sources.map(s => `${s.webp} ${s.size}w`).join(', '),
    fallbackSrcSet: sources.map(s => `${s.fallback} ${s.size}w`).join(', ')
  };
};

/**
 * Checks if an image URL is valid and accessible
 * @param {string} src - Image source URL
 * @returns {Promise<boolean>}
 */
export const validateImageUrl = async (src) => {
  try {
    await preloadImage(src);
    return true;
  } catch {
    return false;
  }
};

/**
 * Gets the appropriate fallback image based on context
 * @param {string} type - Type of image (portfolio, testimonial, etc.)
 * @param {string} customFallback - Custom fallback URL
 * @returns {string} Fallback image URL
 */
export const getFallbackImage = (type = 'default', customFallback = null) => {
  if (customFallback) {
    return customFallback;
  }
  return getPlaceholderImage(type);
};

/**
 * Optimizes image loading by determining the best strategy
 * @param {string} src - Image source URL
 * @param {Object} options - Loading options
 * @returns {Object} Optimized loading configuration
 */
export const getOptimalLoadingStrategy = (src, options = {}) => {
  const {
    isAboveFold = false,
    isInViewport = false,
    connectionSpeed = 'fast'
  } = options;

  // Determine loading strategy based on context
  let loading = 'lazy';
  let priority = 'low';

  if (isAboveFold) {
    loading = 'eager';
    priority = 'high';
  } else if (isInViewport) {
    loading = 'eager';
    priority = 'medium';
  }

  // Adjust for slow connections
  if (connectionSpeed === 'slow') {
    loading = 'lazy';
    priority = 'low';
  }

  return {
    loading,
    priority,
    shouldPreload: isAboveFold && connectionSpeed !== 'slow'
  };
};

/**
 * Creates a blur placeholder from an image
 * @param {string} src - Image source URL
 * @param {number} quality - Blur quality (1-100)
 * @returns {Promise<string>} Base64 encoded blur placeholder
 */
export const createBlurPlaceholder = async (src, quality = 10) => {
  try {
    // This would typically be done server-side or with a service
    // For now, return a simple gradient placeholder
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 40;
    canvas.height = 30;
    
    const gradient = ctx.createLinearGradient(0, 0, 40, 30);
    gradient.addColorStop(0, '#f8fafc');
    gradient.addColorStop(1, '#e2e8f0');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 40, 30);
    
    return canvas.toDataURL('image/jpeg', quality / 100);
  } catch (error) {
    console.warn('Failed to create blur placeholder:', error);
    return getPlaceholderImage('default');
  }
};

/**
 * Image format detection and optimization
 * @param {string} src - Image source URL
 * @returns {Object} Image format information
 */
export const analyzeImageFormat = (src) => {
  const extension = src.split('.').pop()?.toLowerCase();
  const isWebP = extension === 'webp';
  const isModern = ['webp', 'avif'].includes(extension);
  const isVector = ['svg'].includes(extension);
  
  return {
    extension,
    isWebP,
    isModern,
    isVector,
    needsFallback: isModern,
    supportsLazyLoading: !isVector
  };
};