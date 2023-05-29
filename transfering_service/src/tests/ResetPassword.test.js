import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ForgotPassword from '../Pages/ResetPassword';

describe('ForgotPassword', () => {
  test('submits reset password form successfully', () => {
    render(<ForgotPassword />);

    // Fill in the email input
    const emailInput = screen.getByLabelText(/email address/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /reset password/i });
    fireEvent.click(submitButton);

    // Assert that the form is submitted successfully
    expect(screen.getByText(/form submitted successfully/i)).toBeInTheDocument();
  });
});