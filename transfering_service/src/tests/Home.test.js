import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Pages/Home';

describe('Home', () => {
  test('renders home page with cards', () => {
    render(<Home />);

    const updateCardLink = screen.getByRole('link', { name: /update user/i });
    const myWalletCardLink = screen.getByRole('link', { name: /my wallet/i });
    const sendMoneyCardLink = screen.getByRole('link', { name: /send money/i });

    expect(updateCardLink).toBeInTheDocument();
    expect(myWalletCardLink).toBeInTheDocument();
    expect(sendMoneyCardLink).toBeInTheDocument();
  });
});