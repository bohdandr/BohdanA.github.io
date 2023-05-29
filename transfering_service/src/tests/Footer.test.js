import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer';

describe('Footer component', () => {
  it('renders the footer with the organization name', () => {
    render(<Footer />);
    
    expect(screen.getByText(/money transfer organization/i)).toBeInTheDocument();
  });
});