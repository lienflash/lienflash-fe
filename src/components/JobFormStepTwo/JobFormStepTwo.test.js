import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import JobFormStepTwo from './JobFormStepTwo'

describe('JobFormStepTwo component', () => {
  beforeEach(() => {

    render(
      <JobFormStepTwo
        handleInputChange={jest.fn()}
        currentStep={2}
      />
    )
  })

  it('Should render step one of the form', () => {

    const heading = screen.getByRole('heading', { name: 'Client / Company Details' })
    const companyName = screen.getByText('Client / Company Name:')
    const BusinessAddress = screen.getByText('Business Address:')
    const city = screen.getByText('City:')
    const state = screen.getByText('State:')
    const zipCode = screen.getByText('Zip Code:')
    const additionalInfo = screen.getByText('Additional information:')

    expect(heading).toBeInTheDocument()
    expect(companyName).toBeInTheDocument()
    expect(BusinessAddress).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(zipCode).toBeInTheDocument()
    expect(state).toBeInTheDocument()
    expect(additionalInfo).toBeInTheDocument()
  })

  it('should store the form values that are inputted by user', () => {

    const clientNameInput = screen.getByLabelText('client-company-name')
    const clientBusinessAddress = screen.getByLabelText('client-business-address')
    const clientAddressLine2 = screen.getByLabelText('business-address-line-2')
    const cityInput = screen.getByLabelText('business-address-city')
    const stateInput = screen.getByLabelText('business-address-state')
    const zipCodeInput = screen.getByLabelText('business-address-zipcode')
    const additionalInfoInput = screen.getByLabelText('additional-information')

    fireEvent.change(clientNameInput, { target: { value: 'Burts' } })
    fireEvent.change(clientBusinessAddress, { target: { value: '100 Myrtle Drive' } })
    fireEvent.change(clientAddressLine2, { target: { value: '' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(stateInput, { target: { value: 'CO' } })
    fireEvent.change(zipCodeInput, { target: { value: '80242' } })
    fireEvent.change(additionalInfoInput, { target: { value: 'Please include Ron Potter on the NOI' } })

    expect(clientNameInput.value).toBe('Burts')
    expect(clientBusinessAddress.value).toBe('100 Myrtle Drive')
    expect(clientAddressLine2.value).toBe('')
    expect(cityInput.value).toBe('Denver')
    expect(stateInput.value).toBe('CO')
    expect(zipCodeInput.value).toBe('80242')
    expect(additionalInfoInput.value).toBe('Please include Ron Potter on the NOI')
  })
})