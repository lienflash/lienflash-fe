import React from 'react'
import JobForm from './JobForm'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { postNewJob } from '../../helpers/apiCalls'
jest.mock('../../helpers/apiCalls')

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Form component', () => {
  let user;
  beforeEach(() => {

    user = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }

    const store = mockStore({
      user: user
    })

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
   
    postNewJob.mockResolvedValueOnce({
      job_type: 'Labor',
      job_site_contact_name: 'Sally May',
      job_site_name: 'Burt\'s Warehouse',
      job_site_address: '1777 Myrtle Drive',
      job_site_address_line_2: 'Apt 1209',
      job_site_city: 'Denver',
      job_site_state: 'CO',
      job_site_zip_code: '80240',
      completion_date: '2020-10-25',
      description_of_work: 'Fixed the toilet',
      labor_cost: '10000',
      material_cost: null,
      total_cost: '10000',
      client_company_name: null,
      business_address: null,
      business_address_line_2: null,
      business_city: null,
      business_state: null,
      business_zip_code: null,
      additional_info: null,
      user_id: 1,
      status: 'Good Standing'
    })

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
    fireEvent.change(totalCostsInput, { target: { value: '10000' } })

    fireEvent.click(nextButton)

    const submitButton = screen.getByLabelText('submit form')

    fireEvent.click(submitButton)

    const newJob = {
      jobType: 'Labor',
      jobSiteContactName: 'Sally May',
      jobSiteName: 'Burt\'s Warehouse',
      jobSiteAddress: '1777 Myrtle Drive',
      jobSiteAddressLine2: 'Apt 1209',
      jobSiteCity: 'Denver',
      jobSiteState: 'CO',
      jobSiteZipCode: '80240',
      completionDate: '2020-10-25',
      laborCost: '10000',
      jobDescription: 'Fixed the toilet',
      totalCost: '10000',
    }

    expect(postNewJob).toHaveBeenCalledWith(newJob, user.id)

    await waitFor(() => expect(mockHistoryPush).toHaveBeenCalledWith('/homepage'))
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
