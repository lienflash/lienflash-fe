import React, { useState } from 'react'
import JobFormStepOne from '../../components/JobFormStepOne/JobFormStepOne'
import JobFormStepTwo from '../../components/JobFormStepTwo/JobFormStepTwo'
import { postNewJob } from '../../helpers/apiCalls'
import { Redirect } from 'react-router-dom'
// import { useDispatch } from 'react-redux';


const JobForm = () => {
  const [input, setInput] = useState({})
  const [currentStep, updateStep] = useState(1)
  const [error, updateError] = useState('')
  const [submitSuccessful, updateStatus] = useState(false)
  // const dispatch = useDispatch();

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
    // invocation of post request will go here
    // redirecting to homepage should cause a re-render and fetch updated jobs??
    // or will I need to add an action to add job to store immediately?
    // or add new fetch to homepage?
    const newJob = input
    postNewJob(newJob)
    .then(() => {
      updateStatus(true)
    })
    // .catch(error => {
    //   alert('Sorry, we had an issue adding the new job. Please refresh to try again.')
    // })
    // if post request is successful:
    // updateStatus(true)
    // pop up message after new is job added?
  }

  return (
    <form className='form'>
      <h1>Add New Job</h1>
      <p>Step {currentStep} </p>
      <JobFormStepOne
        handleInputChange={handleInputChange}
        currentStep={currentStep}
      />
      { error &&
        <p className='error-msg'>{error}</p>}
      { (currentStep === 1) &&
        <button
          className='btn btn-secondary'
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
            className='btn btn-secondary'
            type='button' onClick={e => updateStep(currentStep - 1)}>
            Back
          </button>
          <input
            type='Submit'
            onClick={handleSubmit}
          />
        </div>
      }
      { submitSuccessful && <Redirect to='/'/>}
    </form>
  )
}

export default JobForm