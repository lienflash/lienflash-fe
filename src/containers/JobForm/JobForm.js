import React, { useState } from 'react'
import JobFormStepOne from '../../components/JobFormStepOne/JobFormStepOne'
import JobFormStepTwo from '../../components/JobFormStepTwo/JobFormStepTwo'
import './JobForm.scss'

const JobForm = () => {
  const [input, setInput] = useState({})
  const [currentStep, updateStep] = useState(1)

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newJob = input
    console.log(newJob)
  }

  return (
    <form className='form'>
      <h1>Add Job</h1>
      <p>Step {currentStep} </p>
      <JobFormStepOne
        handleInputChange={handleInputChange}
        currentStep={currentStep}
        updateStep={updateStep}
      />
      { (currentStep === 1) &&
        <button
          className='btn btn-secondary'
          type='button' onClick={e => updateStep(currentStep + 1)}>
          Next
        </button>
      }
      <JobFormStepTwo
        handleInputChange={handleInputChange}
        currentStep={currentStep}
        handleSubmit={handleSubmit}
      />
      { (currentStep !== 1) &&
        <div>
          <button
            className='btn btn-secondary'
            type='button' onClick={e => updateStep(currentStep - 1)}>
            Previous
        </button>
        </div>
      }
    </form>
  )
}

export default JobForm