import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import JobFormStepOne from './JobFormStepOne'

describe('JobFormStepOne component', () => {
  it('Should render step two of the form', () => {

    render(
      <JobFormStepOne 
        handleInputChange={jest.fn()}
        currentStep={1}/>
    )

    const heading = screen.getByRole( 'heading', { name: 'Job Site Details' })
    const jobType = screen.getByText('Job Type:', { exact: false })
    const radioBtn1 = screen.getByText('Labor only', { exact: false })
    const radioBtn2 = screen.getByText('Materials & Labor', { exact: false })
    const siteName = screen.getByText('Job Site Name:')
    const siteAddress = screen.getByText('Job Site Address:')
    const city = screen.getByText('City:')
    const state = screen.getByText('State:')
    const zipCode = screen.getByText('Zip Code:')
    const date = screen.getByText('Date of Substantial Completion:')
    const laborCosts = screen.getByText('Labor Costs Due:')
    const materialCosts = screen.getByText('Material Costs Due:')
    const totalCosts = screen.getByText('Total Costs Due:')

    expect(heading).toBeInTheDocument()
    expect(jobType).toBeInTheDocument()
    expect(radioBtn1).toBeInTheDocument()
    expect(radioBtn2).toBeInTheDocument()
    expect(siteName).toBeInTheDocument()
    expect(siteAddress).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(zipCode).toBeInTheDocument()
    expect(state).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(laborCosts).toBeInTheDocument()
    expect(materialCosts).toBeInTheDocument()
    expect(totalCosts).toBeInTheDocument()
  })
})