import React from 'react'


const JobFormStepTwo = ({ handleInputChange, currentStep }) => {

  if (currentStep !== 2) {
    return null
  }

  return (
    <div className='form-group'>
      {/* Contractor details */}
      <h2>Client Details</h2>
      <label>Client / Company Name:<br />
        <input
          type='text'
          name='clientCompanyName'
          aria-label='client-company-name'
          maxLength='50'
          style={{ width: '80%' }}
          onChange={handleInputChange}
        /><br />
      </label>
      <label>Business Address:<br />
        <input
          type='text'
          name='businessAddress'
          aria-label='client-business-address'
          autoComplete='street-address'
          maxLength='100'
          onChange={handleInputChange}
        /><br />
        <input
          type='text'
          name='businessAddressLine2'
          aria-label='business-address-line-2'
          maxLength='100'
          placeholder='Apt/Suite'
          onChange={handleInputChange}
        /><br />
      </label>
      <label>City:<br />
        <input
          type='text'
          name='businessCity'
          aria-label='business-address-city'
          maxLength='20'
          style={{ width: '50%' }}
          onChange={handleInputChange}
        /><br />
      </label>
      <label>State:<br />
        <input
          type='text'
          name='businessState'
          aria-label='business-address-state'
          style={{ width: '30%' }}
          maxLength='3'
          onChange={handleInputChange}
        /><br />
      </label>
      <label>Zip Code: <br />
        <input
          type='text'
          name='businessZipCode'
          aria-label='business-address-zipcode'
          inputMode='decimal'
          style={{ width: '30%' }}
          maxLength='10'
          onChange={handleInputChange}
        /><br />
      </label>
      <label>Additional information: <br />
        <textarea 
          type='text'
          name='additionalInfo'
          aria-label='additional-information'
          rows='4'
          maxLength='150'
          style={{ width: '80%' }}
          onChange={handleInputChange}
        />
        <br />
      </label>
    </div>
  )
}

export default JobFormStepTwo