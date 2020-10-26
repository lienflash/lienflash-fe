import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import JobFormStepTwo from './JobFormStepTwo'

describe('JobFormStepTwo component', () => {
  it('Should render step one of the form', () => {

    render(
      <JobFormStepTwo 
        handleInputChange={jest.fn()}
        currentStep={2}
      />
    )

    const heading = screen.getByRole('heading', { name: 'Client / Company Details' })
    const companyName = screen.getByText('Client / Company Name:')
    const contactName = screen.getByText('Client / Contact Name:')
    const BusinessAddress = screen.getByText('Business Address:')
    const city = screen.getByText('City:')
    const state = screen.getByText('State:')
    const zipCode = screen.getByText('Zip Code:')
    const email = screen.getByText('Client Email:')
    const phone = screen.getByText('Client Phone number:')

    expect(heading).toBeInTheDocument()
    expect(companyName).toBeInTheDocument()
    expect(contactName).toBeInTheDocument()
    expect(BusinessAddress).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(zipCode).toBeInTheDocument()
    expect(state).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(phone).toBeInTheDocument()
  })
})