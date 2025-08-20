import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal';

describe('Modal', () => {
  it('renders children when open', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    const { getByLabelText } = render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );
    fireEvent.click(getByLabelText(/close/i));
    expect(onClose).toHaveBeenCalled();
  });
});
