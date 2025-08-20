import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';

function ProblemChild() {
  throw new Error('Test error');
}

describe('ErrorBoundary', () => {
  it('catches errors and displays fallback UI', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
    expect(getByText(/something went wrong/i)).toBeInTheDocument();
  });
});
