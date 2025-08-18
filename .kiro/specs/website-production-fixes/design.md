# Design Document

## Overview

This design document outlines the technical approach for fixing critical issues in the DMKR.co.uk website and preparing it for production deployment. The solution focuses on improving modal functionality, implementing robust image handling, enhancing user interactions, and optimizing for production performance.

## Architecture

### Component Architecture
The website follows a React-based component architecture with the following key layers:

1. **Presentation Layer**: React components with Framer Motion animations
2. **State Management**: React hooks for local state, Context API for global state
3. **Styling Layer**: Tailwind CSS with custom utility classes
4. **Asset Management**: Optimized image handling with fallbacks
5. **Build Layer**: Vite for development and production builds

### Modal System Architecture
- **Modal Provider**: Context-based modal management for global state
- **Modal Component**: Reusable modal with accessibility features
- **Image Viewer**: Specialized modal for portfolio image viewing
- **Event Handling**: Keyboard, click, and touch event management

## Components and Interfaces

### Enhanced Modal Component
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
}
```

**Key Features:**
- Portal-based rendering for proper z-index management
- Focus trap for accessibility
- Smooth animations with Framer Motion
- Responsive sizing options
- Customizable close behaviors

### Image Component with Fallbacks
```typescript
interface OptimizedImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}
```

**Key Features:**
- Automatic fallback to placeholder images
- Loading states with skeleton animations
- Lazy loading for performance
- WebP format support with fallbacks
- Responsive image sizing

### Portfolio Gallery Component
```typescript
interface PortfolioGalleryProps {
  images: PortfolioImage[];
  columns?: number;
  showModal?: boolean;
  filterCategories?: string[];
}

interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
}
```

**Key Features:**
- Grid layout with responsive columns
- Category filtering
- Modal integration for detailed views
- Hover effects and animations
- Keyboard navigation support

### Image Modal Viewer
```typescript
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: PortfolioImage;
  images?: PortfolioImage[];
  currentIndex?: number;
  onNext?: () => void;
  onPrevious?: () => void;
}
```

**Key Features:**
- Full-screen image viewing
- Navigation between images
- Image details overlay
- Zoom functionality
- Touch/swipe support for mobile

## Data Models

### Portfolio Image Model
```typescript
interface PortfolioImage {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  thumbnailUrl?: string;
  alt: string;
  tags?: string[];
  projectDate?: Date;
  location?: string;
}
```

### Modal State Model
```typescript
interface ModalState {
  isOpen: boolean;
  type: 'image' | 'form' | 'confirmation' | 'generic';
  data?: any;
  options?: ModalOptions;
}

interface ModalOptions {
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick: boolean;
  closeOnEscape: boolean;
  showCloseButton: boolean;
}
```

### Image Loading State Model
```typescript
interface ImageLoadingState {
  status: 'loading' | 'loaded' | 'error';
  src: string;
  fallbackSrc?: string;
  retryCount: number;
}
```

## Error Handling

### Image Loading Errors
1. **Primary Image Failure**: Automatically fallback to placeholder image
2. **Placeholder Failure**: Use CSS-based fallback with company branding
3. **Network Issues**: Implement retry logic with exponential backoff
4. **Invalid URLs**: Validate image URLs before attempting to load

### Modal Errors
1. **Content Loading Failures**: Display error message within modal
2. **Animation Failures**: Graceful degradation to simple show/hide
3. **Focus Management Issues**: Fallback to basic focus handling
4. **Portal Mounting Errors**: Render inline as fallback

### Production Error Handling
1. **JavaScript Errors**: Global error boundary with user-friendly messages
2. **Network Failures**: Offline detection and appropriate messaging
3. **API Failures**: Graceful degradation for form submissions
4. **Build Failures**: Proper error reporting and rollback procedures

## Testing Strategy

### Unit Testing
- **Component Testing**: Jest + React Testing Library for all components
- **Hook Testing**: Custom hooks with proper mocking
- **Utility Functions**: Pure function testing with edge cases
- **Error Scenarios**: Testing error boundaries and fallback states

### Integration Testing
- **Modal Interactions**: Full user interaction flows
- **Image Loading**: Various network conditions and error states
- **Portfolio Gallery**: Filtering, sorting, and modal integration
- **Form Submissions**: End-to-end form handling

### Performance Testing
- **Image Loading**: Lazy loading and optimization verification
- **Bundle Size**: Analysis of production build sizes
- **Runtime Performance**: React DevTools profiling
- **Lighthouse Audits**: Performance, accessibility, and SEO scores

### Accessibility Testing
- **Screen Reader**: NVDA/JAWS compatibility testing
- **Keyboard Navigation**: Tab order and focus management
- **Color Contrast**: WCAG 2.1 AA compliance
- **ARIA Labels**: Proper semantic markup validation

## Production Optimizations

### Build Optimizations
1. **Code Splitting**: Route-based and component-based splitting
2. **Tree Shaking**: Remove unused code from bundles
3. **Minification**: JavaScript, CSS, and HTML compression
4. **Asset Optimization**: Image compression and format conversion

### Performance Optimizations
1. **Image Optimization**: WebP conversion with fallbacks
2. **Lazy Loading**: Images and components below the fold
3. **Caching Strategy**: Service worker for static assets
4. **CDN Integration**: Asset delivery optimization

### SEO Optimizations
1. **Meta Tags**: Dynamic meta tag generation
2. **Structured Data**: JSON-LD for business information
3. **Sitemap**: Automatic sitemap generation
4. **Open Graph**: Social media sharing optimization

### Security Measures
1. **Content Security Policy**: Strict CSP headers
2. **HTTPS Enforcement**: Redirect all HTTP to HTTPS
3. **Input Validation**: Client and server-side validation
4. **Environment Variables**: Secure configuration management

## Deployment Strategy

### Environment Configuration
- **Development**: Local development with hot reloading
- **Staging**: Production-like environment for testing
- **Production**: Optimized build with monitoring

### CI/CD Pipeline
1. **Code Quality**: ESLint, Prettier, and TypeScript checks
2. **Testing**: Automated test suite execution
3. **Build**: Production build generation and optimization
4. **Deployment**: Automated deployment with rollback capability

### Monitoring and Analytics
1. **Error Tracking**: Real-time error monitoring
2. **Performance Monitoring**: Core Web Vitals tracking
3. **User Analytics**: Privacy-compliant usage analytics
4. **Uptime Monitoring**: Service availability tracking