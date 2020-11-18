import React, { useState } from 'react';
import { postLogin } from '../../helpers/apiCalls.js';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../actions/actions.js';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({})
  const [error, updateError] = useState('')

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkedInput = checkRequiredFields();
    if (checkedInput) {
      postLogin(input)
        .then(response => {
          dispatch(setUser(response.data))
          localStorage.setItem('token', response.data.attributes.token)
          history.push('/homepage')
        })
        .catch(error => {
          updateError('Sorry, it looks like either your email or password were incorrect. Please try again.')
        })
    } else {
      updateError('Please make sure you have input the correct email and password')
    }
  }

  const checkRequiredFields = () => {
    if (!input.email || !input.password) {
      return false;
    } else {
      updateError('')
      return true;
    }
  }

  return (
    <div className='container login'>
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
      <button className='btn-secondary' type='button' onClick={handleSubmit}>Submit</button>
      <br />
      <br />
      { error &&
        <article className='error-msg'>{error}</article>
      }
    </div>
  )
}

export default Login;

