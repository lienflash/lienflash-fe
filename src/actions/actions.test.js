import * as actions from './actions';

describe('actions', () => {
  it('should have a type of ALL_JOBS', () => {

    const allJobs = [
      {
          id: "1",
          type: "job",
          attributes: {
              job_street: "\"123 Main St.\"",
              job_city: "\"Denver\"",
              job_state: "\"CO\"",
              job_zip: "\"80218\"",
              date_of_completion: "2020-01-01T04:05:06.000Z",
              company_name: "\"Construction Co Inc LLC\"",
              contact_name: "\"Tim\"",
              material_cost: 100.0,
              labor_cost: 200.0,
              job_description: "\"New window\"",
              job_id: "\"W1234\""
          }
      }
    ];

    const expectedAction = {
      type: 'ALL_JOBS',
      allJobs: [
        {
            id: "1",
            type: "job",
            attributes: {
                job_street: "\"123 Main St.\"",
                job_city: "\"Denver\"",
                job_state: "\"CO\"",
                job_zip: "\"80218\"",
                date_of_completion: "2020-01-01T04:05:06.000Z",
                company_name: "\"Construction Co Inc LLC\"",
                contact_name: "\"Tim\"",
                material_cost: 100.0,
                labor_cost: 200.0,
                job_description: "\"New window\"",
                job_id: "\"W1234\""
            }
        }
      ]
    }

    const result = actions.setJobs(allJobs);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_JOBS', () => {
    const expectedAction = {
      type: 'CLEAR_JOBS',
    }

    const result = actions.clearJobs();

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_USER', () => {
    const info = {
      name: 'Taryn',
      email: 'taryn@gmail.com'
    }

    const expectedAction = {
      type: 'SET_USER',
      userInfo: info
    }

    const result = actions.setUser(info);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOGOUT_USER', () => {
    const expectedAction = {
      type: 'LOGOUT_USER'
    }

    const result = actions.logoutUser();

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of GET_INFO', () => {

    const jobId = "1"
    const dateDifference = 0
    const eligibility = 'good standing'

      const jobs = {
        gracePeriod: [{
          id: "1",
          type: "job",
          attributes: {
            job_type: 'labor & materials',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
            job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "10/30/20",
            material_cost: 200,
            labor_cost: 200,
            total_cost: 400,
            description_of_work: 'blah',
            client_company_name: 'Amazon',
            business_address: '12 Tree Ave',
            business_address_line_2: 'Suite 200',
            business_city: 'Seattle',
            business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
            status: 'good standing',
            dateDifference: 0
          }
        }
      ]
    }

    const expectedAction = {
      type: 'GET_INFO',
      id: "1",
      dateDifference: 0,
      eligibility: 'good standing',
      jobs: {
        gracePeriod: [{
          id: "1",
          type: "job",
          attributes: {
            job_type: 'labor & materials',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
            job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "10/30/20",
            material_cost: 200,
            labor_cost: 200,
            total_cost: 400,
            description_of_work: 'blah',
            client_company_name: 'Amazon',
            business_address: '12 Tree Ave',
            business_address_line_2: 'Suite 200',
            business_city: 'Seattle',
            business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
            status: 'good standing',
            dateDifference: 0
          }
        }]
      }
    }

    const result = actions.getJobInfo(jobId, dateDifference, eligibility, jobs);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_ERROR', () => {

    const errorMessage = 'Sorry, you have no jobs that are currently eligible.Please check again later.'

    const expectedAction = {
      type: 'SET_ERROR',
      errorMessage
    }

    const result = actions.setErrorMsg(errorMessage);

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of RESET_ERROR', () => {

    const expectedAction = {
      type: 'RESET_ERROR'
    }

    const result = actions.resetErrorMsg();

    expect(result).toEqual(expectedAction);
  })

  it('should have a type of ADMIN_JOB_LIST', () => {
    const jobs = [
      {
        id: "1",
        type: "job",
        attributes: {
          job_street: "\"123 Main St.\"",
          job_city: "\"Denver\"",
          job_state: "\"CO\"",
          job_zip: "\"80218\"",
          date_of_completion: "2020-01-01T04:05:06.000Z",
          company_name: "\"Construction Co Inc LLC\"",
          contact_name: "\"Tim\"",
          material_cost: 100.0,
          labor_cost: 200.0,
          job_description: "\"New window\"",
          job_id: "\"W1234\""
        }
      }
    ];

    const expectedAction = {
      type: 'ADMIN_JOB_LIST',
      jobs: [
        {
          id: "1",
          type: "job",
          attributes: {
            job_street: "\"123 Main St.\"",
            job_city: "\"Denver\"",
            job_state: "\"CO\"",
            job_zip: "\"80218\"",
            date_of_completion: "2020-01-01T04:05:06.000Z",
            company_name: "\"Construction Co Inc LLC\"",
            contact_name: "\"Tim\"",
            material_cost: 100.0,
            labor_cost: 200.0,
            job_description: "\"New window\"",
            job_id: "\"W1234\""
          }
        }
      ]
    }

    const result = actions.setAdminJobList(jobs);

    expect(result).toEqual(expectedAction);
  });

})
