import React, { useState } from 'react';
import { createUser } from '../../helpers/apiCalls.js';
import { useHistory } from 'react-router-dom';

function CreateUser() {
  const [input, setInput] = useState({});
  const [error, updateError] = useState('');
  const history = useHistory()

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const checkRequiredFields = () => {
    if (!input.userName || !input.companyName || !input.workNumber || ! input.cellNumber || !input.businessAddress || !input.businessAddressLine2 || !input.businessCity || !input.businessState || !input.businessZipCode || !input.email || !input.password) {
      updateError('Please complete required fields.')
    } else {
      updateError('');
      return true;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const checked = checkRequiredFields();
    if(checked) {
      console.log(input)
      createUser(input)
        .then(() => {
          history.pushState('/login')
        })
        .catch(error => {
          alert('Sorry, we had an issue creating your account. Please try again later')
        })
    }
  }

  return (
    <>
      <div className='create-user-form'>
        <label>User Name<abbr className='required' aria-label='required'>*</abbr>
          <br />
          <input
            type='text'
            name='userName'
            placeholder='Joe Smith'
            aria-label='user-name'
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Company Name<abbr className='required' aria-label='required'>*</abbr>
          <br />
          <input
            type='text'
            name='companyName'
            placeholder="Joe's Business"
            aria-label='company-name'
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Work Number<abbr className='required' aria-label='required'>*</abbr>
          <br />
          <input
            type='number'
            name='workNumber'
            placeholder='3035557700'
            aria-label='work-number'
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Cell Number<abbr className='required' aria-label='required'>*</abbr>
          <br />
          <input
            type='number'
            name='cellNumber'
            placeholder='7205557700'
            aria-label='cell-number'
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Business Address: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='businessAddress'
            aria-label='business-address'
            maxLength='100'
            onChange={handleChange}
          /><br />
        </label>
        <input
          type='text'
          name='businessAddressLine2'
          aria-label='business-address-line-2'
          placeholder='Apt/Suite'
          maxLength='100'
          onChange={handleChange}
        /><br />
        <label>City: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='businessCity'
            aria-label='business-address-city'
            style={{ width: '50%' }}
            maxLength='20'
            onChange={handleChange}
          /><br />
        </label>
        <label>State: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='businessState'
            aria-label='business-address-state'
            maxLength='20'
            style={{ width: '30%' }}
            onChange={handleChange}
          /><br />
        </label>
        <label>Zip Code: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name='businessZipCode'
            aria-label='business-address-zip-code'
            inputMode='decimal'
            style={{ width: '30%' }}
            maxLength='10'
            onChange={handleChange}
          /><br />
        </label>
        <br />
        {error &&
          <article className='error-msg'>{error}</article>
        }
      </div>
      <div className='user-signin'>
          <label>Email<abbr className='required' aria-label='required'>*</abbr>
            <br />
            <input
              type='text'
              name='email'
              placeholder='joe@gmail.com'
              aria-label='email'
              onChange={handleChange}
            />
          </label>
          <br />
          <label>Password<abbr className='required' aria-label='required'>*</abbr>
            <br />
            <input
              type='password'
              name='password'
              placeholder='Password'
              aria-label='password'
              onChange={handleChange}
            />
          </label>
          <br />
          <button className='btn-secondary' type='button' onClick={handleSubmit}>Submit</button>
          <br />
      </div>
    </>
  )
}

export default CreateUser;