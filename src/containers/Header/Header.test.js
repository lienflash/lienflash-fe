import React from 'react';
import Header from './Header.js';
import { screen, render } from '@testing-library/react';
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
          <Header />
        </MemoryRouter>
      </Provider>
    )

    const logo = screen.getByAltText('lienflash logo');

    expect(logo).toBeInTheDocument();
  });
})
