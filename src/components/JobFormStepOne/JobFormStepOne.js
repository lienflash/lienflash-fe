import React from 'react'
import '../../containers/JobForm/JobForm.scss'

const JobFormStepOne = ({ handleInputChange, currentStep }) => {

  if (currentStep !== 1) {
    return null
  }

  return (
    <div className='form-group'>
      {/* Site details */}
      <h2>Job Site Details</h2>
      <p>Required fields are followed by <abbr className='required'>*</abbr>.</p>
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
        <label>Job Site Name:<br />
          <input
            type='text'
            name='siteName'
            aria-label='job-site-name'
            maxLength='50'
            style={{ width: '80%' }}
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Job Site Address: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='siteStreetAddress'
            aria-label='job-site-address'
            maxLength='100'
            onChange={handleInputChange}
          /><br />
        </label>
        <input
          type='text'
          name='siteAddressLine2'
          aria-label='job-site-address-line-2'
          placeholder='Apt/Suite'
          maxLength='100'
          onChange={handleInputChange}
        /><br />
        <label>City: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='siteCity'
            aria-label='job-site-city'
            style={{ width: '50%' }}
            maxLength='20'
            onChange={handleInputChange}
          /><br />
        </label>
        <label>State: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='siteState'
            aria-label='job-site-state'
            maxLength='3'
            style={{ width: '30%' }}
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Zip Code: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='siteZipCode'
            aria-label='job-site-zip-code'
            inputMode='decimal'
            style={{ width: '30%' }}
            maxLength='10'
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Date of Substantial Completion: <abbr className='required' aria-label='required'>*</abbr><br />
          <span className='date-help-info'>What is this?</span><br />
          <input
            type='date'
            name='jobCompletionDate'
            aria-label='job-completion-date'
            placeholder='mm/dd/yyyy'
            style={{ width: '50%' }}
            maxLength='10'
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Labor Costs Due:<br />
          <input
            type='text'
            inputMode='decimal'
            name='laborCost'
            aria-label='labor-costs-due'
            style={{ width: '30%' }}
            maxLength='10'
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
            maxLength='10'
            style={{ width: '30%' }}
            placeholder='USD'
            onChange={handleInputChange}
          /><br />
        </label>
        <label>Total Costs Due: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            inputMode='decimal'
            name='totalCostDue'
            aria-label='total-costs-due'
            maxLength='10'
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
