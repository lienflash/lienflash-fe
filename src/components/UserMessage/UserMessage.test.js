import React from 'react';
import UserMessage from './UserMessage';
import { screen, render, fireEvent  } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';

describe('UserMessage component', () => {
  it('should display Submit NOI button when status is NOI Eligible', () => {
  const diff = 11
  const status = 'NOI Eligible'

    render(
      <MemoryRouter>
        <UserMessage 
          dateDifference={diff}
          status={status} 
          handleClick={jest.fn()} 
        />
      </MemoryRouter>
    )

    const noiButton = screen.getByRole('button', { name: 'Submit NOI' })

    expect(noiButton).toBeInTheDocument();
  });

  it('should display Submit Lien button when status is NOI filed', () => {
    const diff = 30
    const status = 'NOI filed'

    render(
      <MemoryRouter>
        <UserMessage
          dateDifference={diff}
          status={status}
          handleClick={jest.fn()}
        />
      </MemoryRouter>
    )

    const lienButton = screen.getByRole('button', { name: 'Submit Lien' })

    expect(lienButton).toBeInTheDocument();
  });

  it('should display Release Lien button when status is lien filed', () => {
    const diff = 30
    const status = 'Lien Filed'

    render(
      <MemoryRouter>
        <UserMessage
          dateDifference={diff}
          status={status}
          handleClick={jest.fn()}
        />
      </MemoryRouter>
    )

    const releaseButton = screen.getByRole('button', { name: 'Submit Release of Lien' })

    expect(releaseButton).toBeInTheDocument();
  });

  it('Should trigger patch request if user hits confirm on Submit NOI button', () => {
    const diff = 11
    const status = 'NOI Eligible'

    const mockHandleClick = jest.fn()

    render(
      <MemoryRouter>
        <UserMessage
          dateDifference={diff}
          status={status}
          handleClick={mockHandleClick}
        />
      </MemoryRouter>
    )

    const noiButton = screen.getByRole('button', { name: 'Submit NOI' })
    
    fireEvent.click(noiButton)

    const confirmButton = screen.getByRole('button', { name: 'Confirm' })
    const message = screen.getByText("Please confirm if you would like to submit a NOI for this job.", { exact: false })
    
    expect(message).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();

    fireEvent.click(confirmButton)

    expect(mockHandleClick).toHaveBeenCalled()
    expect(mockHandleClick).toHaveBeenCalledWith(2)
  })

  it('Should trigger patch request if user hits confirm on Remove button', () => {
    const diff = 11
    const status = 'NOI Eligible'

    const mockHandleClick = jest.fn()

    render(
      <MemoryRouter>
        <UserMessage
          dateDifference={diff}
          status={status}
          handleClick={mockHandleClick}
        />
      </MemoryRouter>
    )

    const removeButton = screen.getByRole('button', { name: 'Remove Job' })

    fireEvent.click(removeButton)

    const confirmButton = screen.getByRole('button', { name: 'Confirm' })
    const message = screen.getByText("Are you sure you want to remove this job?", { exact: false })

    expect(message).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();

    fireEvent.click(confirmButton)

    expect(mockHandleClick).toHaveBeenCalled()
    expect(mockHandleClick).toHaveBeenCalledWith(5)
  })

  it('Should trigger patch request if user hits confirm on Submit Lien button', () => {
    const diff = 30
    const status = 'NOI filed'

    const mockHandleClick = jest.fn()

    render(
      <MemoryRouter>
        <UserMessage
          dateDifference={diff}
          status={status}
          handleClick={mockHandleClick}
        />
      </MemoryRouter>
    )

    const submitLienBtn = screen.getByRole('button', { name: 'Submit Lien' })

    fireEvent.click(submitLienBtn)

    const confirmButton = screen.getByRole('button', { name: 'Confirm' })
    const message = screen.getByText("Please confirm if you would like to submit a NOI for this job.", { exact: false })

    expect(message).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();

    fireEvent.click(confirmButton)

    expect(mockHandleClick).toHaveBeenCalled()
    expect(mockHandleClick).toHaveBeenCalledWith(3)
  })

  it('Should trigger patch request if user hits confirm on Submit Release of Lien button', () => {
    const diff = 30
    const status = 'Lien Filed'

    const mockHandleClick = jest.fn()

    render(
      <MemoryRouter>
        <UserMessage
          dateDifference={diff}
          status={status}
          handleClick={mockHandleClick}
        />
      </MemoryRouter>
    )

    const submitReleaseBtn = screen.getByRole('button', { name: 'Submit Release of Lien' })

    fireEvent.click(submitReleaseBtn)

    const confirmButton = screen.getByRole('button', { name: 'Confirm' })
    const message = screen.getByText("Please confirm if you would like to release the lien for this job.", { exact: false })

    expect(message).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();

    fireEvent.click(confirmButton)

    expect(mockHandleClick).toHaveBeenCalled()
    expect(mockHandleClick).toHaveBeenCalledWith(5)
  })
})

