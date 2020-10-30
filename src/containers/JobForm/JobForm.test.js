import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import JobForm from './JobForm'

describe('Form component', () => {
  beforeEach(() => {

    render(
      <JobForm 
        updateJobAddedStatus={jest.fn()}
      />
    )
  })

  it('Should render the correct UI', () => {

    const heading = screen.getByRole('heading', { name: 'Add New Job' })
    const stepText = screen.getByText('Step 1')
    const nextButton = screen.getByRole('button', { name: 'Next' })
 
    expect(heading).toBeInTheDocument()
    expect(stepText).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  it('Should display error message if a required field is not completed', () => {
    const nextButton = screen.getByRole('button', { name: 'Next' })

    fireEvent.click(nextButton)

    const errorMsg = screen.getByText('Please complete required fields')
    expect(errorMsg).toBeInTheDocument() 
  })

  it('User should be able to complete the form and submit it', async () => {
    const updateStep = jest.fn()

    const jobTypeInput = screen.getByLabelText('job-type')
    const jobSiteContactName = screen.getByLabelText('job-site-contact-name')
    const jobSiteNameInput = screen.getByLabelText('job-site-name')
    const siteAddressInput = screen.getByLabelText('job-site-address')
    const siteAddress2Input = screen.getByLabelText('job-site-address-line-2')
    const cityInput = screen.getByLabelText('job-site-city')
    const stateInput = screen.getByLabelText('job-site-state')
    const zipCodeInput = screen.getByLabelText('job-site-zip-code')
    const dateInput = screen.getByLabelText('job-completion-date')
    const jobDescription = screen.getByLabelText('job-description')
    const laborCostsInput = screen.getByLabelText('labor-costs-due')
    const materialCostsInput = screen.getByLabelText('material-costs-due')
    const totalCostsInput = screen.getByLabelText('total-costs-due')
    const nextButton = screen.getByRole('button', { name: 'Next' })

    fireEvent.change(jobTypeInput, { target: { value: 'Labor' } })
    fireEvent.change(jobSiteContactName, { target: { value: 'Sally May' } })
    fireEvent.change(jobSiteNameInput, { target: { value: 'Burt\'s Warehouse' } })
    fireEvent.change(siteAddressInput, { target: { value: '1777 Myrtle Drive' } })
    fireEvent.change(siteAddress2Input, { target: { value: 'Apt 1209' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(stateInput, { target: { value: 'CO' } })
    fireEvent.change(zipCodeInput, { target: { value: '80240' } })

    // tried mousedown
    fireEvent.mouseDown(dateInput)
    fireEvent.change(dateInput, { target: { value: '2020-25-10' } })

    fireEvent.change(laborCostsInput, { target: { value: '10000' } })
    fireEvent.change(jobDescription, { target: { value: 'Fixed the toilet' } })
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

    // expect(dateInput.value).toBe('2020-25-10')
   
    expect(jobDescription.value).toBe('Fixed the toilet')
    expect(laborCostsInput.value).toBe('10000')
    expect(materialCostsInput.value).toBe('0')
    expect(totalCostsInput.value).toBe('10000')

    fireEvent.click(nextButton)
    // expect(updateStep).toHaveBeenLastCalledWith(2)
    
    // const stepText = screen.getByText('Step 2')
    // const submitButton = screen.getByLabelText('submit form')

   
    // await waitFor(() => expect(submitButton).toBeInTheDocument())
     // expect(stepText).toBeInTheDocument()

  })




  it.skip('Should fire function when button is clicked', () => {

    const submitButton = screen.getByLabelText('submit form')

    expect(submitButton).toBeInTheDocument()
  })
})