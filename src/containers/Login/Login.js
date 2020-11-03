import React, { useState } from 'react';
//import './Login.scss';
import { postLogin } from '../../helpers/apiCalls.js';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../actions/actions.js';
import PropTypes from 'prop-types';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({})
  const [error, updateError] = useState('')
  const user = useSelector(state => state.user)

  const handleChange = (e) => {
    setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkedInput = checkRequiredFields();
    if(checkedInput) {
      postLogin(input)
      .then(response => {
        dispatch(setUser(response.data))
        history.push('/homepage')
      })
      .catch(error => {
        alert('Sorry, it looks like either your email or password were incorrect. Please try again.')
      })
    }
  }

  const checkRequiredFields = () => {
    if (!input.email || !input.password) {
      updateError('Please complete required fields')
      return false;
    } else {
      updateError('')
      return true;
    }
  }

  return(
    <div>
      <label>Email<abbr className='required' aria-label='required'>*</abbr>
        <input
          type='text'
          name='email'
          aria-label='email'
          onChange={handleChange}
        />
      </label>
      <label>Password<abbr className='required' aria-label='required'>*</abbr>
        <input
          type='password'
          name='password'
          aria-label='password'
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>Submit Login</button>
      { error &&
        <article className='error-msg'>{error}</article>
      }
    </div>
  )
}

export default Login;
