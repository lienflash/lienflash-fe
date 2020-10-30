import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from '../../reducers/index.js';
import App from './App'
import configureStore from 'redux-mock-store';

const mockStore = configureStore([])

describe('App component', () => {
  let store;
  it.skip('Should render the homepage when the app loads', () => {
    store = mockStore({
      allJobs: {
        gracePeriod: [{
          id: "1",
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
            client_company_name: 'Amazon',
            business_address: '12 Tree Ave',
            business_address_line_2: 'Suite 200',
            business_city: 'Seattle',
            business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
            status: 'good standing'
          }
        }],
        noiEligible: [{
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
            status: 'NOI Eligible'
          }
        }],
        lienEligible: [],
        inProcess: [],
        releaseEligible: []
      }
    })
  
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter> 
      </Provider>
    )
  
    const header = screen.getByRole('heading', { name: 'What Do You Want To Do?'})
    const addJobButton = screen.getByRole('button', { name: 'Add Job'})
    const elibibleJobsButton = screen.getByRole('button', { name: 'Eligible Jobs' })
    const filedLiensButton = screen.getByRole('button', { name: 'Filed Liens' })
    const profileButton = screen.getByRole('button', { name: 'Profile' })

    expect(header).toBeInTheDocument()
    expect(addJobButton ).toBeInTheDocument()
    expect(elibibleJobsButton).toBeInTheDocument()
    expect(filedLiensButton).toBeInTheDocument()
    expect(profileButton).toBeInTheDocument()
  })

    it('Should render loading page while data is being fetched', () => {
      store = mockStore({
        allJobs: {}
      })

      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      )

      const header = screen.getByRole('heading', { name: 'Please wait while we load your dashboard' })

      expect(header).toBeInTheDocument()
    })

})

