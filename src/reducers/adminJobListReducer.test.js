import adminJobListReducer from './adminJobListReducer.js'

describe('adminJobListReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = adminJobListReducer(undefined, []);

    expect(result).toEqual(expected)
  })

  it('should return the correct state if action is ADMIN_JOB_LIST', () => {
    const initialState = [];
    const action = {
      type: 'ADMIN_JOB_LIST',
      jobs: [
        {
          id: "1",
          type: "job",
          attributes: {
            job_type: 'Labor',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.',
            job_site_address_line_2: '', job_site_city: 'Denver',
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
          }
        }, 
        {
          id: "2",
          type: "job",
          attributes: {
            job_type: 'Labor',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.',
            job_site_address_line_2: '', job_site_city: 'Denver',
            job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-11-01T04:05:06.000Z",
            material_cost: 200,
            labor_cost: 200,
            total_cost: 400,
            description_of_work: 'blah',
            client_company_name: 'Amazon',
            business_address: '12 Tree Ave',
            business_address_line_2: 'Suite 200',
            business_city: 'Seattle',
            business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
            status: 'NOI Eligible',
          }
        }
      ]
    }

    const newState = [
        {
          id: "1",
          job_type: 'Labor',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.',
          job_site_address_line_2: '', job_site_city: 'Denver',
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
        }, 
        {
          id: "2",
          job_type: 'Labor',
          job_site_name: 'Home',
          job_site_contact_name: 'Taryn',
          job_site_address: '200 Washington St.',
          job_site_address_line_2: '', job_site_city: 'Denver',
          job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "2020-11-01T04:05:06.000Z",
          material_cost: 200,
          labor_cost: 200,
          total_cost: 400,
          description_of_work: 'blah',
          client_company_name: 'Amazon',
          business_address: '12 Tree Ave',
          business_address_line_2: 'Suite 200',
          business_city: 'Seattle',
          business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon warehouse reno',
          status: 'NOI Eligible',
        }
      ]
    
    const result = adminJobListReducer(initialState, action)

    expect(result).toEqual(newState)
  })
});