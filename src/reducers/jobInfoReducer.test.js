import jobInfoReducer from './jobInfoReducer.js'

describe('jobInfoReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = jobInfoReducer(undefined, {});

    expect(result).toEqual(expected)
  });

  it("should return the correct state if action is GET_INFO and eligibility is 'good standing' ", () => {
    const initialState = {};
    const action = {
      type: 'GET_INFO',
      id: "1",
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
            business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
            status: 'good standing',
            dateDifference: 0
          }
        },
        ],
        noiEligible: [],
        lienEligible: [],
        inProcess: [],
        releaseEligible: []
      }
    }

    const newState = {
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
        business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
        status: 'good standing',
        dateDifference: 0
      }
    }

    const result = jobInfoReducer(initialState, action)

    expect(result).toEqual(newState)
  });

  it("should return the correct state if action is GET_INFO and eligibility is 'NOI Eligible' ", () => {
    const initialState = {};
    const action = {
      type: 'GET_INFO',
      id: "1",
      eligibility: 'NOI Eligible',
      jobs: {
        noiEligible: [{
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
            business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
            status: 'NOI Eligible',
            dateDifference: 0
          }
        },
      ],
      gracePeriod: [],
      lienEligible: [],
      inProcess: [],
      releaseEligible: []
    }
  }

  const newState = {
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
      business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
      status: 'NOI Eligible',
      dateDifference: 0
    }
  }

    const result = jobInfoReducer(initialState, action)

    expect(result).toEqual(newState)
  });

  it("should return the correct state if action is GET_INFO and eligibility is 'NOI filed' ", () => {
    const initialState = {};
    const action = {
      type: 'GET_INFO',
      id: "1",
      eligibility: 'NOI filed',
      jobs: {
        lienEligible: [{
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
            business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
            status: 'NOI filed',
            dateDifference: 0
          }
        },
        ],
        gracePeriod: [],
        noiEligible: [],
        inProcess: [],
        releaseEligible: []
      }
    }

    const newState = {
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
        business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
        status: 'NOI filed',
        dateDifference: 0
      }
    }

    const result = jobInfoReducer(initialState, action)

    expect(result).toEqual(newState)
  });

  it("should return the correct state if action is GET_INFO and eligibility is 'Lien Filed' ", () => {
    const initialState = {};
    const action = {
      type: 'GET_INFO',
      id: "1",
      eligibility: 'Lien Filed',
      jobs: {
        releaseEligible: [{
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
            business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
            status: 'Lien Filed',
            dateDifference: 0
          }
        },
        ],
        gracePeriod: [],
        lienEligible: [],
        inProcess: [],
        noiEligible: []
      }
    }


    const newState = {
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
        business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
        status: 'Lien Filed',
        dateDifference: 0
      }
    }

    const result = jobInfoReducer(initialState, action)

    expect(result).toEqual(newState)
  });
})
