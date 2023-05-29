import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from '../Pages/Dialog';

describe('Dialog component', () => {
  it('renders the create user dialog form', () => {
    render(<Dialog />);
    
    expect(screen.getByText(/create user dialog/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByTestId('confirm-password-input')).toBeInTheDocument();
    expect(screen.getByLabelText(/role/i)).toBeInTheDocument();
    expect(screen.getByTestId('create_button')).toBeInTheDocument();
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
  });

  it('handles form submission correctly', async () => {
    render(<Dialog />);
    
    const mockFetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({ code: 200 }),
    });
    global.fetch = mockFetch;

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByTestId('confirm-password-input'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/role/i), { target: { value: '0' } });

    fireEvent.click(screen.getByTestId('create_button'));

    expect(mockFetch).toHaveBeenCalledWith('http://127.0.0.1:5000/api/v1/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'testuser',
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        password: 'password123',
        isAdmin: '0',
      }),
    });

    const successMessage = await screen.findByText(/User_successfully_created/i);
    expect(successMessage).toBeInTheDocument();
  });

  // Add more test cases as needed for different scenarios
});