import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function AdminJobDetails(props) {
  const { jobDetails, changeView, handleStatusChange } = props
 
  return (
    <div className='container'>
      <button className='back-btn' onClick={() => changeView(true)}>
        Back
      </button>
      <h2>Job Details</h2>
      <h3 className='bold'>Status: </h3><p>{jobDetails.status}</p>
      <br /><br />
      <h3 className='bold'>Job Site Name: </h3><p> {jobDetails.job_site_name ? jobDetails.job_site_name : "n/a"}</p>
      <br />
      <h3 className='bold'>Job Site Contact Name: </h3>
      <p>{jobDetails.job_site_contact_name}</p><br />

      {jobDetails.job_site_address_line_2 !== null &&
        <>
          <h3 className='bold'> Job Site Address: </h3>
          <br />
          <p>
          {jobDetails.job_site_address},{jobDetails.job_site_address_line_2}<br />{jobDetails.job_site_city}, {jobDetails.job_site_state}, {jobDetails.job_site_zip_code}
          </p>
        </>
      }
      {jobDetails.job_site_address_line_2 === null &&
        <>
          <h3 className='bold'> Job Site Address: </h3><br />
          <p>
          {jobDetails.job_site_address},<br />{jobDetails.job_site_city}, {jobDetails.job_site_state}, {jobDetails.job_site_zip_code}
          </p>
        </>
      }
      <br />

      <h3 className='bold'>Company Name: </h3>
      <p>{jobDetails.client_company_name ? jobDetails.client_company_name : "n/a"}</p>
      <br />
      {jobDetails.business_address !== null &&
        <>
          <h3 className='bold'> Business Address: </h3><br />
          <p>
          {jobDetails.business_address}<br />{jobDetails.business_address_line_2}<br />{jobDetails.business_city}, {jobDetails.business_state}, {jobDetails.business_zip_code}
          </p>
        </>
      }

      <h3 className='bold'>Job Type: </h3>
      <p>{jobDetails.job_type}</p><br />
      <h3 className='bold'>Job Description: </h3>
      <p>{jobDetails.description_of_work}</p><br />
      <h3 className='bold'>Additional Info: </h3>
      <p>{jobDetails.additional_info ? jobDetails.additional_info : "n/a"}</p><br />
      <h3 className='bold'>Date of Substantial Completion: </h3>
      <p>{jobDetails.completionDate}</p><br />
      <h3 className='bold'>Labor Cost: </h3>
      <p>{jobDetails.labor_cost ? `$${jobDetails.labor_cost}` : "n/a"}</p><br />
      <h3 className='bold'>Materials Cost: </h3>
      <p>{jobDetails.material_cost ? `$${jobDetails.material_cost}` : "n/a"}</p><br />
      <h3 className='bold'>Total Cost: </h3>
      <p>${jobDetails.total_cost}</p>
   
      <div>
        {/* REMOVE JOB BUTTON / STATUS CHANGE */}
        {/* Render for all jobs: If cient wants to remove job (has been paid) */}
        <Popup trigger={<button className='btn-submit'>Remove Job</button>} position="top left">
          {close => (
            <section className="popup-msg">
              Are you sure you want to remove this job?
              <button className="close" onClick={close}>Close
              &times;
              </button>
              <button className="confirm" onClick={() => handleStatusChange(5)}>Confirm
              </button>
            </section>
          )}
        </Popup>

        {/* NOI FILED BUTTON / STATUS CHANGE */}
        {/* if status is NOI requested render button */}
        { (jobDetails.status ===  'NOI Requested') && 
          <Popup trigger={<button className='btn-submit'>NOI Filed</button>} position="top left">
            {close => (
              <section className="popup-msg">
                Please confirm that the NOI has been filed on behalf of {jobDetails.users_name}. 
                <br />
                <button className="close" onClick={close}>Close
                &times;
                </button>
                <button className="confirm" onClick={() => handleStatusChange(0)}>Confirm
                </button>
              </section>
            )}
          </Popup>
        }
        
        {/* LIEN FILED BUTTON / STATUS CHANGE */}
        {/* if status is Lien Requested render button */}
        { (jobDetails.status === 'Lien Requested') && 
          <Popup trigger={<button className='btn-submit'>Lien Filed</button>} position="top left">
            {close => (
              <section className="popup-msg">
                Please confirm that the Lien has been filed on behalf of {jobDetails.users_name}.
                <br />
                <button className="close" onClick={close}>Close
                &times;
                </button>
                <button className="confirm" onClick={() => handleStatusChange(0)}>Confirm
                </button>
              </section>
            )}
          </Popup>
        }
      </div>
    </div>
  )
}

export default AdminJobDetails