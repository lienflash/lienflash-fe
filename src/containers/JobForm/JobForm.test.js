import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import JobForm from './JobForm'

describe('Form component', () => {
  it('Should render the Add New Job form', () => {

    render(
      <JobForm />
    )

    const heading = screen.getByRole('heading', { name: 'Add New Job' })
    const nextButton = screen.getByRole('button', { name: 'Next' })
 
    expect(heading).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()

    // rendering second page of form 
    fireEvent.click(nextButton)

    const backButton = screen.getByRole('button', { name: 'Back' })
    expect(backButton).toBeInTheDocument() 
    expect(nextButton).not.toBeInTheDocument() 
  })
})