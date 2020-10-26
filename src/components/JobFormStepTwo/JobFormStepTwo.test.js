import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import JobFormStepTwo from './JobFormStepTwo'

describe('JobFormStepTwo component', () => {
  it('Should render step two of the form', () => {

    render(
      <JobFormStepTwo 
        handleInputChange={jest.fn()}
        currentStep={2}/>
    )

    const heading = screen.getByRole( 'heading', { name: 'Job Details' })
    expect(heading).toBeInTheDocument()
  })
})