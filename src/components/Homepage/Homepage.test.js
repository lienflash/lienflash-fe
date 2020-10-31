import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Homepage from './Homepage';

describe('Homepage component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Homepage />
      </ MemoryRouter>
    )
  })

  it('Should render the users dashboard when the app loads', () => {

    const header = screen.getByRole('heading', { name: 'What Do You Want To Do?' })
    const addJobButton = screen.getByRole('button', { name: 'Add Job' })
    const elibibleJobsButton = screen.getByRole('button', { name: 'NOI Eligible Jobs' })
    const filedLiensButton = screen.getByRole('button', { name: 'Filed Liens' })
    const profileButton = screen.getByRole('button', { name: 'Profile' })

    expect(header).toBeInTheDocument()
    expect(addJobButton).toBeInTheDocument()
    expect(elibibleJobsButton).toBeInTheDocument()
    expect(filedLiensButton).toBeInTheDocument()
    expect(profileButton).toBeInTheDocument()
  })


  /* This one isn't setup correctly yet */
  // it('Should redirect user to a new page based on which button they click on the dashboard', async () => {

  //   const addJobButton = screen.getByRole('button', { name: 'Add Job' })

  //   fireEvent.click(addJobButton)

  //   const jobFormHeader = await waitFor(() => screen.getByText('This will be the job form'))

  //   expect(jobFormHeader).toBeInTheDocument()
  // })
})
