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
            job_street: "\"123 Main St.\"",
            job_city: "\"Denver\"",
            job_state: "\"CO\"",
            job_zip: "\"80218\"",
            date_of_completion: "2020-10-01T04:05:06.000Z",
            company_name: "\"Construction Co Inc LLC\"",
            contact_name: "\"Tim\"",
            material_cost: 100.0,
            labor_cost: 200.0,
            job_description: "\"New window\"",
            job_id: "\"W1234\""
        }
      }, {
        id: "1",
        type: "job",
        attributes: {
            job_street: "1234 Main St.",
            job_city: "Denver",
            job_state: "CO",
            job_zip: "80218",
            date_of_completion: "2020-01-01T04:05:06.000Z",
            company_name: "Construction Co Inc LLC",
            contact_name: "Tim",
            material_cost: 100.0,
            labor_cost: 200.0,
            job_description: "New window",
            job_id: "W1234"
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

    const name = screen.getByText("\"Construction Co Inc LLC\"");
    const name2 = screen.getByText("Construction Co Inc LLC");

    expect(name).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
  });
})
