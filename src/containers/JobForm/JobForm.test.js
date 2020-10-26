import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import JobForm from './JobForm'

describe('Form component', () => {
  it('Should render the Add New Job form', () => {

    render(
      <JobForm />
    )

    const heading = screen.getByRole('heading', { name: 'Add New Job' })
    expect(heading).toBeInTheDocument()
  })



})