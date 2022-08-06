import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';
import Home from '../pages/Home';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Home page test', () => {
  it('should render the home page', () => {
    render (
      <Router>
        <Home />
      </Router>
    );
    const wishWalletText = screen.getByText('Wish Wallet');
    const addTokenButton = screen.getByTestId('add-token-button');
    const tokenList = screen.getByText('Token');
    const balanceList = screen.getByText('Balance');
    expect(wishWalletText).toBeInTheDocument();
    expect(addTokenButton).toBeInTheDocument();
    expect(tokenList).toBeInTheDocument();
    expect(balanceList).toBeInTheDocument();

    userEvent.click(addTokenButton);

    expect(screen.getByText('Add Token')).toBeInTheDocument();
  })
});