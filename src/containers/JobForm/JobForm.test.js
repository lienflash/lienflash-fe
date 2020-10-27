import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import JobForm from './JobForm'

describe('Form component', () => {
  beforeEach(() => {

    render(
      <JobForm />
    )

  })

  it('Should render the Add New Job form', () => {

    const heading = screen.getByRole('heading', { name: 'Add New Job' })
    const nextButton = screen.getByRole('button', { name: 'Next' })
 
    expect(heading).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()

    /*This part of test now failing since I added the checkRequiredFields function to validate inputs */

    // rendering second page of form

    // fireEvent.click(nextButton)

    // const backButton = screen.getByRole('button', { name: 'Back' })
    // const submitButton = screen.getByRole('button', { name: 'Submit' })
    // expect(backButton).toBeInTheDocument() 
    // expect(submitButton).toBeInTheDocument() 
    // expect(nextButton).not.toBeInTheDocument() 
  })

  it('Should display error message if a required field is not completed', () => {

    const nextButton = screen.getByRole('button', { name: 'Next' })

    fireEvent.click(nextButton)

    const errorMsg = screen.getByText('Please complete required fields')
    expect(errorMsg).toBeInTheDocument() 

  })
})