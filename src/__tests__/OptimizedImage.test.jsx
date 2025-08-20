import React from 'react';
import { render, screen } from '@testing-library/react';
import OptimizedImage from '../components/OptimizedImage';

describe('OptimizedImage', () => {
  it('renders with alt text', () => {
    render(<OptimizedImage src="/test.jpg" alt="Test image" />);
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('shows fallback on error', () => {
    render(<OptimizedImage src="/broken.jpg" alt="Broken image" fallbackSrc="/fallback.png" />);
    const img = screen.getByAltText('Broken image');
    // Simulate error
    img.onerror();
    // Fallback should be present (simulate by checking src)
    expect(img.src).toMatch(/fallback.png$/);
  });

  it('shows loading state', () => {
    render(<OptimizedImage src="/test.jpg" alt="Test image" />);
    // Should show loading indicator (customize selector as needed)
    expect(screen.getByTestId('image-loading')).toBeInTheDocument();
  });
});
