import React from 'react';
import Header from './Header.js';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index.js';

describe('Header', () => {
  it('should display header on page load', () => {
    const store = createStore(rootReducer);

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <Header currentPath='no-user'/>
        </MemoryRouter>
      </Provider>
    )

    const logo = screen.getByAltText('lienflash logo');

    expect(logo).toBeInTheDocument();
  });
  it('should clear info when logout button is clicked', () => {
    const store = createStore(rootReducer);

    store.dispatch = jest.fn();

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <Header dispatch={store.dispatch} currentPath='user'/>
        </MemoryRouter>
      </Provider>
    )

    const logoutBtn = screen.getByRole('button', {name: 'Log Out'})

    expect(logoutBtn).toBeInTheDocument()

    fireEvent.click(logoutBtn);

    expect(store.dispatch).toBeCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith({"type": "CLEAR_JOBS"})
    expect(store.dispatch).toHaveBeenCalledWith({"type": "LOGOUT_USER"})

  })
})
