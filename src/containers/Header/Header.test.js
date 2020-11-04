import React from 'react';
import Header from './Header.js';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index.js';

describe('Header', () => {
  it('should display header on page load', () => {
    const store = createStore(rootReducer);

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    )

    const logo = screen.getByAltText('lienflash logo');

    expect(logo).toBeInTheDocument();
  });
  it('should clear info when logout button is clicked', () => {
    const store = createStore(rootReducer);

    // const allJobs = {
    //   gracePeriod: [{
    //     id: "1",
    //     type: "job",
    //     attributes: {
    //       job_type: 'labor & materials',
    //       job_site_name: 'Home',
    //       job_site_contact_name: 'Taryn',
    //       job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
    //       job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
    //       material_cost: 200,
    //       labor_cost: 200,
    //       total_cost: 400,
    //       description_of_work: 'blah',
    //       client_company_name: 'Amazon',
    //       business_address: '12 Tree Ave',
    //       business_address_line_2: 'Suite 200',
    //       business_city: 'Seattle',
    //       business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
    //       status: 'good standing'
    //     }
    //   }],
    //   noiEligible: [{
    //     id: "2",
    //     type: "job",
    //     attributes: {
    //       job_type: 'labor & materials',
    //       job_site_name: 'Home',
    //       job_site_contact_name: 'Taryn',
    //       job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
    //       job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
    //       material_cost: 200,
    //       labor_cost: 200,
    //       total_cost: 400,
    //       description_of_work: 'blah',
    //       client_company_name: 'Microsoft',
    //       business_address: '12 Tree Ave',
    //       business_address_line_2: 'Suite 200',
    //       business_city: 'Seattle',
    //       business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
    //       status: 'NOI Eligible'
    //     }
    //   }],
    //   lienEligible: [],
    //   releaseEligible: []
    // }

    // const user = {
    //   id: 1,
    //   attributes: {
    //     name: 'Taryn',
    //     email: 'taryn@gmail.com'
    //   }
    // }

    store.dispatch = jest.fn();

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <Header dispatch={store.dispatch}/>
        </MemoryRouter>
      </Provider>
    )

    const logoutBtn = screen.getByRole('button', {name: 'Log Out'})

    expect(logoutBtn).toBeInTheDocument()

    fireEvent.click(logoutBtn);

    expect(store.dispatch).toBeCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith({"type": "CLEAR_JOBS"})
    expect(store.dispatch).toHaveBeenCalledWith({"type": "LOGOUT_USER"})

  })
})
