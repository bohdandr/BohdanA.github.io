import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Update from '../Pages/Update';
import MockAdapter from 'axios-mock-adapter';

jest.mock('axios');

describe('Update', () => {
    test('updates user information and redirects to home page', async () => {
        delete window.location;
        window.location = { href: '' };
        const token = 'fake-token';
        const firstName = 'John';
        const lastName = 'Doe';
        axios.get.mockResolvedValueOnce({ data: { firstName, lastName } });
        axios.put.mockResolvedValueOnce({});
        const historyMock = { push: jest.fn() };

        render(<Update history={historyMock} />);

        // Simulate updating user information
        const newFirstName = 'Jane';
        const newLastName = 'Smith';
        const firstNameInput = screen.getByLabelText(/first name/i);
        const lastNameInput = screen.getByLabelText(/last name/i);
        const updateButton = screen.getByText(/update/i);

        fireEvent.change(firstNameInput, { target: { value: newFirstName } });
        fireEvent.change(lastNameInput, { target: { value: newLastName } });
        fireEvent.click(updateButton);

        await waitFor(() => {
            expect(axios.put).toHaveBeenCalledWith(
                'http://localhost:5000/api/v1/user/self',
                { firstName: newFirstName, lastName: newLastName },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            expect(alert).toHaveBeenCalledWith('User information successfully updated');
            expect(historyMock.push).toHaveBeenCalledWith('/');
        });
    });

    // test('handles user deletion', async () => {
    //     delete window.location;
    //     window.location = { href: '' };
    //     const token = 'test-token';
    //     sessionStorage.setItem('Authorization', token);
      
    //     axios.delete.mockResolvedValueOnce({});
      
    //     render(<Update />);
      
    //     const deleteButton = screen.getByTestId('delete-button');
    //     fireEvent.click(deleteButton);
      
    //     await waitFor(() => {
    //       expect(axios.delete).toHaveBeenCalledWith(
    //         'http://localhost:5000/api/v1/user/self',
    //         {
    //           headers: {
    //             Authorization: token,
    //           },
    //         }
    //       );
    //     });
      
    //     // Assert that the alert message is displayed
    //     expect(window.alert).toHaveBeenCalledWith('User information successfully deleted');
      
    //     // Assert that the user information is cleared after deletion
    //     expect(screen.getByLabelText(/first name/i)).toHaveValue('');
    //     expect(screen.getByLabelText(/last name/i)).toHaveValue('');
    //   });
});