import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LogoutButton from '../Pages/Logout';



describe('LogoutButton', () => {
  test('handles logout and redirects to login page', () => {
    // Mock sessionStorage.removeItem
    const removeItemMock = jest.fn();
    window.sessionStorage.removeItem = removeItemMock;

    // Mock window.location.href
    delete window.location;
    window.location = { href: '' };

    // Render the LogoutButton
    const { getByText } = render(<LogoutButton />);

    // Simulate clicking the logout button
    const logoutButton = getByText('Logout');
    fireEvent.click(logoutButton);

    // Assert that sessionStorage.removeItem was called with the expected key
    expect(removeItemMock).toHaveBeenCalledWith('authToken');

    // Assert that window.location.href was updated to the expected value
    expect(window.location.href).toBe('./');
  });
});