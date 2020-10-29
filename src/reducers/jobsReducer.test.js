import jobsReducer from './jobsReducer'

describe('jobsReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = jobsReducer(undefined, {});

    expect(result).toEqual(expected)
  });

  it('should return the correct state if action is ALL_JOBS', () => {
    const currentDate = new Date();
    const initialState = {};
    const action = {
      type: 'ALL_JOBS',
      allJobs: [
        {
            id: "1",
            type: "job",
            attributes: {
              job_type: 'labor & materials',
              job_site_name: 'Home',
              job_site_contact_name: 'Taryn',
              job_site_address: '200 Washington St.',
              job_site_address_line_2: '', job_site_city: 'Denver',
              job_site_state: 'CO', job_site_zip_code: '80201', completion_date: currentDate,
              material_cost: 200,
              labor_cost: 200,
              total_cost: 400,
              description_of_work: 'blah',
              client_company_name: 'Amazon',
              business_address: '12 Tree Ave',
              business_address_line_2: 'Suite 200',
              business_city: 'Seattle',
              business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
              status: 'good standing'
            }
        }
      ]
    }


    const newState = {
      gracePeriod: [{
          id: "1",
          type: "job",
          attributes: {
            job_type: 'labor & materials',
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
            business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
            status: 'good standing',
            dateDifference: 0
          }
      }],
      noiEligible: [],
      lienEligible: [],
      inProcess: [],
      releaseEligible: []
    };

    const result = jobsReducer(initialState, action)

    expect(result).toEqual(newState)
  });
})
