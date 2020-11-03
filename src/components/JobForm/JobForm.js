import React, { useState } from 'react'
import JobFormStepOne from '../JobFormStepOne/JobFormStepOne'
import JobFormStepTwo from '../JobFormStepTwo/JobFormStepTwo'
import { useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postNewJob } from '../../helpers/apiCalls'
import { Redirect } from 'react-router-dom'

const JobForm = ({ updateJobAddedStatus }) => {
  const [input, setInput] = useState({})
  const [currentStep, updateStep] = useState(1)
  const [error, updateError] = useState('')
  const [submitSuccessful, updateStatus] = useState(false);
  const user = useSelector(state => state.user)
  const history = useHistory();

  const handleInputChange = (e) => {
    setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })
}

  const checkRequiredFields = () => {
    if (!input.jobType
      || !input.jobSiteContactName
      || !input.jobSiteAddress
      || !input.jobSiteCity
      || !input.jobSiteState
      || !input.jobSiteZipCode
      || !input.completionDate
      || !input.jobDescription
      || !input.totalCost
      ) {
      updateError('Please complete required fields')
    } else {
      updateError('')
      updateStep(currentStep + 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newJob = input
    postNewJob(newJob, user.id)
    .then(() => {
      updateJobAddedStatus(true)
      updateStatus(true)
      history.push('/homepage')
    })
    .catch(error => {
      console.log('ERROR')
      alert('Sorry, we had an issue adding the new job. Please refresh to try again.')
    })
    // pop up message after new is job added?
  }

  return (
    <form className='form'>
      <h1>Add New Job</h1>
      <p className='form-progress'>Step {currentStep} </p>
      <JobFormStepOne
        handleInputChange={handleInputChange}
        currentStep={currentStep}
      />
      { error &&
        <article className='error-msg'>{error}</article>}
      { (currentStep === 1) &&
        <button
          className='btn'
          type='button' onClick={checkRequiredFields}>
          Next
        </button>
      }
      <JobFormStepTwo
        handleInputChange={handleInputChange}
        currentStep={currentStep}
      />
      { (currentStep !== 1) &&
        <div>
          <button
            className='btn'
            type='button' onClick={e => updateStep(currentStep - 1)}>
            Back
          </button>
          <input
            type='Submit'
            aria-label='submit form'
            onClick={handleSubmit}
          />
        </div>
      }
      { submitSuccessful && <Redirect to='/'/>}
    </form>
  )
}

export default JobForm
