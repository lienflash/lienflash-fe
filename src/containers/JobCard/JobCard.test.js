import React from 'react';
import JobCard from './JobCard.js';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index.js';

describe('JobCard', () => {
  it('should display job card on page with labor type and good standing status on load', () => {
    const store = createStore(rootReducer);

    const currentDate = new Date();
    const finalDate = currentDate.getTime();
    const formattedDate = new Date(finalDate).toLocaleDateString("en-us");

    const attributes = {
      job_type: 'Labor',
      job_site_name: 'Home',
      job_site_contact_name: 'Taryn',
      job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
      job_site_state: 'CO', job_site_zip_code: '80201',
      material_cost: 200,
      labor_cost: 200,
      total_cost: 400,
      completion_date: currentDate,
      description_of_work: 'blah',
      client_company_name: 'Amazon',
      business_address: '12 Tree Ave',
      business_address_line_2: 'Suite 200',
      business_city: 'Seattle',
      business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
      job_id: '12345',
      status: 'good standing',
      dateDifference: 0
    }

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <JobCard data={attributes} />
        </MemoryRouter>
      </Provider>
    )

    const name = screen.getByText("Amazon");
    const total = screen.getByText("Amount Due: $400");
    const completion = screen.getByText("Date of Substantial Completion: " + formattedDate);
    const daysDifference = screen.getByText("Days Left to Submit NOI: 47")

    expect(name).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(completion).toBeInTheDocument();
    expect(daysDifference).toBeInTheDocument();
  });
  it('should display job card on page with labor & materials type and good standing status on load', () => {
    const store = createStore(rootReducer);

    const currentDate = new Date();
    const finalDate = currentDate.getTime();
    const formattedDate = new Date(finalDate).toLocaleDateString("en-us");

    const attributes = {
      job_type: 'Materials & Labor',
      job_site_name: 'Home',
      job_site_contact_name: 'Taryn',
      job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
      job_site_state: 'CO', job_site_zip_code: '80201',
      material_cost: 200,
      labor_cost: 200,
      total_cost: 400,
      completion_date: currentDate,
      description_of_work: 'blah',
      client_company_name: 'Amazon',
      business_address: '12 Tree Ave',
      business_address_line_2: 'Suite 200',
      business_city: 'Seattle',
      business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
      job_id: '12345',
      status: 'good standing',
      dateDifference: 0
    }

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <JobCard data={attributes} />
        </MemoryRouter>
      </Provider>
    )

    const name = screen.getByText("Amazon");
    const total = screen.getByText("Amount Due: $400");
    const completion = screen.getByText("Date of Substantial Completion: " + formattedDate);
    const daysDifference = screen.getByText("Days Left to Submit NOI: 106")

    expect(name).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(completion).toBeInTheDocument();
    expect(daysDifference).toBeInTheDocument();
  });
  it('should display job card on page with NOI filed status on load', () => {
    const store = createStore(rootReducer);

    const currentDate = new Date();
    const finalDate = currentDate.getTime();
    const formattedDate = new Date(finalDate).toLocaleDateString("en-us");

    const attributes = {
      job_type: 'Labor',
      job_site_name: 'Home',
      job_site_contact_name: 'Taryn',
      job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
      job_site_state: 'CO', job_site_zip_code: '80201',
      material_cost: 200,
      labor_cost: 200,
      total_cost: 400,
      completion_date: currentDate,
      description_of_work: 'blah',
      client_company_name: 'Amazon',
      business_address: '12 Tree Ave',
      business_address_line_2: 'Suite 200',
      business_city: 'Seattle',
      business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
      job_id: '12345',
      status: 'NOI filed',
      dateDifference: 0
    }

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <JobCard data={attributes} />
        </MemoryRouter>
      </Provider>
    )

    const name = screen.getByText("Amazon");
    const total = screen.getByText("Amount Due: $400");
    const completion = screen.getByText("Date of Substantial Completion: " + formattedDate);
    const daysDifference = screen.getByText("Days Left to Submit Lien: 47")

    expect(name).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(completion).toBeInTheDocument();
    expect(daysDifference).toBeInTheDocument();
  });
})
