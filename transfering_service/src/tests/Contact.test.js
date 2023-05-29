import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Pages/Contact';

describe('Contact', () => {
  test('submits contact form successfully', () => {
    render(<Contact />);

    // Fill in the form inputs
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

    const messageInput = screen.getByLabelText(/message/i);
    fireEvent.change(messageInput, { target: { value: 'Hello, this is my message.' } });

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    // Assert that the form is submitted successfully
    expect(screen.getByText(/form submitted successfully/i)).toBeInTheDocument();
  });
});