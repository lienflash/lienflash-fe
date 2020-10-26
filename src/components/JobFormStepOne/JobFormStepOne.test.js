import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import JobFormStepOne from './JobFormStepOne'

describe('JobFormStepOne component', () => {

  beforeEach(() => {
    render(
      <JobFormStepOne
        handleInputChange={jest.fn()}
        currentStep={1} />
    )
  })

  it('Should render step two of the form', () => {

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

  it('should store the form values that are inputted by user', () => {

    const jobTypeInput = screen.getByLabelText('job-type')
    const jobSiteNameInput = screen.getByLabelText('job-site-name')
    const siteAddressInput = screen.getByLabelText('job-site-address')
    const siteAddress2Input = screen.getByLabelText('job-site-address-line-2')
    const cityInput = screen.getByLabelText('job-site-city')
    const stateInput = screen.getByLabelText('job-site-state')
    const zipCodeInput = screen.getByLabelText('job-site-zip-code')
    // const dateInput = screen.getByLabelText('job-completion-date')
    const laborCostsInput = screen.getByLabelText('labor-costs-due')
    const materialCostsInput = screen.getByLabelText('material-costs-due')
    const totalCostsInput = screen.getByLabelText('total-costs-due')
    
    fireEvent.change(jobTypeInput, { target: { value: 'Labor' } })
    fireEvent.change(jobSiteNameInput, { target: { value: 'Burt\'s Warehouse' } })
    fireEvent.change(siteAddressInput, { target: { value: '1777 Myrtle Drive' } })
    fireEvent.change(siteAddress2Input, { target: { value: 'Apt 1209' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(stateInput, { target: { value: 'CO' } })
    fireEvent.change(zipCodeInput , { target: { value: '80240' } })
    // fireEvent.change(dateInput, { target: { value: '10/25/2020' } })
    fireEvent.change(laborCostsInput, { target: { value: '10000' } })
    fireEvent.change(jobSiteNameInput, { target: { value: 'Burt\'s Warehouse' } })
    fireEvent.change(materialCostsInput, { target: { value: '0' } })
    fireEvent.change(totalCostsInput, { target: { value: '10000' } })

    expect(jobTypeInput.value).toBe('Labor')
    expect(jobSiteNameInput.value).toBe('Burt\'s Warehouse')
    expect(siteAddressInput.value).toBe('1777 Myrtle Drive')
    expect(siteAddress2Input.value).toBe('Apt 1209')
    expect(cityInput.value).toBe('Denver')
    expect(stateInput.value).toBe('CO')
    expect(zipCodeInput.value).toBe('80240')
    // expect(dateInput.value).toBe('10/25/2020')
    expect(laborCostsInput.value).toBe('10000')
    expect(materialCostsInput.value).toBe('0')
    expect(totalCostsInput.value).toBe('10000')
  })
})