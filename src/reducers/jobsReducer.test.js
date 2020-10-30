import jobsReducer from './jobsReducer'
// lines 14 and 22
// how to take away 12 days from current date?

describe('jobsReducer - labor', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = jobsReducer(undefined, {});

    expect(result).toEqual(expected)
  });
  it('should return the correct state if action is ALL_JOBS', () => {
    const currentDate = new Date();

    const laterDate = new Date();
    const numberOfDaysToAdd = 11;
    laterDate.setDate(laterDate.getDate() - numberOfDaysToAdd);

    const initialState = {};
    const action = {
      type: 'ALL_JOBS',
      allJobs: [
        {
            id: "1",
            type: "job",
            attributes: {
              job_type: 'Labor',
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
              status: 'good standing',
            }
        }, {
            id: "2",
            type: "job",
            attributes: {
              job_type: 'Labor',
              job_site_name: 'Home',
              job_site_contact_name: 'Taryn',
              job_site_address: '200 Washington St.',
              job_site_address_line_2: '', job_site_city: 'Denver',
              job_site_state: 'CO', job_site_zip_code: '80201', completion_date: laterDate,
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
            }
        }, {
            id: "3",
            type: "job",
            attributes: {
              job_type: 'Labor',
              job_site_name: 'Home',
              job_site_contact_name: 'Taryn',
              job_site_address: '200 Washington St.',
              job_site_address_line_2: '', job_site_city: 'Denver',
              job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "",
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
            }
        },  {
            id: "4",
            type: "job",
            attributes: {
              job_type: 'Labor',
              job_site_name: 'Home',
              job_site_contact_name: 'Taryn',
              job_site_address: '200 Washington St.',
              job_site_address_line_2: '', job_site_city: 'Denver',
              job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "",
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
            }
        }
      ]
    }


    const newState = {
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
            business_state: 'WA', business_zip_code: '99900', additional_info: 'Amazon sucks',
            status: 'good standing',
            dateDifference: 0
          }
      }],
      noiEligible: [{
          id: "2",
          type: "job",
          attributes: {
            job_type: 'Labor',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.',
            job_site_address_line_2: '', job_site_city: 'Denver',
            job_site_state: 'CO', job_site_zip_code: '80201', completion_date: laterDate,
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
            dateDifference: 11
          }
      }],
      lienEligible: [{
          id: "3",
          type: "job",
          attributes: {
            job_type: 'Labor',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.',
            job_site_address_line_2: '', job_site_city: 'Denver',
            job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "",
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
            dateDifference: NaN
          }
      }],
      releaseEligible: [{
          id: "4",
          type: "job",
          attributes: {
            job_type: 'Labor',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.',
            job_site_address_line_2: '', job_site_city: 'Denver',
            job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "",
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
            dateDifference: NaN
          }
      }]
    };

    const result = jobsReducer(initialState, action)

    expect(result).toEqual(newState)
  });
})

describe('jobsReducer - labor & materials', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = jobsReducer(undefined, {});

    expect(result).toEqual(expected)
  });
  it('should return the correct state if action is ALL_JOBS', () => {
    const currentDate = new Date();

    const laterDate = new Date();
    const numberOfDaysToAdd = 11;
    laterDate.setDate(laterDate.getDate() - numberOfDaysToAdd);

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
              status: 'good standing',
            }
        }, {
            id: "2",
            type: "job",
            attributes: {
              job_type: 'Materials & Labor',
              job_site_name: 'Home',
              job_site_contact_name: 'Taryn',
              job_site_address: '200 Washington St.',
              job_site_address_line_2: '', job_site_city: 'Denver',
              job_site_state: 'CO', job_site_zip_code: '80201', completion_date: laterDate,
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
            }
        }, {
            id: "3",
            type: "job",
            attributes: {
              job_type: 'Materials & Labor',
              job_site_name: 'Home',
              job_site_contact_name: 'Taryn',
              job_site_address: '200 Washington St.',
              job_site_address_line_2: '', job_site_city: 'Denver',
              job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "",
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
            }
        },  {
            id: "4",
            type: "job",
            attributes: {
              job_type: 'Materials & Labor',
              job_site_name: 'Home',
              job_site_contact_name: 'Taryn',
              job_site_address: '200 Washington St.',
              job_site_address_line_2: '', job_site_city: 'Denver',
              job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "",
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
      noiEligible: [{
          id: "2",
          type: "job",
          attributes: {
            job_type: 'Materials & Labor',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.',
            job_site_address_line_2: '', job_site_city: 'Denver',
            job_site_state: 'CO', job_site_zip_code: '80201', completion_date: laterDate,
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
            dateDifference: 11
          }
      }],
      lienEligible: [{
          id: "3",
          type: "job",
          attributes: {
            job_type: 'Materials & Labor',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.',
            job_site_address_line_2: '', job_site_city: 'Denver',
            job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "",
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
            dateDifference: NaN
          }
      }],
      releaseEligible: [{
          id: "4",
          type: "job",
          attributes: {
            job_type: 'Materials & Labor',
            job_site_name: 'Home',
            job_site_contact_name: 'Taryn',
            job_site_address: '200 Washington St.',
            job_site_address_line_2: '', job_site_city: 'Denver',
            job_site_state: 'CO', job_site_zip_code: '80201', completion_date: "",
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
            dateDifference: NaN
          }
      }]
    };

    const result = jobsReducer(initialState, action)

    expect(result).toEqual(newState)
  });
})
