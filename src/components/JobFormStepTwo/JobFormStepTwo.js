import React from 'react'

const JobFormStepTwo = ({ handleInputChange, handleSubmit }) => {

  return (
    <div className="form-group">
      {/* Site details */}
      <h2>Job Details</h2>
      <div className='jobType'>
        Job Type:
            <br />
        <label>
          <input
            type='radio'
            name='jobType'
            value='Labor'
            className='radioBtns'
            onChange={handleInputChange}
            required
          />
            Labor only
            <br />
          <input
            type='radio'
            name='jobType'
            value='Materials & Labor'
            className='radioBtns'
            onChange={handleInputChange}
          />
            Materials & Labor
          </label>
        < label > Site Name:<br />
          <input
            type='text'
            name='siteName'
            maxLength="50"
            style={{ width: '80%' }}
            onChange={handleInputChange}
            required
          /><br />
        </label >
        <label>Contact Name:<br />
          <input
            type='text'
            name='siteContactName'
            maxLength="50"
            style={{ width: '80%' }}
            onChange={handleInputChange}
            required
          /><br />
        </label>
        <label>Site Address:
          <input
            type='text'
            name='siteStreetAddress'
            maxLength="100"
            onChange={handleInputChange}
            required
          /><br />
        </label>
        <input
          type='text'
          name='siteAddressLine2'
          placeholder='Apt/Suite'
          maxLength="100"
          onChange={handleInputChange}
        /><br />
        <label>City:<br />
          <input
            type='text'
            name='siteCity'
            // className='medium'
            style={{ width: '50%' }}
            maxLength="20"
            onChange={handleInputChange}
            required
          /><br />
        </label>
        <label>State:<br />
          <input
            type='text'
            name='siteState'
            // className='medium'
            maxLength="3"
            style={{ width: '30%' }}
            onChange={handleInputChange}
            required
          /><br />
        </label>
        <label>Zip Code:<br />
          <input
            type='text'
            name='siteZipCode'
            inputMode="decimal"
            // className='medium'
            style={{ width: '30%' }}
            maxLength="10"
            onChange={handleInputChange}
            required
          /><br />
        </label>
        <label>Date of Substantial Completion:<br />
          <span className='date-help-info'>What is this?</span><br />
          <input
            type='date'
            name='dateCompletion'
            placeholder='mm/dd/yyyy'
            // className='medium'
            style={{ width: '50%' }}
            maxLength="10"
            onChange={handleInputChange}
            required
          /><br />
        </label>
        <label>Labor Costs Outstanding:<br />
          <input
            type="text"
            inputMode="decimal"
            name='laborCost'
            // className='short'
            style={{ width: '30%' }}
            maxLength="10"
            placeholder='USD'
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Material Costs Outstanding:<br />
          <input
            type="text"
            inputMode="decimal"
            name='materialCost'
            // className='short'
            maxLength="10"
            style={{ width: '30%' }}
            placeholder='USD'
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Total Costs Outstanding:<br />
          <input
            type="text"
            inputMode="decimal"
            name='totalCost'
            maxLength="10"
            style={{ width: '30%' }}
            placeholder='USD'
            onChange={handleInputChange}
            required
          /><br />
        </label>
        <input
          type='Submit'
          onClick={handleSubmit}
        />
      </div >
    </div >
  )
}

export default JobFormStepTwo