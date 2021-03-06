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
      eligibility: 'Good Standing',
      jobs: {
        gracePeriod: [{
          id: "1",
          type: "job",
          attributes: {
            job_type: 'Materials & Labor',
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
            status: 'Good Standing',
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
        job_type: 'Materials & Labor',
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
        status: 'Good Standing',
        dateDifference: 0
      }
    }

    const result = jobInfoReducer(initialState, action)

    expect(result).toEqual(newState)
  });
  it("should return the correct state if action is GET_INFO, eligibility is 'good standing', and dateDifference is greater than 10 ", () => {
    const initialState = {};

    const laterDate = new Date();
    laterDate.setDate(laterDate.getDate() - 11);

    const action = {
      type: 'GET_INFO',
      id: "1",
      dateDifference: 11,
      eligibility: 'Good Standing',
      jobs: {
        gracePeriod: [],
        noiEligible: [{
          id: "1",
          type: "job",
          attributes: {
            job_type: 'Materials & Labor',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
            job_site_state: 'CO', job_site_zip_code: '80201', completion_date: laterDate,
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
            dateDifference: 11
          }
        },],
        lienEligible: [],
        inProcess: [],
        releaseEligible: []
      }
    }

    const newState = {
      id: "1",
      type: "job",
      attributes: {
        job_type: 'Materials & Labor',
        job_site_name: 'Home',
        job_site_contact_name: 'Taryn',
        job_site_address: '200 Washington St.', job_site_address_line_2: '', job_site_city: 'Denver',
        job_site_state: 'CO', job_site_zip_code: '80201', completion_date: laterDate,
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
        dateDifference: 11
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
            job_type: 'Materials & Labor',
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
      job_type: 'Materials & Labor',
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
      status: 'NOI Eligible',
      dateDifference: 0
    }
  }

    const result = jobInfoReducer(initialState, action)

    expect(result).toEqual(newState)
  });
  it("should return the correct state if action is GET_INFO and eligibility is 'NOI Requested' ", () => {
    const initialState = {};
    const action = {
      type: 'GET_INFO',
      id: "1",
      eligibility: 'NOI Requested',
      jobs: {
        noiEligible: [{
          id: "1",
          type: "job",
          attributes: {
            job_type: 'Materials & Labor',
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
            status: 'NOI Requested',
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
      job_type: 'Materials & Labor',
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
      status: 'NOI Requested',
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
      eligibility: 'NOI Filed',
      jobs: {
        lienEligible: [{
          id: "1",
          type: "job",
          attributes: {
            job_type: 'Materials & Labor',
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
            status: 'NOI Filed',
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
        job_type: 'Materials & Labor',
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
        status: 'NOI Filed',
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
            job_type: 'Materials & Labor',
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
        job_type: 'Materials & Labor',
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
        status: 'Lien Filed',
        dateDifference: 0
      }
    }

    const result = jobInfoReducer(initialState, action)

    expect(result).toEqual(newState)
  });
})
