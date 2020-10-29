import React from 'react'
import 'balloon-css'; // tooltip package

const JobFormStepOne = ({ handleInputChange, currentStep }) => {

  if (currentStep !== 1) {
    return null
  }

  return (
    <div className='form-group'>
      {/* Site details */}
      <h2>Job Site Details</h2>
      <p>Required fields are followed by <abbr className='required'>*</abbr></p>
      <div className='jobType'>
        <label>Job Type: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='radio'
            name='jobType'
            value='Labor'
            className='radioBtns'
            aria-label='job-type'
            onChange={handleInputChange}
          /> Labor only<br />
          <input
            type='radio'
            name='jobType'
            value='Materials & Labor'
            className='btm-btn radioBtns'
            onChange={handleInputChange}
          /> Materials & Labor<br />
        </label>
        <label>Job Site Contact Name:<abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='jobSiteContactName'
            aria-label='job-site-contact-name'
            maxLength='50'
            style={{ width: '80%' }}
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Job Site Name:<br />
          <input
            type='text'
            name='jobSiteName'
            aria-label='job-site-name'
            maxLength='50'
            style={{ width: '80%' }}
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Job Site Address: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='jobSiteAddress'
            aria-label='job-site-address'
            maxLength='100'
            onChange={handleInputChange}
          /><br />
        </label>
        <input
          type='text'
          name='jobSiteAddressLine2'
          aria-label='job-site-address-line-2'
          placeholder='Apt/Suite'
          maxLength='100'
          onChange={handleInputChange}
        /><br />
        <label>City: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='jobSiteCity'
            aria-label='job-site-city'
            style={{ width: '50%' }}
            maxLength='20'
            onChange={handleInputChange}
          /><br />
        </label>
        <label>State: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='jobSiteState'
            aria-label='job-site-state'
            maxLength='20'
            style={{ width: '30%' }}
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Zip Code: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='jobSiteZipCode'
            aria-label='job-site-zip-code'
            inputMode='decimal'
            style={{ width: '30%' }}
            maxLength='10'
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Date of Substantial Completion: <abbr className='required' aria-label='required'>*</abbr><br />
          <button 
            data-balloon-length='small'
            aria-label='Job completion date'
            data-balloon-pos='up'
            className='date-help-info'>What is this?
            </button><br />
          <input
            type='date'
            name='completionDate'
            aria-label='job-completion-date'
            placeholder='mm/dd/yyyy'
            style={{ width: '50%' }}
            maxLength='10'
            onChange={handleInputChange}
          /><br />
          <label>Description of work: <abbr className='required' aria-label='required'>*</abbr> <br />
            <textarea
              type='text'
              name='jobDescription'
              aria-label='job-description'
              rows='4'
              maxLength='200'
              style={{ width: '80%' }}
              onChange={handleInputChange}
            />
            <br />
          </label>
        </label>
        <label>Labor Costs Due:<br />
          <input
            type='text'
            inputMode='decimal'
            name='laborCost'
            aria-label='labor-costs-due'
            style={{ width: '30%' }}
            maxLength='12'
            placeholder='USD'
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Material Costs Due:<br />
          <input
            type='text'
            inputMode='decimal'
            name='materialCost'
            aria-label='material-costs-due'
            maxLength='12'
            style={{ width: '30%' }}
            placeholder='USD'
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Total Costs Due: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            inputMode='decimal'
            name='totalCost'
            aria-label='total-costs-due'
            maxLength='12'
            style={{ width: '30%' }}
            placeholder='USD'
            onChange={handleInputChange}
          /><br />
        </label>
      </div >
    </div >
  )
}

export default JobFormStepOne
