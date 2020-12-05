import React from 'react';
import AdminHomepage from './AdminHomepage.js';
import thunk from 'redux-thunk';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { getAllUsersJobs } from '../../helpers/apiCalls'
jest.mock('../../helpers/apiCalls')

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('CreateUser', () => {
  let allJobs, user;

  beforeEach(() => {
    user = {
      id: 1,
      attributes: {
        name: 'Jason',
        email: 'jason@gmail.com',
        token: 'gjobaoifnbi34blb'
      }
    }

    allJobs = [
      {
        id: "1",
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
        business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
        status: 'good standing'
        
      },
      {
        id: "2",
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
        business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
        status: 'NOI Eligible'
      }
    ]
  })
   

  it('should display the user homepage on load', () => {
    getAllUsersJobs.mockResolvedValueOnce(allJobs)

    const store = mockStore({
      user: user,
      adminJobList: allJobs
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <AdminHomepage />
        </ MemoryRouter>
      </Provider>
    )
  
    const placeholder = screen.getByText('Admin Dashboard');

    expect(placeholder).toBeInTheDocument()
  })
})