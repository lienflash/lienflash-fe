import React from 'react';
import JobDetails from './JobDetails.js';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

// 29-back button

const mockStore = configureStore([])

describe('JobDetails', () => {

  it('should display job details on load', () => {
    let store = mockStore({
      jobInfo: {
        attributes: {
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
        business_address_line_2: 'Suite 200',
        business_city: 'Seattle',
        business_state: 'WA',
        business_zip_code: '99900',
        additional_info: 'Received partial payment',
        job_id: '12345',
        status: 'good standing'
      }
    }
    })

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <JobDetails />
        </MemoryRouter>
      </Provider>
    )

    const backButton = screen.getByRole('button', {name: 'Back'});
    const jobType = screen.getByText('Job Type: Labor & Materials');
    const siteName = screen.getByText("Job Site Name: Home");
    const siteContact = screen.getByText('Job Site Contact Name: Taryn');
    const jobSiteAddress = screen.getByText('Job Site Address:', {exact: false});
    const companyName = screen.getByText('Company Name: Amazon');
    const businessAddress = screen.getByText("Business Address:", {exact: false})
    const jobDescription = screen.getByText("Job Description: blah");
    const additionalInfo = screen.getByText("Additional Info: Amazon sucks");
    const completion = screen.getByText("Date of Substantial Completion: 10/01/20");
    const laborCost = screen.getByText("Labor Cost: $200");
    const materialsCost = screen.getByText("Materials Cost: $200");
    const total = screen.getByText("Total Cost: $400");
    const removeBtn = screen.getByRole('button', {name: 'Remove Job'})

    expect(backButton).toBeInTheDocument();
    expect(jobSiteAddress).toBeInTheDocument()
    expect(jobType).toBeInTheDocument();
    expect(siteNameLabel).toBeInTheDocument();
    expect(siteName).toBeInTheDocument();
    expect(siteContactLabel).toBeInTheDocument();
    expect(siteContact).toBeInTheDocument();
    expect(companyNameLabel).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
    expect(businessAddress).toBeInTheDocument();
    expect(jobDescription).toBeInTheDocument();
    expect(additionalInfoLabel).toBeInTheDocument();
    expect(additionalInfo).toBeInTheDocument();
    expect(completionLabel).toBeInTheDocument();
    expect(completion).toBeInTheDocument();
    expect(laborCostLabel).toBeInTheDocument();
    expect(laborCost).toBeInTheDocument();
    expect(materialsCostLabel).toBeInTheDocument();
    expect(materialsCost).toBeInTheDocument();
    expect(totalLabel).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();
  });
  // it('should call a function when back button is clicked', () => {
  //   let store = mockStore({
  //     jobInfo: {
  //       attributes: {
  //       job_type: 'Labor & Materials',
  //       job_site_name: 'Home',
  //       job_site_contact_name: 'Taryn',
  //       job_site_address: '200 Washington St.',
  //       job_site_address_line_2: '',
  //       job_site_city: 'Denver',
  //       job_site_state: 'CO',
  //       job_site_zip_code: '80201',
  //       completion_date: "2020-10-01T04:05:06.000Z",
  //       material_cost: 200,
  //       labor_cost: 200,
  //       total_cost: 400,
  //       description_of_work: 'blah',
  //       client_company_name: 'Amazon',
  //       business_address: '12 Tree Ave',
  //       business_address_line_2: 'Suite 200',
  //       business_city: 'Seattle',
  //       business_state: 'WA',
  //       business_zip_code: '99900',
  //       additional_info: 'Amazon sucks',
  //       job_id: '12345'
  //     }
  //   }
  //   })
  //
  //   const mockBack = jest.fn()
  //
  //   render(
  //     <Provider store={ store }>
  //       <MemoryRouter>
  //         <JobDetails onClick={mockBack}/>
  //       </MemoryRouter>
  //     </Provider>
  //   )
  //
  //   const backButton = screen.getByRole('button', {name: 'Back'});
  //
  //   expect(backButton).toBeInTheDocument();
  //
  //   fireEvent.click(backButton);
  //
  //   expect(mockBack).toBeCalledTimes(1);
  // });
  it('should display submit noi button when status is NOI Eligible', () => {
    let store = mockStore({
      jobInfo: {
        attributes: {
        job_type: 'Labor & Materials',
        job_site_name: 'Home',
        job_site_contact_name: 'Taryn',
        job_site_address: '200 Washington St.',
        job_site_address_line_2: '',
        job_site_city: 'Denver',
        job_site_state: 'CO',
        job_site_zip_code: '80201',
        completion_date: "2020-10-01T04:05:06.000Z",
        material_cost: 200,
        labor_cost: 200,
        total_cost: 400,
        description_of_work: 'blah',
        client_company_name: 'Amazon',
        business_address: '12 Tree Ave',
        business_address_line_2: 'Suite 200',
        business_city: 'Seattle',
        business_state: 'WA',
        business_zip_code: '99900',
        additional_info: 'Amazon sucks',
        job_id: '12345',
        status: 'NOI Eligible'
      }
    }
    })

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <JobDetails />
        </MemoryRouter>
      </Provider>
    )

    const noiButton = screen.getByRole('button', {name: 'Submit NOI'})

    expect(noiButton).toBeInTheDocument();
  });
  it('should display submit lien button when status is NOI filed', () => {
    let store = mockStore({
      jobInfo: {
        attributes: {
        job_type: 'Labor & Materials',
        job_site_name: 'Home',
        job_site_contact_name: 'Taryn',
        job_site_address: '200 Washington St.',
        job_site_address_line_2: '',
        job_site_city: 'Denver',
        job_site_state: 'CO',
        job_site_zip_code: '80201',
        completion_date: "2020-10-01T04:05:06.000Z",
        material_cost: 200,
        labor_cost: 200,
        total_cost: 400,
        description_of_work: 'blah',
        client_company_name: 'Amazon',
        business_address: '12 Tree Ave',
        business_address_line_2: 'Suite 200',
        business_city: 'Seattle',
        business_state: 'WA',
        business_zip_code: '99900',
        additional_info: 'Amazon sucks',
        job_id: '12345',
        status: 'NOI filed'
      }
    }
    })

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <JobDetails />
        </MemoryRouter>
      </Provider>
    )

    const lienButton = screen.getByRole('button', {name: 'Submit Lien'})

    expect(lienButton).toBeInTheDocument();
  });
  it('should display release lien button when status is lien filed', () => {
    let store = mockStore({
      jobInfo: {
        attributes: {
        job_type: 'Labor & Materials',
        job_site_name: 'Home',
        job_site_contact_name: 'Taryn',
        job_site_address: '200 Washington St.',
        job_site_address_line_2: '',
        job_site_city: 'Denver',
        job_site_state: 'CO',
        job_site_zip_code: '80201',
        completion_date: "2020-10-01T04:05:06.000Z",
        material_cost: 200,
        labor_cost: 200,
        total_cost: 400,
        description_of_work: 'blah',
        client_company_name: 'Amazon',
        business_address: '12 Tree Ave',
        business_address_line_2: 'Suite 200',
        business_city: 'Seattle',
        business_state: 'WA',
        business_zip_code: '99900',
        additional_info: 'Amazon sucks',
        job_id: '12345',
        status: 'Lien Filed'
      }
    }
    })

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <JobDetails />
        </MemoryRouter>
      </Provider>
    )

    const releaseButton = screen.getByRole('button', {name: 'Submit Release of Lien'})

    expect(releaseButton).toBeInTheDocument();
  });
  it('should display an error message if there is no job info', () => {
    let store = mockStore({
      jobInfo: {attributes: {}}
    })

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <JobDetails />
        </MemoryRouter>
      </Provider>
    )

    const msg = screen.getByText('Sorry, it looks like we couldn\'t find that job. Please try again later.');

    expect(msg).toBeInTheDocument()

  });
})
