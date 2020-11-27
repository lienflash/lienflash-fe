import React from 'react';
import AdminHomepage from './AdminHomepage.js';
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
          <AdminHomepage />
        </ MemoryRouter>
      </Provider>
    )
  })
  it('should display the user homepage on load', () => {
    const placeholder = screen.getByText('Admin Dashboard');

    expect(placeholder).toBeInTheDocument()
  })
});