import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MyWallet from '../Pages/myWallet';

jest.mock('axios');

describe('MyWallet', () => {
  test('handles withdrawal and replenishment', async () => {
    const walletData = 100;
    axios.get.mockResolvedValueOnce({ data: { wallet: walletData } });

    render(<MyWallet />);

    // Assert that the initial balance is rendered correctly
    expect(screen.getByTestId('withdrawal')).toBeInTheDocument();

    // Simulate withdrawal
    const withdrawalAmount = "50";
    const withdrawalInput = screen.getByLabelText(/withdrawal amount/i);
    const withdrawalButton = screen.getByTestId('withdraw');

    fireEvent.change(withdrawalInput, { target: { value: withdrawalAmount } });
    fireEvent.click(withdrawalButton);

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(
        'http://localhost:5000/api/v1/user/withdraw',
        { valueWithdrawal: withdrawalAmount },
        {
          headers: {
            Authorization: expect.any(String),
          },
        }
      );
    });

    axios.put.mockResolvedValueOnce({});

    const successMessage = await screen.findByText(/Your_withdrawal_is_successfully_finished/i);
    expect(successMessage).toBeInTheDocument();
  });
});