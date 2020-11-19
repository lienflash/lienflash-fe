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
    if (!input.name || !input.business_name || !input.business_work_number || ! input.business_cell_number || !input.business_address || !input.business_address_line2 || !input.business_city || !input.business_state || !input.business_zip_code || !input.email || !input.password || !input.password_confirmation) {
      updateError('Please complete required fields.')
    } else {
      updateError('');
      return true;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checked = checkRequiredFields();
    if(checked) {
      await createUser(input)
        .then(data => {
          history.push('/login')
        })
        .catch(error => {
          alert('Sorry, we had an issue creating your account. Please try again later')
        })
    }
  }

  return (
    <form >
      <div className='create-user-form'>
        <label>User Name<abbr className='required' aria-label='required'>*</abbr>
          <br />
          <input
            type='text'
            name="name"
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
            name="business_name"
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
            name="business_work_number"
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
            name="business_cell_number"
            placeholder='7205557700'
            aria-label='cell-number'
            onChange={handleChange}
          />
        </label>
        <br />
        <label>Business Address: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name="business_address"
            aria-label='business-address'
            maxLength='100'
            onChange={handleChange}
          /><br />
        </label>
        <input
          type='text'
          name="business_address_line2"
          aria-label='business-address-line-2'
          placeholder='Apt/Suite'
          maxLength='100'
          onChange={handleChange}
        /><br />
        <label>City: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name="business_city"
            aria-label='business-address-city'
            style={{ width: '50%' }}
            maxLength='20'
            onChange={handleChange}
          /><br />
        </label>
        <label>State: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name="business_state"
            aria-label='business-address-state'
            maxLength='20'
            style={{ width: '30%' }}
            onChange={handleChange}
          /><br />
        </label>
        <label>Zip Code: <abbr className='required' aria-label='required'>*</abbr><br />
          <input
            type='text'
            name="business_zip_code"
            aria-label='business-address-zip-code'
            inputMode='decimal'
            style={{ width: '30%' }}
            maxLength='10'
            onChange={handleChange}
          /><br />
        </label>
      </div>
      <div className='user-signin'>
          <label>Email<abbr className='required' aria-label='required'>*</abbr>
            <br />
            <input
              type='text'
              name="email"
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
              name="password"
              placeholder='Password'
              aria-label='password'
              onChange={handleChange}
            />
          </label>
          <br />
        <label>Password Confirmation<abbr className='required' aria-label='required'>*</abbr>
          <br />
          <input
            type='password'
            name="password_confirmation"
            placeholder='Retype password here'
            aria-label='password-confirmation'
            onChange={handleChange}
          />
        </label>
        <br />
        {error &&
          <article className='error-msg'>{error}</article>
        }
        <br />
          <button className='btn-secondary' type='button' onClick={handleSubmit}>Submit</button>
          <br />
      </div>
    </form>
  )
}

export default CreateUser;