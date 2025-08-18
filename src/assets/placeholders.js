// SVG-based placeholder images for different contexts
export const placeholderImages = {
  // Default DMKR branded placeholder
  default: `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <g transform="translate(200,150)">
        <circle cx="0" cy="-20" r="30" fill="#64748b" opacity="0.3"/>
        <rect x="-40" y="10" width="80" height="40" rx="4" fill="#64748b" opacity="0.3"/>
        <text x="0" y="70" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#64748b">DMKR Tiling</text>
      </g>
    </svg>
  `)}`,

  // Portfolio/gallery placeholder
  portfolio: `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="portfolioBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#cbd5e1;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#portfolioBg)"/>
      <g transform="translate(200,150)">
        <rect x="-50" y="-30" width="100" height="60" rx="8" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="5,5"/>
        <circle cx="-25" cy="-10" r="8" fill="#64748b" opacity="0.5"/>
        <polygon points="-40,20 -20,0 0,20 20,0 40,20" fill="#64748b" opacity="0.5"/>
        <text x="0" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#64748b">Portfolio Image</text>
      </g>
    </svg>
  `)}`,

  // Testimonial/avatar placeholder
  testimonial: `data:image/svg+xml;base64,${btoa(`
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="testimonialBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f0fdf4;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#dcfce7;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#testimonialBg)" rx="100"/>
      <g transform="translate(100,100)">
        <circle cx="0" cy="-10" r="25" fill="#22c55e" opacity="0.3"/>
        <path d="M-20,10 Q-20,0 -10,0 L10,0 Q20,0 20,10 L20,30 Q20,40 10,40 L-10,40 Q-20,40 -20,30 Z" fill="#22c55e" opacity="0.3"/>
        <text x="0" y="60" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#22c55e">Customer</text>
      </g>
    </svg>
  `)}`,

  // Error state placeholder
  error: `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="errorBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#fef2f2;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#fecaca;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#errorBg)"/>
      <g transform="translate(200,150)">
        <circle cx="0" cy="0" r="30" fill="none" stroke="#ef4444" stroke-width="3"/>
        <path d="M-15,-15 L15,15 M15,-15 L-15,15" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
        <text x="0" y="50" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#ef4444">Image Not Available</text>
      </g>
    </svg>
  `)}`
};

// Helper function to get placeholder by type
export const getPlaceholderImage = (type = 'default') => {
  return placeholderImages[type] || placeholderImages.default;
};