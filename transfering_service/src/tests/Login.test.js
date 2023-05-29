import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from '../Pages/Login';

describe('Login component', () => {
  test('should handle form submission', async () => {
    render(<Login />);

    const usernameInput = screen.getByLabelText(/username or email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    fireEvent.click(submitButton);

    // You can add assertions here to check the expected behavior
    // For example, you can check if an alert message is displayed
    // or if the page is redirected to a specific location.
  });
});