# Image Loading Fix - Design Document

## Overview

This document outlines the technical approach to fix the critical image loading issues in the DMKR.co.uk website. The current OptimizedImage component is causing failures, so we need a simpler, more reliable solution.

## Root Cause Analysis

### Current Problems
1. **OptimizedImage component complexity** - Too many states and conditions causing loading failures
2. **Intersection Observer conflicts** - Lazy loading preventing images from loading
3. **State management issues** - Images getting stuck in "loading" state
4. **Inconsistent fallback handling** - Some components use different image loading approaches

### Why Images Fail
- OptimizedImage component has complex state logic that can get stuck
- useImageLoader hook has race conditions
- Intersection Observer may not trigger properly
- Error handling is hiding images instead of showing fallbacks

## Architecture

### Simple Image Loading Strategy

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Image Request │───▶│  Direct Loading  │───▶│  Success/Error  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │                        │
                                ▼                        ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │  Loading State   │    │  Fallback Image │
                       └──────────────────┘    └─────────────────┘
```

### Component Design

#### SimpleImage Component
```jsx
const SimpleImage = ({ src, alt, fallback, className, onError, onLoad }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (fallback && currentSrc !== fallback) {
      setCurrentSrc(fallback);
    } else {
      setHasError(true);
    }
    onError?.();
  };

  if (hasError) {
    return <div className="bg-gray-200 flex items-center justify-center">Image not available</div>;
  }

  return <img src={currentSrc} alt={alt} className={className} onError={handleError} onLoad={onLoad} />;
};
```

## Implementation Plan

### Phase 1: Replace OptimizedImage
1. Create SimpleImage component with minimal logic
2. Replace all OptimizedImage usage with SimpleImage
3. Test basic image loading functionality

### Phase 2: Add Fallback System
1. Create branded placeholder images
2. Implement fallback URL system
3. Add proper error states

### Phase 3: Performance Optimization
1. Add lazy loading for below-fold images
2. Implement progressive image loading
3. Add loading states where needed

### Phase 4: Development Server Setup
1. Ensure `npm run dev` works properly
2. Configure proper localhost access
3. Test all image loading scenarios

## Error Handling Strategy

### Fallback Hierarchy
1. **Primary Image** - Original URL
2. **Fallback Image** - Alternative URL if provided
3. **Placeholder Image** - Branded placeholder
4. **Error State** - Text-based fallback

### Error Logging
- Log failed image URLs to console
- Track error patterns for debugging
- Don't hide images on error - show fallbacks instead

## Testing Strategy

### Manual Testing
1. Test all pages with images
2. Test with slow network connections
3. Test with invalid image URLs
4. Test on mobile devices

### Automated Testing
1. Verify image loading in development
2. Check fallback behavior
3. Validate error handling

## Performance Considerations

### Loading Strategy
- Load above-fold images immediately
- Use lazy loading for below-fold images
- Implement proper image sizing
- Add loading states for better UX

### Network Optimization
- Use appropriate image formats
- Implement retry logic for failed loads
- Cache successful image loads
- Handle offline scenarios

## Development Server Configuration

### Port Configuration
- Default Vite dev server runs on port 5173
- Accessible at `http://localhost:5173`
- Hot reload enabled for development
- CORS configured for external image URLs

### Environment Setup
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

## Success Metrics

- 100% image loading success rate
- < 3 second load time for all images
- Proper fallback display for failed images
- Stable development server access
- No broken image icons visible