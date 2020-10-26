import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import JobFormStepOne from './JobFormStepOne'

describe('JobFormStepOne component', () => {
  it('Should render the Add New Job form', () => {

    render(
      <JobFormStepOne />
    )

    const heading = screen.getByText('heading', { name: 'Company Details' })
    expect(heading).toBeInTheDocument()
  })
})