import React from 'react';
import JobDetails from './JobDetails.js';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([])

describe('JobDetails', () => {
  it('should display job details on load', () => {
    let store;

    store = mockStore({
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
        job_id: '12345'
      }
    }
  })

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <JobDetails data={store.jobInfo} dateDifference={"28"} key={'12345'}/>
        </MemoryRouter>
      </Provider>
    )

    const jobType = screen.getByText('Job Type: Labor & Materials');
    const siteName = screen.getByText("Job Site Name: Home");
    const siteContact = screen.getByText('Job Site Contact Name: Taryn');
    const jobSiteAddress1 = screen.getByText('Job Site Address:', {exact: false});
    // const jobSiteAddress2 = screen.getByText("200 Washington St., ", { exact: false })
    // const jobSiteAddress3 = screen.getByText(",");
    // const jobSiteAddressCity = screen.getByText("Denver,");
    // const jobSiteState = screen.getByText("CO,");
    // const jobSiteAddressZip = screen.getByText("80201");
    const companyName = screen.getByText('Company Name: Amazon');
    // const businessAddress = screen.getByText("Business Address: 12 Tree Ave, Suite 200, Seattle, WA, 99900");
    // const jobId = screen.getByText('Job ID: 12345');
    const jobDescription = screen.getByText("Job Description: blah");
    const additionalInfo = screen.getByText("Additional Info: Amazon sucks");
    const completion = screen.getByText("Date of Substantial Completion: 10/01/20");
    const laborCost = screen.getByText("Labor Cost: $200");
    const materialsCost = screen.getByText("Materials Cost: $200");
    const total = screen.getByText("Total Cost: $400");
    const removeBtn = screen.getByRole('button', {name: 'Remove Job'})

    //const daysDifference = screen.getByText("Days Left to Submit: 27")
    expect(jobSiteAddress1).toBeInTheDocument()
    // expect(jobSiteAddress2).toBeInTheDocument()
    expect(jobType).toBeInTheDocument();
    expect(siteName).toBeInTheDocument();
    expect(siteContact).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
    // expect(jobId).toBeInTheDocument();
    expect(jobDescription).toBeInTheDocument();
    expect(additionalInfo).toBeInTheDocument();
    expect(completion).toBeInTheDocument();
    expect(laborCost).toBeInTheDocument();
    expect(materialsCost).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();
    //expect(daysDifference).toBeInTheDocument();
  });
})
