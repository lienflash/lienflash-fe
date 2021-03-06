import React from 'react';
import CreateUser from './CreateUser.js';
import thunk from 'redux-thunk';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('CreateUser', () => {
  let store;

  beforeEach(() => {
    store = mockStore({})

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateUser />
        </ MemoryRouter>
      </Provider>
    )
  })
  it('should display create user page on load', () => {
    const nameLabel = screen.getByText('User Name');
    const nameBox = screen.getByPlaceholderText('Joe Smith');
    const businessLabel = screen.getByText('Company Name');
    const businessBox = screen.getByPlaceholderText("Joe's Business")
    const workNumberLabel = screen.getByText('Work Number');
    const workNumberBox = screen.getByPlaceholderText('3035557700');
    const cellNumberLabel = screen.getByText('Cell Number');
    const cellNumberBox = screen.getByPlaceholderText('7205557700')
    const addressLabel = screen.getByText('Business Address:');
    const addressBox = screen.getByPlaceholderText('123 Sesame St.');
    const address2Box = screen.getByPlaceholderText('Suite 200');
    const cityLabel = screen.getByText('City:');
    const cityBox = screen.getByPlaceholderText('Denver')
    const stateLabel = screen.getByText('State:');
    const stateBox = screen.getByPlaceholderText('CO');
    const zipLabel = screen.getByText('Zip Code:');
    const zipBox = screen.getByPlaceholderText('80020');
    const emailLabel = screen.getByText('Email');
    const emailBox = screen.getByPlaceholderText('joe@gmail.com');
    const passwordLabel = screen.getByText('Password');
    const passwordBox = screen.getByPlaceholderText('Password');
    const password2Label = screen.getByText('Password Confirmation');
    const password2Box = screen.getByPlaceholderText('Retype password here');
    const button = screen.getByLabelText('submit form');

    expect(nameLabel).toBeInTheDocument()
    expect(nameBox).toBeInTheDocument()
    expect(businessLabel).toBeInTheDocument()
    expect(businessBox).toBeInTheDocument()
    expect(workNumberLabel).toBeInTheDocument()
    expect(workNumberBox).toBeInTheDocument()
    expect(cellNumberLabel).toBeInTheDocument()
    expect(cellNumberBox).toBeInTheDocument()
    expect(addressLabel).toBeInTheDocument()
    expect(addressBox).toBeInTheDocument()
    expect(address2Box).toBeInTheDocument()
    expect(cityLabel).toBeInTheDocument()
    expect(cityBox).toBeInTheDocument()
    expect(stateLabel).toBeInTheDocument()
    expect(stateBox).toBeInTheDocument()
    expect(zipLabel).toBeInTheDocument()
    expect(zipBox).toBeInTheDocument()
    expect(emailLabel).toBeInTheDocument()
    expect(emailBox).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()
    expect(passwordBox).toBeInTheDocument()
    expect(password2Label).toBeInTheDocument()
    expect(password2Box).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  });
  it('should allow a user to enter information to create an account', () => {
    const nameBox = screen.getByPlaceholderText('Joe Smith');
    const businessBox = screen.getByPlaceholderText("Joe's Business")
    const workNumberBox = screen.getByPlaceholderText('3035557700');
    const cellNumberBox = screen.getByPlaceholderText('7205557700')
    const addressBox = screen.getByPlaceholderText('123 Sesame St.');
    const address2Box = screen.getByPlaceholderText('Suite 200');
    const cityBox = screen.getByPlaceholderText('Denver')
    const stateBox = screen.getByPlaceholderText('CO');
    const zipBox = screen.getByPlaceholderText('80020');
    const emailBox = screen.getByPlaceholderText('joe@gmail.com');
    const passwordBox = screen.getByPlaceholderText('Password');
    const password2Box = screen.getByPlaceholderText('Retype password here');

    fireEvent.change(nameBox, { target: { value: 'Taryn' } })
    fireEvent.change(businessBox, { target: { value: "Taryn's Freelancing" } })
    fireEvent.change(workNumberBox, { target: { value: '3035559999' } })
    fireEvent.change(cellNumberBox, { target: { value: '7201113333'} })
    fireEvent.change(addressBox, { target: { value: '230 Sesame St' } })
    fireEvent.change(address2Box, { target: { value: 'Apt 3' } })
    fireEvent.change(cityBox, { target: { value: 'Aurora' } })
    fireEvent.change(stateBox, { target: { value: 'CO' } })
    fireEvent.change(zipBox, { target: { value: '80101' } })
    fireEvent.change(emailBox, { target: { value: 'taryn@gmail.com' } })
    fireEvent.change(passwordBox, { target: { value: 'name' } })
    fireEvent.change(password2Box, { target: { value: 'name' } })

    expect(nameBox.value).toBe('Taryn')
    expect(businessBox.value).toBe("Taryn's Freelancing")
    expect(workNumberBox.value).toBe('3035559999')
    expect(cellNumberBox.value).toBe('7201113333')
    expect(addressBox.value).toBe('230 Sesame St')
    expect(address2Box.value).toBe('Apt 3')
    expect(cityBox.value).toBe('Aurora')
    expect(stateBox.value).toBe('CO')
    expect(zipBox.value).toBe('80101')
    expect(emailBox.value).toBe('taryn@gmail.com');
    expect(passwordBox.value).toBe('name')
    expect(password2Box.value).toBe('name')
  })
  it('should return an error message if input is wrong', async () => {
    const emailBox = screen.getByPlaceholderText('joe@gmail.com');
    const passwordBox = screen.getByPlaceholderText('Password')
    const button = screen.getByLabelText('submit form');

    fireEvent.change(emailBox, { target: { value: '' } })
    fireEvent.change(passwordBox, { target: { value: 'name' } })
    fireEvent.click(button)

    const message = await waitFor(() => screen.getByText('Please complete required fields.'))
    await waitFor(() => {
      expect(message).toBeInTheDocument()
    })
  })
  it.skip('should return an error message if there is an error in post request', async () => {
    const emailBox = screen.getByPlaceholderText('joe@gmail.com');
    const passwordBox = screen.getByPlaceholderText('Password')
    const button = screen.getByLabelText('submit form');

    fireEvent.change(emailBox, { target: { value: 'taryn' } })
    fireEvent.change(passwordBox, { target: { value: 'name' } })
    fireEvent.click(button)

    const message = await waitFor(() => screen.getByText('Sorry, we had an issue creating your account. Please try again later'))
    await waitFor(() => {
      expect(message).toBeInTheDocument()
    })
  })
})