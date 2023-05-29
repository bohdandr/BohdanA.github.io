import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../Components/Header'

describe('Header component', () => {
    it('renders the header with login links when not authenticated', () => {
        render(
            <Router>
                <Header />
            </Router>
        );

        expect(screen.getByText(/moneytransfer/i)).toBeInTheDocument();
        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/user dialog/i)).toBeInTheDocument();
        expect(screen.getByText(/contact/i)).toBeInTheDocument();
        expect(screen.getByText(/login/i)).toBeInTheDocument();
    });

    it('renders the header with profile and logout links when authenticated', () => {
        sessionStorage.setItem('Authorization', 'dummy-token');

        render(
            <Router>
                <Header />
            </Router>
        );

        expect(screen.getByText(/moneytransfer/i)).toBeInTheDocument();
        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/user dialog/i)).toBeInTheDocument();
        expect(screen.getByText(/contact/i)).toBeInTheDocument();
        expect(screen.getByText(/profile/i)).toBeInTheDocument();
        expect(screen.getByText(/logout/i)).toBeInTheDocument();

        // Clean up the sessionStorage for subsequent tests
        sessionStorage.removeItem('Authorization');
    });
});