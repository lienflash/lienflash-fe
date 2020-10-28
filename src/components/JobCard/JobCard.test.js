import React from 'react';
import JobCard from './JobCard.js';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/index.js';

describe('JobCard', () => {
  it('should display job card on page load', () => {
    const store = createStore(rootReducer);
    const attributes = {
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

    render(
      <Provider store={ store }>
        <MemoryRouter>
          <JobCard data={attributes} dateDifference={"27"} key={attributes.job_id}/>
        </MemoryRouter>
      </Provider>
    )

    const name = screen.getByText("\"Construction Co Inc LLC\"");
    const total = screen.getByText("Amount Due: $300");
    const completion = screen.getByText("Date of Substantial Completion: 10/01/20");
    const daysDifference = screen.getByText("Days Left to Submit: 27")

    expect(name).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(completion).toBeInTheDocument();
    expect(daysDifference).toBeInTheDocument();
  });
})
