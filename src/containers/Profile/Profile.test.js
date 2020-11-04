import React from 'react';
import Profile from './Profile.js';
import thunk from 'redux-thunk';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { createMemoryHistory } from 'history'
import { MemoryRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Profile component', () => {
    const user = {
      id: 1,
      attributes: {
      name: 'Timmy',
      business_name: "Timmy's plumbling",
      email: "email1234@gmail.com",
      business_work_number: "550-123-4567",
      business_cell_number: "555-123-4567",
      business_address: "123 Main St.",
      business_address_line2: "apt 23",
      business_city: "Denver",
      business_state: 'CO',
      business_zip_code: "80218"
    }
  }

  const store = mockStore({
    allJobs: {},
    user: user
  })

  it('should display user profile on load', () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      </Provider>
    )
    const heading = screen.getByRole('heading', { name: 'Profile' })
    const nameLabel = screen.getByText('Name:')
    const name = screen.getByText('Timmy')
    const companyNameLabel = screen.getByText('Company Name:')
    const companyName = screen.getByText("Timmy's plumbling")
    const emailLabel = screen.getByText('Email:')
    const email = screen.getByText("email1234@gmail.com")
    const workPhoneLabel = screen.getByText('Work number:')
    const workPhone = screen.getByText("550-123-4567")
    const cellPhoneLabel = screen.getByText('Cell number:')
    const cellPhone = screen.getByText("555-123-4567")
    const businessAddressLabel = screen.getByText('Business Address:')
    const businessAddress = screen.getByText("123 Main St.", {exact: false})
    const businessAddressLine2 = screen.getByText("apt 23", { exact: false })
    const businessAddressCity = screen.getByText("Denver", { exact: false })
    const businessAddressState = screen.getByText(', CO', { exact: false })
    const businessAddressZip = screen.getByText("80218", { exact: false })

    expect(heading).toBeInTheDocument()
    expect(nameLabel).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(companyNameLabel).toBeInTheDocument()
    expect(companyName).toBeInTheDocument()
    expect(emailLabel).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(workPhoneLabel).toBeInTheDocument()
    expect(workPhone).toBeInTheDocument()
    expect(cellPhoneLabel).toBeInTheDocument()
    expect(cellPhone).toBeInTheDocument()
    expect(businessAddressLabel).toBeInTheDocument()
    expect(businessAddress).toBeInTheDocument()
    expect(businessAddressLine2).toBeInTheDocument()
    expect(businessAddressCity).toBeInTheDocument()
    expect(businessAddressState).toBeInTheDocument()
    expect(businessAddressZip).toBeInTheDocument()
  })

  it('The back button should take user back to dashboard ', () => {
    const history = createMemoryHistory()
    const pushSpy = jest.spyOn(history, 'goBack')

    render(
      <Provider store={store}>
        <Router history={history}>
          <Profile />
        </Router>
      </Provider>
    )

    fireEvent.click(screen.getByRole('button'))
    expect(pushSpy).toHaveBeenCalled()
  })
})
describe('Profile - edge case', () => {
  const user = {
    id: 1,
    attributes: {
    name: 'Timmy',
    business_name: "Timmy's plumbling",
    email: "email1234@gmail.com",
    business_work_number: "550-123-4567",
    business_cell_number: "555-123-4567",
    business_address: "123 Main St.",
    business_address_line2: null,
    business_city: "Denver",
    business_state: 'CO',
    business_zip_code: "80218"
  }
}

const store = mockStore({
  allJobs: {},
  user: user
})
  it('should not display address line 2 if not present in user object', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      </Provider>
    )
    const heading = screen.getByRole('heading', { name: 'Profile' })
    const nameLabel = screen.getByText('Name:')
    const name = screen.getByText('Timmy')
    const companyNameLabel = screen.getByText('Company Name:')
    const companyName = screen.getByText("Timmy's plumbling")
    const emailLabel = screen.getByText('Email:')
    const email = screen.getByText("email1234@gmail.com")
    const workPhoneLabel = screen.getByText('Work number:')
    const workPhone = screen.getByText("550-123-4567")
    const cellPhoneLabel = screen.getByText('Cell number:')
    const cellPhone = screen.getByText("555-123-4567")
    const businessAddressLabel = screen.getByText('Business Address:')
    const businessAddress = screen.getByText("123 Main St.", {exact: false})
    const businessAddressCity = screen.getByText("Denver", { exact: false })
    const businessAddressState = screen.getByText(', CO', { exact: false })
    const businessAddressZip = screen.getByText("80218", { exact: false })

    expect(heading).toBeInTheDocument()
    expect(nameLabel).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(companyNameLabel).toBeInTheDocument()
    expect(companyName).toBeInTheDocument()
    expect(emailLabel).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(workPhoneLabel).toBeInTheDocument()
    expect(workPhone).toBeInTheDocument()
    expect(cellPhoneLabel).toBeInTheDocument()
    expect(cellPhone).toBeInTheDocument()
    expect(businessAddressLabel).toBeInTheDocument()
    expect(businessAddress).toBeInTheDocument()
    expect(businessAddressCity).toBeInTheDocument()
    expect(businessAddressState).toBeInTheDocument()
    expect(businessAddressZip).toBeInTheDocument()
  })
})
