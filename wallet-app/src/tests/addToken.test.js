import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';

import App from '../App';

describe('Add token page test', () => {
  it ('should render the add token page', () => {
    render(<App />);

    const addTokenButton = screen.getByText('Add Token');

    userEvent.click(addTokenButton);
    const addTokenPage = screen.getByText('Add Token');
    const backButton = screen.getByText('Voltar');
    const token = screen.getByText('Token');
    const balance = screen.getByText('Balance');
    const tokenInput = screen.getByTestId('token-input');
    const balanceInput = screen.getByTestId('balance-input');
    const saveButton = screen.getByText('Save');

    expect(addTokenPage).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(token).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
    expect(tokenInput).toBeInTheDocument();
    expect(balanceInput).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  })

  it ('should error message if just input balance', () => {
    render(<App />)

    const addTokenButton = screen.getByText('Add Token');

    userEvent.click(addTokenButton);
    const balanceInput = screen.getByTestId('balance-input');
    const saveButton = screen.getByText('Save');
    
    userEvent.type(balanceInput, 100);
    userEvent.click(saveButton);
    
    const errorMessage = screen.getByText('Preencha todos os campos');

    expect(errorMessage).toBeInTheDocument();
  })
  it ('should error message if just input token', () => {
    render(<App />);

    const addTokenButton = screen.getByText('Add Token');

    userEvent.click(addTokenButton);
    const tokenInput = screen.getByTestId('token-input');
    const saveButton = screen.getByText('Save');

    userEvent.type(tokenInput, 'DVK');
    userEvent.click(saveButton);

    const errorMessage = screen.getByText('Preencha todos os campos');

    expect(errorMessage).toBeInTheDocument();
  })
  it ('should error message if dont type in inputs', () => {
    render(<App />);

    const addTokenButton = screen.getByText('Add Token');

    userEvent.click(addTokenButton);
    const tokenInput = screen.getByTestId('token-input');
    const balanceInput = screen.getByTestId('balance-input');
    const saveButton = screen.getByText('Save');

    userEvent.type(tokenInput, '');
    userEvent.type(balanceInput, '');
    userEvent.click(saveButton);

    const errorMessage = screen.getByText('Preencha todos os campos');

    expect(errorMessage).toBeInTheDocument();
  })
  it ('should pass through and add token successful', () => {
    render(<App />);

    const addTokenButton = screen.getByText('Add Token');

    userEvent.click(addTokenButton);
    const tokenInput = screen.getByTestId('token-input');
    const balanceInput = screen.getByTestId('balance-input');
    const saveButton = screen.getByText('Save');

    userEvent.type(tokenInput, 'DVK');
    userEvent.type(balanceInput, 100);
    userEvent.click(saveButton);
  })
  it ('testing if backbutton works', () => {
    render(<App />);

    const addTokenButton = screen.getByText('Add Token');

    userEvent.click(addTokenButton);
    const backButton = screen.getByText('Voltar');

    userEvent.click(backButton);

    expect(global.window.location.href).toContain('/');
  })
});