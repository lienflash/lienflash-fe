import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Homepage from './Homepage';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getAllJobs } from '../../helpers/apiCalls'
jest.mock('../../helpers/apiCalls')

const middlewares = [thunk]

const mockStore = configureMockStore(middlewares)

describe('Homepage component', () => {
  let allJobs;

  beforeEach(() => {
    allJobs = {
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

    getAllJobs.mockResolvedValueOnce(allJobs)

    const store = mockStore({
      allJobs: allJobs
      })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Homepage />
        </ MemoryRouter>
      </Provider>
    )
  })

  it('Should render the users dashboard when the app loads', () => {

    const header = screen.getByRole('heading', { name: 'What do you want to do?' })
    const addJobButton = screen.getByRole('button', { name: 'Add Job' })
    const elibibleJobsButton = screen.getByRole('button', { name: 'NOI Eligible Jobs' })
    const filedLiensButton = screen.getByRole('button', { name: 'Filed Liens' })
    const profileButton = screen.getByRole('button', { name: 'Profile' })
    const installButton = screen.getByText('Install App');

    expect(header).toBeInTheDocument()
    expect(addJobButton).toBeInTheDocument()
    expect(elibibleJobsButton).toBeInTheDocument()
    expect(filedLiensButton).toBeInTheDocument()
    expect(profileButton).toBeInTheDocument()
    expect(installButton).toBeInTheDocument()
  })
  it('should show message when install button clicked', () => {
    const installButton = screen.getByText('Install App');

    fireEvent.click(installButton);

    const message = screen.getByLabelText('Install on mobile:', {exact: false});

    expect(message).toBeInTheDocument()
  })
})
