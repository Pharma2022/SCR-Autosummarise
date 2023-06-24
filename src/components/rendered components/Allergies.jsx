import React from 'react'
import { useFormContext } from '../../context/formContext'
import { nanoid } from 'nanoid'
import Title from '../Title'
const Allergies = () => {
    const {form:{hasAllergy,allergies}}=useFormContext()
  return (
    <>  <Title>Allergies:</Title>
    <p>{hasAllergy? allergies.split('\n').map(allergy=>(<li key={nanoid()}>{allergy}</li>)):"NKDA"}</p></>
  )
}

export default Allergies