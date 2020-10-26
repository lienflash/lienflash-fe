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
})
