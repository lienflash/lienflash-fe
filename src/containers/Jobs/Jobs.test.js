import React from 'react';
import Jobs from './Jobs.js';
import Header from '../Header/Header.js';
import Error from '../../components/Error/Error.js';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore([])

describe('Jobs', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      allJobs: {
        gracePeriod: [{
          id: "1",
          type: "job",
          attributes:{
            job_type: 'Materials & Labor',
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
            status: 'Good Standing'
          }
        }, {
          id: "3",
          type: "job",
          attributes:{
            job_type: 'Materials & Labor',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
            job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
            material_cost: 200,
            labor_cost: 200,
            total_cost: 400,
            description_of_work: 'blah',
            client_company_name: 'Bean\'s Place',
            business_address: '12 Tree Ave',
            business_address_line_2: 'Suite 200',
            business_city: 'Seattle',
            business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
            status: 'Good Standing'
          }
        }],
        noiEligible: [{
          id: "2",
          type: "job",
          attributes: {
            job_type: 'Materials & Labor',
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
        releaseEligible: [{
          id: "5",
          type: "job",
          attributes: {
            job_type: 'Materials & Labor',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
            job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-01-01T04:05:06.000Z",
            material_cost: 200,
            labor_cost: 200,
            total_cost: 400,
            description_of_work: 'blah',
            client_company_name: 'Microsoft',
            business_address: '12 Tree Ave',
            business_address_line_2: 'Suite 200',
            business_city: 'Seattle',
            business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
            status: 'Lien Filed'
            }
          }]
      }
    });
  })

  it('should display the right number of jobs on page load for eligible', () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header currentPath={'eligible'}/>
          <Jobs />
        </MemoryRouter>
      </Provider>
    )

    const graceButton = screen.getByText('Grace Period');
    fireEvent.click(graceButton)

    const name = screen.getByText("Amazon");
    const name3 = screen.getByText("Bean's Place")

    expect(name).toBeInTheDocument();
    expect(name3).toBeInTheDocument();

    const noiButton = screen.getByText('NOI Eligible')
    fireEvent.click(noiButton)

    const name2 = screen.getByText("Microsoft");

    expect(name2).toBeInTheDocument();
  });
  it('should display the right number of jobs on click for filed', () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header currentPath={'filed'}/>
          <Jobs />
        </MemoryRouter>
      </Provider>
    )

    const releaseButton = screen.getByText('Release Eligible');
    fireEvent.click(releaseButton)

    const name = screen.getByText("Microsoft");

    expect(name).toBeInTheDocument();
  });
  it('should display an error message if jobsList is empty', async () => {
    const store = mockStore({
      allJobs: {
        gracePeriod: [],
        noiEligible: [],
        lienEligible: [],
        releaseEligible: []
      }
    });
    const errorMsg = `Sorry, you have no jobs that are currently eligible. Please check again later.`
    store.dispatch = jest.fn();
    const mockSet = jest.fn()

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header currentPath={'filed'} />
          <Jobs dispatch={store.dispatch} setErrorMsg={mockSet} jobsList={[]}/>
          <Error message={errorMsg}/>
        </MemoryRouter>
      </Provider>
    )

    const lienButton = screen.getByText('Lien Eligible');

    fireEvent.click(lienButton)

    expect(store.dispatch).toBeCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith({"type": "RESET_ERROR"})

    const error = screen.getByText(`Sorry, you have no jobs that are currently eligible. Please check again later.`);

    expect(error).toBeInTheDocument();
  });
  it('should call resetError on clicking a button w/objects', () => {
    store.dispatch = jest.fn();
    const mockReset = jest.fn()

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header currentPath={'eligible'} />
          <Jobs dispatch={store.dispatch} resetErrorMsg={mockReset} />
        </MemoryRouter>
      </Provider>
    )

    const graceButton = screen.getByText('Grace Period');

    fireEvent.click(graceButton)

    expect(store.dispatch).toBeCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith({"type": "RESET_ERROR"})
  });
})
