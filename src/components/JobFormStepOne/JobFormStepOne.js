import React from 'react'

const JobFormStepOne = ({ handleInputChange, currentStep }) => {
  
  if (currentStep !== 1) {
    console.log(currentStep)
    return null
  }

  return (
    <div className="form-group">
      {/* Contractor details */}
      <h2>Company Details</h2>
      <label>Company Name:<br />
        <input
          type='text'
          name='companyName'
          maxLength="50"
          style={{ width: '80%' }}
          onChange={handleInputChange}
          required
        /><br />
      </label>
      <label>Contact Name:<br />
        <input
          type='text'
          name='contactName'
          maxLength="50"
          style={{ width: '80%' }}
          onChange={handleInputChange}
          required
        /><br />
      </label>
      <label>Business Address:
          <input
          type='text'
          name='street'
          autoComplete="street-address"
          maxLength="100"
          onChange={handleInputChange}
          required
        /><br />
        <input
          type='text'
          name='addressLine2'
          maxLength="100"
          placeholder='Apt/Suite'
          onChange={handleInputChange}
        /><br />
      </label>
      <label>City:<br />
        <input
          type='text'
          name='siteCity'
          // className='medium'
          maxLength="20"
          style={{ width: '50%' }}
          onChange={handleInputChange}
          required
        /><br />
      </label>
      <label>State:<br />
        <input
          type='text'
          name='siteState'
          // className='medium'
          style={{ width: '30%' }}
          maxLength="3"
          onChange={handleInputChange}
          required
        /><br />
      </label>
      <label>Zip Code: <br />
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
      <label>Email:<br />
        <input
          type='email'
          name='email'
          maxLength="50"
          style={{ width: '75%' }}
          onChange={handleInputChange}
          required
        /><br />
      </label>
      <label>Phone: <br />
        <input
          type='tel'
          name='phone'
          inputMode="decimal"
          maxLength="10"
          style={{ width: '50%' }}
          onChange={handleInputChange}
          required
        /><br />
      </label>
    </div>
  )
}

export default JobFormStepOne