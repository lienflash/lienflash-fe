import React, { useState } from 'react'
import JobFormStepOne from '../../components/JobFormStepOne.js/JobFormStepOne'
import JobFormStepTwo from '../../components/JobFormStepTwo.js/JobFormStepTwo'
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
      <JobFormStepTwo
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </form>
  )
}

export default JobForm