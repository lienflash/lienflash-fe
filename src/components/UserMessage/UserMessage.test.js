import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import UserMessage from './UserMessage';

describe('UserMessage component', () => {

  it("should only render the 'Remove Job' button when the job when job is in 'good standing'", () => {
    render (
      <MemoryRouter>
        <UserMessage
          status={0} 
          dateDifference={8} 
          handleClick={jest.fn()} 
        />
      </MemoryRouter>
    )

    const removeJobBtn = screen.getByRole('button', { name: 'Remove Job'})
    const submitNOIbtn = screen.queryByRole('button', { name: 'Submit NOI' })

    expect(removeJobBtn).toBeInTheDocument()
    expect(submitNOIbtn).not.toBeInTheDocument()
  })

  it("should only render the 'Submit NOI' button when the job is eligible", () => {
    render(
      <MemoryRouter>
        <UserMessage
          status={1}
          dateDifference={12}
          handleClick={jest.fn()}
        />
      </MemoryRouter>
    )

    const submitNOIbtn = screen.getByRole('button', { name: 'Submit NOI' })
    const removeJobBtn = screen.getByRole('button', { name: 'Remove Job' })

    expect(submitNOIbtn).toBeInTheDocument()
    expect(removeJobBtn).toBeInTheDocument()
  })

/* How to mock the Lien Eligible status? */

  // it("should only render the 'Submit Lien' button when the job is eligible", () => {
  //   render(
  //     <MemoryRouter>
  //       <UserMessage
  //         status={2}
  //         dateDifference={51}
  //         handleClick={jest.fn()}
  //       />
  //     </MemoryRouter>
  //   )

  //   const submitLien = screen.queryByRole('button', { name: 'Submit Lien' })
  //   const removeJobBtn = screen.getByRole('button', { name: 'Remove Job' })

  //   expect(submitLien).toBeInTheDocument()
  //   expect(removeJobBtn).toBeInTheDocument()
  // })

})