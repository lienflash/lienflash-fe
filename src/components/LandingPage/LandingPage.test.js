import React from 'react';
import LandingPage from './LandingPage'
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index.js';

describe('LandingPage', () => {
  it('should display page on load', () => {
    const store = createStore(rootReducer);

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      </Provider>
    )

    const logo = screen.getByAltText('lienflash logo');
    const msg1 = screen.getByText('Welcome to LienFlash!');
    const msg2 = screen.getByText('Please login to continue')
    const createBtn = screen.getByRole('button', {name: 'Create Account'});
    const loginBtn = screen.getByRole('button', {name: 'Login'});

    expect(logo).toBeInTheDocument()
    expect(msg1).toBeInTheDocument()
    expect(msg2).toBeInTheDocument()
    expect(createBtn).toBeInTheDocument()
    expect(loginBtn).toBeInTheDocument()
  })
})
