import React from 'react';
import JobDetails from './JobDetails.js';
import { screen, render } from '@testing-library/react';
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
    const jobTypeLabel = screen.getByText('Job Type:');
    const jobType = screen.getByText('Labor & Materials');
    const siteNameLabel = screen.getByText("Job Site Name:");
    const siteName = screen.getByText("Home");
    const siteContactLabel = screen.getByText('Job Site Contact Name:');
    const siteContact = screen.getByText('Taryn');
    const jobSiteAddress1 = screen.getByText('Job Site Address:', {exact: false});
    // const jobSiteAddress2 = screen.getByText("200 Washington St., ", { exact: false })
    // const jobSiteAddress3 = screen.getByText(",");
    // const jobSiteAddressCity = screen.getByText("Denver,");
    // const jobSiteState = screen.getByText("CO,");
    // const jobSiteAddressZip = screen.getByText("80201");
    const companyNameLabel = screen.getByText('Company Name:');
    const companyName = screen.getByText('Amazon');
    // const businessAddress = screen.getByText("Business Address: 12 Tree Ave, Suite 200, Seattle, WA, 99900");
    // const jobId = screen.getByText('Job ID: 12345');
    const jobDescriptionLabel = screen.getByText("Job Description:");
    const jobDescription = screen.getByText("Warehouse renovation");
    const additionalInfoLabel = screen.getByText("Additional Info:");
    const additionalInfo = screen.getByText("Received partial payment");
    const completionLabel = screen.getByText("Date of Substantial Completion:");
    const completion = screen.getByText("10/01/20");
    const laborCostLabel = screen.getByText("Labor Cost:");
    const laborCost = screen.getByText("$300");
    const materialsCostLabel = screen.getByText("Materials Cost:");
    const materialsCost = screen.getByText("$200");
    const totalLabel = screen.getByText("Total Cost:");
    const total = screen.getByText("$500");
    const removeBtn = screen.getByRole('button', {name: 'Remove Job'})

    //const daysDifference = screen.getByText("Days Left to Submit: 27")

    expect(backButton).toBeInTheDocument();
    expect(jobSiteAddress1).toBeInTheDocument()
    // expect(jobSiteAddress2).toBeInTheDocument()
    expect(jobTypeLabel).toBeInTheDocument();
    expect(jobType).toBeInTheDocument();
    expect(siteNameLabel).toBeInTheDocument();
    expect(siteName).toBeInTheDocument();
    expect(siteContactLabel).toBeInTheDocument();
    expect(siteContact).toBeInTheDocument();
    expect(companyNameLabel).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
    // expect(jobId).toBeInTheDocument();
    expect(jobDescriptionLabel).toBeInTheDocument();
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
    //expect(daysDifference).toBeInTheDocument();
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
  //         <JobDetails data={store.jobInfo}  key={'12345'} onClick={mockBack}/>
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
          <JobDetails data={store.jobInfo}  key={'12345'}/>
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
          <JobDetails data={store.jobInfo}  key={'12345'}/>
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
          <JobDetails data={store.jobInfo}  key={'12345'}/>
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
