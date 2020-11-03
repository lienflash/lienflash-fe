import React from 'react';
import Login from './Login.js';
import thunk from 'redux-thunk';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Login', () => {

  beforeEach(() => {
    const store = mockStore({})

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </ MemoryRouter>
      </Provider>
    )
  })
  it('should display login page on load', () => {
    const emailLabel = screen.getByText('Email');
    const emailBox = screen.getByPlaceholderText('joe@gmail.com')
    const passwordLabel = screen.getByText('Password')
    const passwordBox = screen.getByPlaceholderText('Password')
    const button = screen.getByRole('button', {name: 'Submit Login'})

    expect(emailLabel).toBeInTheDocument()
    expect(emailBox).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()
    expect(passwordBox).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  });
  it('should allow a user to enter information to sign in', () => {
    const emailBox = screen.getByPlaceholderText('joe@gmail.com');
    const passwordBox = screen.getByPlaceholderText('Password')

    fireEvent.change(emailBox, {target: {value:'taryn@gmail.com'}})
    fireEvent.change(passwordBox, {target: {value: 'name'}})

    expect(emailBox.value).toBe('taryn@gmail.com');
    expect(passwordBox.value).toBe('name')
  })
})
