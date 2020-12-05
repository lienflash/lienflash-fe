import React from 'react';
import AdminJobDetails from './AdminJobDetails.js';
import thunk from 'redux-thunk';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
// update status API call will need to be mocked once it's setup
jest.mock('../../helpers/apiCalls')

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('AdminJobDetails', () => {

  it('should display job details', () => {
    const store = mockStore({
      adminJobList: [
        {
          id: "1",
          job_type: 'Labor & Materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.',
          job_site_address_line_2: null,
          job_site_city: 'Denver',
          job_site_state: 'CO',
          job_site_zip_code: '80201',
          completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 300,
          total_cost: 500,
          description_of_work: 'Warehouse renovation',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: null,
          business_city: 'Seattle',
          business_state: 'WA',
          business_zip_code: '99900',
          additional_info: 'Received partial payment',
          user_id: '12345',
          status: 'Good Standing'
        },
      ]
    })

    const jobDetails = {
      id: "1",
      job_type: 'Labor & Materials',
      job_site_name: 'Home',
      job_site_contact_name: 'Taryn',
      job_site_address: '200 Washington St.',
      job_site_address_line_2: null,
      job_site_city: 'Denver',
      job_site_state: 'CO',
      job_site_zip_code: '80201',
      completion_date: "2020-10-01T04:05:06.000Z",
      material_cost: 200,
      labor_cost: 300,
      total_cost: 500,
      description_of_work: 'Warehouse renovation',
      client_company_name: 'Amazon',
      business_address: '12 Tree Ave',
      business_address_line_2: null,
      business_city: 'Seattle',
      business_state: 'WA',
      business_zip_code: '99900',
      additional_info: 'Received partial payment',
      user_id: '12345',
      status: 'Good Standing'
    }

    const mockChangeView = jest.fn()

    render(
      <Provider store={store}>
        <MemoryRouter>
          <AdminJobDetails
            jobDetails={jobDetails}
            changeView={mockChangeView}
            handleStatusChange={jest.fn()}
          />
        </MemoryRouter>
      </Provider>
    )
  
    const backButton = screen.getByRole('button', { name: 'Back' });
    const jobTypeLabel = screen.getByText('Job Type:');
    const jobType = screen.getByText('Labor & Materials');
    const siteNameLabel = screen.getByText("Job Site Name:");
    const siteName = screen.getByText("Home");
    const siteContactLabel = screen.getByText('Job Site Contact Name:');
    const siteContact = screen.getByText('Taryn');
    const jobSiteAddressLabel = screen.getByText('Job Site Address:', { exact: false })
    const jobSiteAddress = screen.getByText("200 Washington St", { exact: false });
    const jobSiteAddressCity = screen.getByText("Denver", { exact: false });
    const jobSiteAddressState = screen.getByText("CO,", { exact: false });
    const jobSiteAddressZip = screen.getByText("80201", { exact: false });
    const companyNameLabel = screen.getByText('Company Name:');
    const companyName = screen.getByText('Amazon');
    const businessAddressLabel = screen.getByText("Business Address:")
    const businessAddress = screen.getByText("12 Tree Ave", { exact: false })
    const businessAddressCity = screen.getByText("Seattle", { exact: false });
    const businessAddressState = screen.getByText("WA,", { exact: false });
    const businessAddressZip = screen.getByText("99900", { exact: false });
    const jobDescriptionLabel = screen.getByText("Job Description:");
    const jobDescription = screen.getByText("Warehouse renovation");
    const additionalInfoLabel = screen.getByText("Additional Info:");
    const additionalInfo = screen.getByText("Received partial payment");
    const completionLabel = screen.getByText("Date of Substantial Completion:");
    const laborCostLabel = screen.getByText("Labor Cost:");
    const laborCost = screen.getByText("$300");
    const materialsCostLabel = screen.getByText("Materials Cost:");
    const materialsCost = screen.getByText("$200");
    const totalLabel = screen.getByText("Total Cost:");
    const total = screen.getByText("$500");

    expect(backButton).toBeInTheDocument();
    expect(jobSiteAddressLabel).toBeInTheDocument()
    expect(jobSiteAddress).toBeInTheDocument()
    expect(jobSiteAddressCity).toBeInTheDocument()
    expect(jobSiteAddressState).toBeInTheDocument()
    expect(jobSiteAddressZip).toBeInTheDocument()
    expect(businessAddressLabel).toBeInTheDocument()
    expect(businessAddress).toBeInTheDocument()
    expect(businessAddressCity).toBeInTheDocument()
    expect(businessAddressState).toBeInTheDocument()
    expect(businessAddressZip).toBeInTheDocument()
    expect(jobTypeLabel).toBeInTheDocument();
    expect(jobType).toBeInTheDocument();
    expect(siteName).toBeInTheDocument();
    expect(siteNameLabel).toBeInTheDocument();
    expect(siteContact).toBeInTheDocument();
    expect(siteContactLabel).toBeInTheDocument();
    expect(companyNameLabel).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
    expect(jobDescriptionLabel).toBeInTheDocument();
    expect(jobDescription).toBeInTheDocument();
    expect(additionalInfoLabel).toBeInTheDocument();
    expect(additionalInfo).toBeInTheDocument();
    expect(completionLabel).toBeInTheDocument();
    expect(laborCostLabel).toBeInTheDocument();
    expect(laborCost).toBeInTheDocument();
    expect(materialsCostLabel).toBeInTheDocument();
    expect(materialsCost).toBeInTheDocument();
    expect(totalLabel).toBeInTheDocument();
    expect(total).toBeInTheDocument();
  });

  it('should take user to previous page when back button is clicked', async () => {

    const store = mockStore({
      adminJobList: [
        {
          id: "1",
          job_type: 'Labor & Materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.',
          job_site_address_line_2: null,
          job_site_city: 'Denver',
          job_site_state: 'CO',
          job_site_zip_code: '80201',
          completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 300,
          total_cost: 500,
          description_of_work: 'Warehouse renovation',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: null,
          business_city: 'Seattle',
          business_state: 'WA',
          business_zip_code: '99900',
          additional_info: 'Received partial payment',
          user_id: '12345',
          status: 'Good Standing'
        },
      ]
    })

    const jobDetails = {
      id: "1",
      job_type: 'Labor & Materials',
      job_site_name: 'Home',
      job_site_contact_name: 'Taryn',
      job_site_address: '200 Washington St.',
      job_site_address_line_2: null,
      job_site_city: 'Denver',
      job_site_state: 'CO',
      job_site_zip_code: '80201',
      completion_date: "2020-10-01T04:05:06.000Z",
      material_cost: 200,
      labor_cost: 300,
      total_cost: 500,
      description_of_work: 'Warehouse renovation',
      client_company_name: 'Amazon',
      business_address: '12 Tree Ave',
      business_address_line_2: null,
      business_city: 'Seattle',
      business_state: 'WA',
      business_zip_code: '99900',
      additional_info: 'Received partial payment',
      user_id: '12345',
      status: 'Good Standing'
    }

    const mockChangeView = jest.fn()

    render(
      <Provider store={store}>
        <MemoryRouter>
          <AdminJobDetails
            jobDetails={jobDetails}
            changeView={mockChangeView}
            handleStatusChange={jest.fn()}
          />
        </MemoryRouter>
      </Provider>
    )

    const backButton = screen.getByRole('button', { name: 'Back' });
 
    fireEvent.click(backButton)
    expect(mockChangeView).toHaveBeenCalled()
  })
})
