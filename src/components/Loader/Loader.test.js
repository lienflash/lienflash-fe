import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Loader from './Loader'

describe('Loader component', () => {
  it('Should display the loading page', () => {

    render(
      <MemoryRouter>
        <Loader />
      </MemoryRouter>
    )

    const loadingSection = screen.getByLabelText('loading the page')
    const heading = screen.getByRole('heading', { name: 'Please wait while we load your dashboard' })

    expect(loadingSection).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
  })
})