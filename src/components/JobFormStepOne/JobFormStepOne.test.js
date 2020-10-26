import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import JobFormStepOne from './JobFormStepOne'

describe('JobFormStepOne component', () => {
  it('Should render the step one of the form', () => {

    render(
      <JobFormStepOne 
        handleInputChange={jest.fn()}
        currentStep={1}
      />
    )

    const heading = screen.getByRole('heading', { name: 'Company Details' })
    expect(heading).toBeInTheDocument()
  })
})