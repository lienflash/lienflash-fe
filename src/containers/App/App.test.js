import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index.js';
import App from './App'

describe('App component', () => {
  it.skip('Should render the homepage when the app loads', () => {
    const store = createStore(rootReducer);
    
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter> 
      </Provider>
    )
  
    const header = screen.getByRole('heading', { name: 'What Do You Want To Do?'})
    const addJobButton = screen.getByRole('button', { name: 'Add Job'})
    const elibibleJobsButton = screen.getByRole('button', { name: 'Eligible Jobs' })
    const filedLiensButton = screen.getByRole('button', { name: 'Filed Liens' })
    const profileButton = screen.getByRole('button', { name: 'Profile' })

    expect(header).toBeInTheDocument()
    expect(addJobButton ).toBeInTheDocument()
    expect(elibibleJobsButton).toBeInTheDocument()
    expect(filedLiensButton).toBeInTheDocument()
    expect(profileButton).toBeInTheDocument()
  })

    it('Should render loading page while data is being fetched', () => {

      const store = createStore(rootReducer);

      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      )

      const header = screen.getByRole('heading', { name: 'Please wait while we load your dashboard' })

      expect(header).toBeInTheDocument()
    })

})

