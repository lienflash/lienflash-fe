import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history'
import thunk from 'redux-thunk';
import App from './App'
import { getAllJobs, postNewJob, postLogin } from '../../helpers/apiCalls';
jest.mock('../../helpers/apiCalls');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('App component', () => {
  it('Should render the landing page when the app loads', async () => {
    const allJobs = {
      gracePeriod: [{
        id: "1",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
          status: 'good standing'
        }
      }],
      noiEligible: [{
        id: "2",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Microsoft',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
          status: 'NOI Eligible'
        }
      }],
      lienEligible: [],
      inProcess: [],
      releaseEligible: []
    }

    const user = {}

    getAllJobs.mockResolvedValueOnce(allJobs)

    const store = mockStore({
      allJobs: {},
      user: user
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const title = screen.getByText('Welcome to LienFlash!')
    const title2 = screen.getByText('Please login to continue')
    const createBtn = screen.getByRole('button', {name: 'Create Account'});
    const loginBtn = screen.getByRole('button', {name: 'Login'})

    expect(title).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(createBtn).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument()
    // const header = await waitFor(() => screen.getByRole('heading', { name: 'What do you want to do?'}))
    // const addJobButton = screen.getByRole('button', { name: 'Add Job'})
    // const eligibleJobsButton = screen.getByRole('button', { name: 'NOI Eligible Jobs' })
    // const filedLiensButton = screen.getByRole('button', { name: 'Filed Liens' })
    // const profileButton = screen.getByRole('button', { name: 'Profile' })
    //
    // await waitFor(() => {
    //   expect(header).toBeInTheDocument()
    //   expect(addJobButton ).toBeInTheDocument()
    //   expect(eligibleJobsButton).toBeInTheDocument()
    //   expect(filedLiensButton).toBeInTheDocument()
    //   expect(profileButton).toBeInTheDocument()
    // })
  })

  it('Should render loading page while data is being fetched', async () => {
    const allJobs = {
      gracePeriod: [{
        id: "1",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
          status: 'Good Standing',
          user_id: 1
        }
      }],
      noiEligible: [],
      lienEligible: [],
      inProcess: [],
      releaseEligible: []
    }
    const info = {
      email: 'taryn@gmail.com',
      password: 'name'
    }

    const loginResponse = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }

    getAllJobs.mockResolvedValueOnce(allJobs)
    postLogin.mockResolvedValueOnce(loginResponse)

    const store = mockStore({
      allJobs: allJobs,
      user: {}
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    // const login = screen.getByRole('button', {name: 'Login'})
    //
    // fireEvent.click(login)
    //
    // const emailBox = screen.getByPlaceholderText('joe@gmail.com');
    // const passwordBox = screen.getByPlaceholderText('Password')
    // const button = screen.getByRole('button', {name: 'Submit Login'})
    //
    // fireEvent.change(emailBox, {target: {value:'taryn@gmail.com'}})
    // fireEvent.change(passwordBox, {target: {value: 'name'}})
    // fireEvent.click(button)
    //
    // const header = await waitFor(() => screen.getByText('What do you want to do?'))
    //
    // expect(header).toBeInTheDocument();
  })

  it('should render the login page when the user clicks on the login button & submit a user', async () => {
    const allJobs = {
      gracePeriod: [{
        id: "1",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
          status: 'Good Standing',
          user_id: 1
        }
      }],
      noiEligible: [],
      lienEligible: [],
      releaseEligible: []
    }

    const info = {
      email: 'taryn@gmail.com',
      password: 'name'
    }

    postLogin.mockResolvedValue(info)

    const store = mockStore({
      allJobs: {},
      user: {}
    })

    store.dispatch = jest.fn()
    const mockSetUser = jest.fn()

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const title = await waitFor(() =>screen.getByText('Welcome to LienFlash!'))
    const title2 = screen.getByText('Please login to continue')
    const createBtn = screen.getByRole('button', {name: 'Create Account'});
    const loginBtn = screen.getByRole('button', {name: 'Login'})

    fireEvent.click(loginBtn)

    const emailBox = screen.getByPlaceholderText('joe@gmail.com');
    const passwordBox = screen.getByPlaceholderText('Password')
    const button = screen.getByRole('button', {name: 'Submit Login'})

    fireEvent.change(emailBox, {target: {value:'taryn@gmail.com'}})
    fireEvent.change(passwordBox, {target: {value: 'name'}})
    fireEvent.click(button)

    expect(postLogin).toHaveBeenCalledWith(info)
  })

  it.skip('should log a user out when they click on the logout button and take them to the landing page', async () => {
    const allJobs = {
      gracePeriod: [{
        id: "1",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
          status: 'Good Standing',
          user_id: 1
        }
      }],
      noiEligible: [],
      lienEligible: [],
      inProcess: [],
      releaseEligible: []
    }

    const loginResponse = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }

    getAllJobs.mockResolvedValueOnce(allJobs)
    postLogin.mockResolvedValueOnce(loginResponse)

    const store = mockStore({
      allJobs: allJobs,
      user: loginResponse
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const homepage = await waitFor(() => screen.getByText('What do you want to do?'))
    const logoutBtn = screen.getByRole('button', {name: 'Log Out'});

    fireEvent.click(logoutBtn);

    const message = await waitFor(() => screen.getByText('Welcome to LienFlash!'))

    await waitFor(() => {
        expect(message).toBeInTheDocument()
    })
  })
  it('should show the right number of jobs when user clicks on eligible button and goes to grace period', async () => {
    const allJobs = {
      gracePeriod: [{
        id: "1",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
          status: 'good standing'
        }
      }],
      noiEligible: [],
      lienEligible: [],
      releaseEligible: []
    }

    const user = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }

    getAllJobs.mockResolvedValueOnce(allJobs)

    const store = mockStore({
      allJobs: allJobs,
      user: user
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const eligibleJobsButton = await waitFor(() => screen.getByText('NOI Eligible Jobs'))

    fireEvent.click(eligibleJobsButton);

    const name = await waitFor(() => screen.getByText('Job site contact: Taryn'))

    expect(name).toBeInTheDocument()
  })

  it('should show the right number of jobs when user clicks on eligible button and goes to noi eligible', async () => {
    const allJobs = {
      gracePeriod: [],
      noiEligible: [{
        id: "1",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
          status: 'good standing'
        }
      }],
      lienEligible: [],
      inProcess: [],
      releaseEligible: []
    }

    const user = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }

    getAllJobs.mockResolvedValueOnce(allJobs)

    const store = mockStore({
      allJobs: allJobs,
      user: user
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const eligibleJobsButton = await waitFor(() => screen.getByText('NOI Eligible Jobs'))

    fireEvent.click(eligibleJobsButton);

    const noiButton = await waitFor(() => screen.getByText('NOI Eligible'))

    fireEvent.click(noiButton)

    const name = await waitFor(() => screen.getByText('Job site contact: Taryn'))

    expect(name).toBeInTheDocument()
  })
  it('should show the right number of jobs when user clicks on filed button and goes to lien eligible', async () => {
    const allJobs = {
      gracePeriod: [],
      noiEligible: [],
      lienEligible: [{
        id: "1",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
          status: 'NOI filed'
        }
      }],
      inProcess: [],
      releaseEligible: []
    }

    const user = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }

    getAllJobs.mockResolvedValueOnce(allJobs)

    const store = mockStore({
      allJobs: allJobs,
      user: user
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const filedJobsButton = await waitFor(() => screen.getByText('Filed Liens'))

    fireEvent.click(filedJobsButton);

    const name = await waitFor(() => screen.getByText('Job site contact: Taryn'))

    expect(name).toBeInTheDocument()
  })
  it('should show the right number of jobs when user clicks on filed button and goes to release eligible', async () => {
    const allJobs = {
      gracePeriod: [],
      noiEligible: [],
      lienEligible: [],
      releaseEligible: [{
        id: "1",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
          status: 'Lien Filed'
        }
      }]
    }

    const user = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }

    getAllJobs.mockResolvedValueOnce(allJobs)

    const store = mockStore({
      allJobs: allJobs,
      user: user
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const filedJobsButton = await waitFor(() => screen.getByText('Filed Liens'))

    fireEvent.click(filedJobsButton);

    const releaseButton = await waitFor(() => screen.getByText('Release Eligible'))

    fireEvent.click(releaseButton)

    const name = await waitFor(() => screen.getByText('Job site contact: Taryn'))

    expect(name).toBeInTheDocument()
  })

  it('should show the job form when a user clicks on add job', async () => {
    getAllJobs.mockResolvedValueOnce({
      allJobs: {}
    })

    const user = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }

    const store = mockStore({
      allJobs: {},
      user: user
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const addButton = await waitFor(() => screen.getByText('Add Job'))

    expect(addButton).toBeInTheDocument()

    fireEvent.click(addButton);

    const heading = await waitFor(() => screen.getByText('Add New Job'))

    expect(heading).toBeInTheDocument();
  })

  it.skip('should allow a user to submit a new job on click', async () => {
    const allJobs = {
      gracePeriod: [{
        id: "1",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon is cool',
          status: 'good standing'
        }
      }],
      noiEligible: [{
        id: "2",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Microsoft',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon is cool',
          status: 'NOI Eligible'
        }
      }],
      lienEligible: [],
      inProcess: [],
      releaseEligible: []
    }

    const user = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }
    
    getAllJobs.mockResolvedValueOnce(allJobs)

    postNewJob.mockResolvedValueOnce({
      job_type: 'Labor',
      job_site_contact_name: 'Sally May',
      job_site_name: 'Burt\'s Warehouse',
      job_site_address: '1777 Myrtle Drive',
      job_site_address_line_2: 'Apt 1209',
      job_site_city: 'Denver',
      job_site_state: 'CO',
      job_site_zip_code: '80240',
      completion_date: '2020-10-25',
      description_of_work: 'Fixed the toilet',
      labor_cost: '10000',
      material_cost: null,
      total_cost: '10000',
      client_company_name: null,
      business_address: null,
      business_address_line_2: null,
      business_city: null,
      business_state: null,
      business_zip_code: null,
      additional_info: null,
      user_id: 1,
      status: 'Good Standing'
    })

    const store = mockStore({
      allJobs: allJobs,
      user: user
    })

    const history = createMemoryHistory()
    const pushSpy = jest.spyOn(history, 'push')

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const addButton = await waitFor(() => screen.getByText('Add Job'))

    expect(addButton).toBeInTheDocument()

    fireEvent.click(addButton);

    const heading = await waitFor(() => screen.getByText('Add New Job'))

    expect(heading).toBeInTheDocument();

    const jobTypeInput = screen.getByRole('radio', { name: 'job-type' });
    const jobSiteContactName = screen.getByLabelText('job-site-contact-name')
    const jobSiteNameInput = screen.getByLabelText('job-site-name')
    const siteAddressInput = screen.getByLabelText('job-site-address')
    const siteAddress2Input = screen.getByLabelText('job-site-address-line-2')
    const cityInput = screen.getByLabelText('job-site-city')
    const stateInput = screen.getByLabelText('job-site-state')
    const zipCodeInput = screen.getByLabelText('job-site-zip-code')
    const dateInput = screen.getByLabelText('job-completion-date')
    const jobDescription = screen.getByLabelText('job-description')
    const laborCostsInput = screen.getByLabelText('labor-costs-due')
    const totalCostsInput = screen.getByLabelText('total-costs-due')
    const nextButton = screen.getByRole('button', { name: 'Next' })

    fireEvent.click(jobTypeInput)
    fireEvent.change(jobSiteContactName, { target: { value: 'Sally May' } })
    fireEvent.change(jobSiteNameInput, { target: { value: 'Burt\'s Warehouse' } })
    fireEvent.change(siteAddressInput, { target: { value: '1777 Myrtle Drive' } })
    fireEvent.change(siteAddress2Input, { target: { value: 'Apt 1209' } })
    fireEvent.change(cityInput, { target: { value: 'Denver' } })
    fireEvent.change(stateInput, { target: { value: 'CO' } })
    fireEvent.change(zipCodeInput, { target: { value: '80240' } })
    fireEvent.change(dateInput, { target: { value: '2020-10-25' } })

    fireEvent.change(laborCostsInput, { target: { value: '10000' } })
    fireEvent.change(jobDescription, { target: { value: 'Fixed the toilet' } })
    fireEvent.change(jobSiteNameInput, { target: { value: 'Burt\'s Warehouse' } })
    fireEvent.change(totalCostsInput, { target: { value: '10000' } })

    fireEvent.click(nextButton)

    const submitButton = screen.getByLabelText('submit form')

    fireEvent.click(submitButton)

    const newJob = {
      jobType: 'Labor',
      jobSiteContactName: 'Sally May',
      jobSiteName: 'Burt\'s Warehouse',
      jobSiteAddress: '1777 Myrtle Drive',
      jobSiteAddressLine2: 'Apt 1209',
      jobSiteCity: 'Denver',
      jobSiteState: 'CO',
      jobSiteZipCode: '80240',
      completionDate: '2020-10-25',
      laborCost: '10000',
      jobDescription: 'Fixed the toilet',
      totalCost: '10000',
    }

    expect(postNewJob).toHaveBeenCalledWith(newJob, user.id)

    // await waitFor(() => expect(pushSpy).toHaveBeenCalledWith('/homepage'))
  // })
  })

  it.skip('should go to the profile page on click', async () => {
    getAllJobs.mockResolvedValueOnce({allJobs: {}})

    const user = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }

    const store = mockStore({
      allJobs: {},
      user: user
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const profileButton = screen.getByRole('button', { name: 'Profile' })

    fireEvent.click(profileButton)

    const message = screen.getByText('Profile')
    const backBtn = await waitFor(() => screen.getByText('Back'))

    expect(backBtn).toBeInTheDocument()
    expect(message).toBeInTheDocument()
  })
  it.skip('should allow a user to return home when the logo is clicked', async () => {
    getAllJobs.mockResolvedValueOnce({allJobs: {}})

    const user = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }

    const store = mockStore({
      allJobs: {},
      user: user
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const firstProfileButton = await waitFor(() => screen.getByRole('button', { name: 'Profile' }))

    fireEvent.click(firstProfileButton)

    const logo = await waitFor(() => screen.getByAltText('lienflash logo'))

    fireEvent.click(logo)

    const header = await waitFor(() => screen.getByText('What do you want to do?'));
    const addJobButton = screen.getByRole('button', { name: 'Add Job'})
    const eligibleJobsButton = screen.getByRole('button', { name: 'NOI Eligible Jobs' })
    const filedLiensButton = screen.getByRole('button', { name: 'Filed Liens' })
    const profileButton2 = screen.getByRole('button', { name: 'Profile' })

    await waitFor(() => {
      expect(header).toBeInTheDocument();
      expect(addJobButton).toBeInTheDocument();
      expect(eligibleJobsButton).toBeInTheDocument();
      expect(filedLiensButton).toBeInTheDocument();
      expect(profileButton2).toBeInTheDocument();
    })
  })

  it('should return to the previous page on back click from job details page', async () => {
    const allJobs = {
      gracePeriod: [{
        id: "1",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon is cool',
          status: 'good standing'
        }
      }],
      noiEligible: [{
        id: "2",
        type: "job",
        attributes: {
          job_type: 'labor & materials',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Microsoft',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon is cool',
          status: 'NOI Eligible'
        }
      }],
      lienEligible: [],
      inProcess: [],
      releaseEligible: []
    }

    const user = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }

    const mockInfo = {
      attributes: {
        job_type: 'labor & materials',
        job_site_name: 'Home',
        job_site_contact_name: 'Taryn',
        job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
        job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
        material_cost: 200,
        labor_cost: 200,
        total_cost: 400,
        description_of_work: 'blah',
        client_company_name: 'Amazon',
        business_address: '12 Tree Ave',
        business_address_line_2: 'Suite 200',
        business_city: 'Seattle',
        business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon is cool',
        status: 'good standing'
      }
    }

    getAllJobs.mockResolvedValueOnce(allJobs)

    const store = mockStore({
      allJobs: allJobs,
      jobInfo: mockInfo,
      user: user
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const header = await waitFor(() => screen.getByRole('heading', { name: 'What do you want to do?'}))
    const eligibleJobsButton = screen.getByRole('button', { name: 'NOI Eligible Jobs' })

    fireEvent.click(eligibleJobsButton);

    const card = screen.getByText('Job site contact: Taryn');

    expect(card).toBeInTheDocument()

    fireEvent.click(card);

    const info = await waitFor(() => screen.getByText('Amazon is cool'));

    expect(info).toBeInTheDocument()

    const backBtn = screen.getByRole('button', {name: 'Back'});

    fireEvent.click(backBtn);

    const newCard = screen.getByText('Job site contact: Taryn');

    expect(newCard).toBeInTheDocument()
  })

  it('should allow a user to open a window with job details', async () => {
    const currentDate = new Date()

    const allJobs = {
      gracePeriod: [{
        id: "1",
        type: "job",
        attributes: {
          job_type: 'Labor',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: currentDate,
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon is cool',
          status: 'good standing'
        }
      }],
      noiEligible: [{
        id: "2",
        type: "job",
        attributes: {
          job_type: 'Labor',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-10-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Microsoft',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon is cool',
          status: 'NOI Eligible'
        }
      }],
      lienEligible: [],
      releaseEligible: []
    }

    const user = {
      id: 1,
      attributes: {
        name: 'Taryn',
        email: 'taryn@gmail.com'
      }
    }

    const mockInfo = {
        attributes: {
          job_type: 'Labor',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: currentDate,
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon is cool',
          status: 'good standing'
        }
    }

    getAllJobs.mockResolvedValueOnce(allJobs)

    const store = mockStore({
      allJobs: allJobs,
      jobInfo: mockInfo,
      user: user
    })

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )

    const header = await waitFor(() => screen.getByRole('heading', { name: 'What do you want to do?'}))
    const eligibleJobsButton = screen.getByRole('button', { name: 'NOI Eligible Jobs' })

    fireEvent.click(eligibleJobsButton);

    const card = screen.getByText('Job site contact: Taryn')

    expect(card).toBeInTheDocument()

    fireEvent.click(card);

    const info = await waitFor(() => screen.getByText('Amazon is cool'));

    expect(info).toBeInTheDocument()

  })
})
