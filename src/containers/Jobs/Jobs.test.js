import React from 'react';
import Jobs from './Jobs.js';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { useSelector } from 'react-redux';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index.js';

const mockStore = configureStore([])

describe('Jobs', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      allJobs: [ {
        id: "1",
        type: "job",
        attributes:{
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
        }
      }, {
        id: "2",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Microsoft',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
          }
        }
      ]
    });
  })

  it('should display the right number of jobs on page load', () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Jobs />
        </MemoryRouter>
      </Provider>
    )

    const name = screen.getByText("Amazon");
    const name2 = screen.getByText("Microsoft");

    expect(name).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
  });
})
