import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App'

describe('App component', () => {
  it('Should render the homepage when the app loads', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter> 
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
})

