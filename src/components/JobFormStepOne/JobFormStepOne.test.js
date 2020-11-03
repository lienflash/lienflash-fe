import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import JobFormStepOne from './JobFormStepOne'

describe('JobFormStepOne component', () => {
  it('If currentStep is 1 it should render step two of the form', () => {

    render(
      <JobFormStepOne
        handleInputChange={jest.fn()}
        currentStep={1} />
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

  it('should store the form values that are inputted by user', () => {
   
    render(
      <JobFormStepOne
        handleInputChange={jest.fn()}
        currentStep={1} />
    )

    const jobTypeInput = screen.getByLabelText('job-type')
    const jobSiteContactName = screen.getByLabelText('job-site-contact-name')
    const jobSiteNameInput = screen.getByLabelText('job-site-name')
    const siteAddressInput = screen.getByLabelText('job-site-address')
    const siteAddress2Input = screen.getByLabelText('job-site-address-line-2')
    const cityInput = screen.getByLabelText('job-site-city')
    const stateInput = screen.getByLabelText('job-site-state')
    const zipCodeInput = screen.getByLabelText('job-site-zip-code')
    // const dateInput = screen.getByLabelText('job-completion-date')
    const jobDescription = screen.getByLabelText('job-description')
    const laborCostsInput = screen.getByLabelText('labor-costs-due')
    const materialCostsInput = screen.getByLabelText('material-costs-due')
    const totalCostsInput = screen.getByLabelText('total-costs-due')
    
    fireEvent.change(jobTypeInput, { target: { value: 'Labor' } })
    fireEvent.change(jobSiteContactName, { target: { value: 'Sally May' } })
    fireEvent.change(jobSiteNameInput, { target: { value: 'Burt\'s Warehouse' } })
    fireEvent.change(siteAddressInput, { target: { value: '1777 Myrtle Drive' } })
    fireEvent.change(siteAddress2Input, { target: { value: 'Apt 1209' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(stateInput, { target: { value: 'CO' } })
    fireEvent.change(zipCodeInput , { target: { value: '80240' } })
    // fireEvent.change(dateInput, { target: { value: '10/25/2020' } })
    fireEvent.change(laborCostsInput, { target: { value: '10000' } })
    fireEvent.change(jobDescription, { target: { value: 'Fixed the toilet'} })
    fireEvent.change(jobSiteNameInput, { target: { value: 'Burt\'s Warehouse' } })
    fireEvent.change(materialCostsInput, { target: { value: '0' } })
    fireEvent.change(totalCostsInput, { target: { value: '10000' } })

    expect(jobTypeInput.value).toBe('Labor')
    expect(jobSiteContactName.value).toBe('Sally May')
    expect(jobSiteNameInput.value).toBe('Burt\'s Warehouse')
    expect(siteAddressInput.value).toBe('1777 Myrtle Drive')
    expect(siteAddress2Input.value).toBe('Apt 1209')
    expect(cityInput.value).toBe('Denver')
    expect(stateInput.value).toBe('CO')
    expect(zipCodeInput.value).toBe('80240')
    // expect(dateInput.value).toBe('10/25/2020')
    expect(jobDescription.value).toBe('Fixed the toilet')
    expect(laborCostsInput.value).toBe('10000')
    expect(materialCostsInput.value).toBe('0')
    expect(totalCostsInput.value).toBe('10000')
  })

  it('If currentStep is not 1 it should not render the form', () => {

    render(
      <JobFormStepOne
        handleInputChange={jest.fn()}
        currentStep={2} />
    )

    const heading = screen.queryByRole('heading', { name: 'Job Site Details' })
    const jobType = screen.queryByText('Job Type:', { exact: false })
    const radioBtn1 = screen.queryByText('Labor only', { exact: false })
    const radioBtn2 = screen.queryByText('Materials & Labor', { exact: false })
    const siteName = screen.queryByText('Job Site Name:')
    const siteAddress = screen.queryByText('Job Site Address:')
    const city = screen.queryByText('City:')
    const state = screen.queryByText('State:')
    const zipCode = screen.queryByText('Zip Code:')
    const date = screen.queryByText('Date of Substantial Completion:')
    const laborCosts = screen.queryByText('Labor Costs Due:')
    const materialCosts = screen.queryByText('Material Costs Due:')
    const totalCosts = screen.queryByText('Total Costs Due:')

    expect(heading).not.toBeInTheDocument()
    expect(jobType).not.toBeInTheDocument()
    expect(radioBtn1).not.toBeInTheDocument()
    expect(radioBtn2).not.toBeInTheDocument()
    expect(siteName).not.toBeInTheDocument()
    expect(siteAddress).not.toBeInTheDocument()
    expect(city).not.toBeInTheDocument()
    expect(zipCode).not.toBeInTheDocument()
    expect(state).not.toBeInTheDocument()
    expect(date).not.toBeInTheDocument()
    expect(laborCosts).not.toBeInTheDocument()
    expect(materialCosts).not.toBeInTheDocument()
    expect(totalCosts).not.toBeInTheDocument()
  })

  it('should show message when information button is clicked', () => {

    render(
      <JobFormStepOne
        handleInputChange={jest.fn()}
        currentStep={1} />
    )

    const infoButton = screen.getByText('What is this?');

    fireEvent.click(infoButton);

    const message = screen.getByLabelText('Job completion date', { exact: false })

    expect(message).toBeInTheDocument()
  })
  
})