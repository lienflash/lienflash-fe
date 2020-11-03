import React from 'react';
import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
// import { setJobs, getJobInfo, setErrorMsg, resetErrorMsg } from '../../actions/actions'

const Profile = () => {
  const user1 = {
    attributes: {
      name: 'Timmy',
      business_name: "Timmy's plumbling",
      email: "email1234@gmail.com",
      business_work_number: "555-123-4567",
      business_cell_number: "555-123-4567",
      business_address: "123 Main St.",
      business_address_line2: "apt 23",
      business_city: "Denver",
      business_state: 'CO',
      business_zip_code: "80218"
    }
  }
  // mock user for setup:
const user = user1.attributes
  // const user = useSelector(state => state.user.attributes);
const history = useHistory();

return (
  <div className='container'>
    <button className='back-btn' onClick={() => { history.goBack() }}>
      Back
    </button>
    <h2>Profile</h2>
      <h3 className='bold'>Name: </h3><p>{user.name}</p>
      <br />
      <h3 className='bold'>Company Name: </h3><p>{user.business_name}</p>
      <br />
      <h3 className='bold'>Email: </h3><p>{user.email}</p>
      <br />
      <h3 className='bold'>Work number: </h3><p>{user.business_work_number}</p>
      <br />
      <h3 className='bold'>Cell number: </h3> <p>{user.business_cell_number}</p>
      <br />
      <h3 className='bold'> Business Address: </h3><br />
      { user.business_address_line2 !== null &&
        <>
          <p>
          {user.business_address}, {user.business_address_line2}<br />{user.business_city}, {user.business_state}, {user.business_zip_code }
          </p>
        </>
      }
      { user.business_address_line2 === null &&
        <>
          <p>
          {user.business_address}, <br />{user.business_city}, {user.business_state}, {user.business_zip_code }
          </p>
        </>
      }
  </div>
  
)


}

export default Profile;