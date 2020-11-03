import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import JobForm from './JobForm'
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index.js';
import { postNewJob } from '../../helpers/apiCalls'
jest.mock('../../helpers/apiCalls')

describe('Form component', () => {
  beforeEach(() => {
    const store = createStore(rootReducer)

    render(
      <Provider store={store}>
        <MemoryRouter>
          <JobForm updateJobAddedStatus={jest.fn()}/>
        </MemoryRouter>
      </Provider>
    )
  })

  it('Should render the correct UI', () => {

    const heading = screen.getByRole('heading', { name: 'Add New Job' })
    const step1Heading = screen.getByText('Step 1')
    const nextButton = screen.getByRole('button', { name: 'Next' })

    expect(heading).toBeInTheDocument()
    expect(step1Heading).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  it('Should display error message if a required field is not completed', () => {
    const nextButton = screen.getByRole('button', { name: 'Next' })

    fireEvent.click(nextButton)

    const errorMsg = screen.getByText('Please complete required fields')
    expect(errorMsg).toBeInTheDocument()
  })

  it('User should be able to complete the form and submit it', async () => {

  //  const mockPostRequest = jest.fn()

  //   const newJob = {
  //     jobType: 'Labor',
  //     jobSiteName: "Burt's Warehouse",
  //     jobSiteAddressLine2: "Apt 1209",
  //     jobSiteContactName: 'Sally May',
  //     jobSiteAddress: '1777 Myrtle Drive',
  //     jobSiteCity: 'Denver',
  //     jobSiteState: 'CO',
  //     jobSiteZipCode: '80240',
  //     completionDate: '2020-10-25',
  //     jobDescription: 'Fixed the toilet',
  //     laborCost: "10000",
  //     materialCost: "0",
  //     totalCost: '10000'
  //   }

    const jobTypeInput = screen.getByRole('radio', { name: 'job-type' });
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

    fireEvent.click(jobTypeInput)
    fireEvent.change(jobSiteContactName, { target: { value: 'Sally May' } })
    fireEvent.change(jobSiteNameInput, { target: { value: 'Burt\'s Warehouse' } })
    fireEvent.change(siteAddressInput, { target: { value: '1777 Myrtle Drive' } })
    fireEvent.change(siteAddress2Input, { target: { value: 'Apt 1209' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(stateInput, { target: { value: 'CO' } })
    fireEvent.change(zipCodeInput, { target: { value: '80240' } })
    fireEvent.change(dateInput, { target: { value: '2020-10-25' } })

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
    expect(dateInput.value).toBe('2020-10-25')
    expect(jobDescription.value).toBe('Fixed the toilet')
    expect(laborCostsInput.value).toBe('10000')
    expect(materialCostsInput.value).toBe('0')
    expect(totalCostsInput.value).toBe('10000')

    fireEvent.click(nextButton)

    const step2Heading = screen.getByText('Step 2')
    const submitButton = screen.getByLabelText('submit form')

    expect(step2Heading).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

    // fireEvent.click(submitButton)

    // await waitFor(() => expect(mockPostRequest).toHaveBeenCalledWith(newJob))

  })

  it('User should be able to go back to the first section of the form', async () => {

    const jobTypeInput = screen.getByRole('radio', { name: 'job-type' });
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

    fireEvent.click(jobTypeInput)
    fireEvent.change(jobSiteContactName, { target: { value: 'Sally May' } })
    fireEvent.change(jobSiteNameInput, { target: { value: 'Burt\'s Warehouse' } })
    fireEvent.change(siteAddressInput, { target: { value: '1777 Myrtle Drive' } })
    fireEvent.change(siteAddress2Input, { target: { value: 'Apt 1209' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(stateInput, { target: { value: 'CO' } })
    fireEvent.change(zipCodeInput, { target: { value: '80240' } })
    fireEvent.change(dateInput, { target: { value: '2020-10-25' } })

    fireEvent.change(laborCostsInput, { target: { value: '10000' } })
    fireEvent.change(jobDescription, { target: { value: 'Fixed the toilet' } })
    fireEvent.change(jobSiteNameInput, { target: { value: 'Burt\'s Warehouse' } })
    fireEvent.change(materialCostsInput, { target: { value: '0' } })
    fireEvent.change(totalCostsInput, { target: { value: '10000' } })

    fireEvent.click(nextButton)

    const step2Heading = screen.getByText('Step 2')

    expect(step2Heading).toBeInTheDocument()

    const backButton = screen.getByRole('button', { name: 'Back' })

    fireEvent.click(backButton)

    const step1Heading = screen.getByText('Step 1')

    expect(step1Heading).toBeInTheDocument()
  })
})
