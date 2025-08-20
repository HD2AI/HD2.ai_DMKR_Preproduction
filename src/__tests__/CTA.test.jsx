import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CTA from '../components/CTA';

describe('CTA', () => {
  it('renders form and validates input', () => {
    render(<CTA />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });

  it('shows success message on valid submit', () => {
    render(<CTA />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByText(/submit/i));
    expect(screen.getByText(/thank you/i)).toBeInTheDocument();
  });
});
