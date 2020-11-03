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

    const header = screen.getByRole('heading', { name: 'What do you want to do?' })
    const addJobButton = screen.getByRole('button', { name: 'Add Job' })
    const elibibleJobsButton = screen.getByRole('button', { name: 'NOI Eligible Jobs' })
    const filedLiensButton = screen.getByRole('button', { name: 'Filed Liens' })
    const profileButton = screen.getByRole('button', { name: 'Profile' })
    const installButton = screen.getByText('Install App');

    expect(header).toBeInTheDocument()
    expect(addJobButton).toBeInTheDocument()
    expect(elibibleJobsButton).toBeInTheDocument()
    expect(filedLiensButton).toBeInTheDocument()
    expect(profileButton).toBeInTheDocument()
    expect(installButton).toBeInTheDocument()
  })
  it('should show message when install button clicked', () => {
    const installButton = screen.getByText('Install App');

    fireEvent.click(installButton);

    const message = screen.getByLabelText('Install on mobile:', {exact: false});

    expect(message).toBeInTheDocument()
  })
})
