import React, { useState } from 'react'
import JobFormStepOne from '../../components/JobFormStepOne/JobFormStepOne'
import JobFormStepTwo from '../../components/JobFormStepTwo/JobFormStepTwo'
import './JobForm.scss'

const JobForm = () => {
  const [input, setInput] = useState({})
  const [currentStep, updateStep] = useState(1)
  const [error, updateError] = useState('')

  const handleInputChange = (e) => {
    setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })
}

  const checkRequiredFields = (e) => {
    if (!input.jobType 
      || !input.siteStreetAddress
      || !input.siteCity 
      || !input.siteState 
      || !input.siteZipCode 
      || !input.jobCompletionDate 
      || !input.totalCostDue 
      ) {
      updateError('Please complete required fields')
    } else {
      updateError('')
      updateStep(currentStep + 1)
    }    
  }

  const handleSubmit = (e) => {
    // invocation of post request will go here
    e.preventDefault()
    const newJob = input
    console.log(newJob)
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
          type='button' onClick={e => checkRequiredFields()}>
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
    </form>
  )
}

export default JobForm