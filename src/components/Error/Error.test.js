import React from 'react';
import Error from './Error.js';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index.js';

describe('Error', () => {
  it('should display an error message when there is one.', () => {
    const store = createStore(rootReducer);

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <Error message={'Error'} />
        </MemoryRouter>
      </Provider>
    )

    const message = screen.getByText('Error');

    expect(message).toBeInTheDocument();
  });
})
