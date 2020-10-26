import React from 'react'
import '../../containers/JobForm/JobForm.scss'



const JobFormStepTwo = ({ handleInputChange, currentStep }) => {

  if (currentStep !== 2) {
    return null
  }

  return (
    <div className='form-group'>
      {/* Contractor details */}
      <h2>Client / Company Details</h2>
      <label>Client / Company Name:<br />
        <input
          type='text'
          name='companyName'
          aria-label='client-company-name'
          maxLength='50'
          style={{ width: '80%' }}
          onChange={handleInputChange}
          required
        /><br />
      </label>
      <label>Client / Contact Name:<br />
        <input
          type='text'
          name='contactName'
          aria-label='client-contact-name'
          maxLength='50'
          style={{ width: '80%' }}
          onChange={handleInputChange}
          required
        /><br />
      </label>
      <label>Business Address:<br />
        <input
          type='text'
          name='street'
          aria-label='client-address'
          autoComplete='street-address'
          maxLength='100'
          onChange={handleInputChange}
          required
        /><br />
        <input
          type='text'
          name='addressLine2'
          aria-label='client-address-line-2'
          maxLength='100'
          placeholder='Apt/Suite'
          onChange={handleInputChange}
        /><br />
      </label>
      <label>City:<br />
        <input
          type='text'
          name='siteCity'
          aria-label='client-address-city'
          maxLength='20'
          style={{ width: '50%' }}
          onChange={handleInputChange}
          required
        /><br />
      </label>
      <label>State:<br />
        <input
          type='text'
          name='siteState'
          aria-label='client-address-state'
          style={{ width: '30%' }}
          maxLength='3'
          onChange={handleInputChange}
          required
        /><br />
      </label>
      <label>Zip Code: <br />
        <input
          type='text'
          name='siteZipCode'
          aria-label='client-address-zipcode'
          inputMode='decimal'
          style={{ width: '30%' }}
          maxLength='10'
          onChange={handleInputChange}
          required
        /><br />
      </label>
      <label>Client Email:<br />
        <input
          type='email'
          name='email'
          aria-label='client-email'
          maxLength='50'
          style={{ width: '75%' }}
          onChange={handleInputChange}
          required
        /><br />
      </label>
      <label>Client Phone number: <br />
        <input
          type='tel'
          name='phone'
          aria-label='client-phone'
          inputMode='decimal'
          maxLength='10'
          style={{ width: '50%' }}
          onChange={handleInputChange}
          required
        /><br />
      </label>
    </div>
  )
}

export default JobFormStepTwo