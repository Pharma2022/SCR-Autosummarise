import React from 'react'
import { useFormContext } from '../../context/formContext'

const Medications = () => {
    const {form:{ hasAllergy,allergies,hasRegMeds,regMeds,hasAcuteMeds,acuteMeds,hasOtcMeds,otcMeds,}}=useFormContext()
  return (
    <div className='container flex-col'>
        <p>Allergies: {hasAllergy? allergies:"NKDA"}</p>
        <p>Regular Mediation {hasRegMeds?         regMeds:'Nil' }</p>
        <p>Acute Medication  {hasAcuteMeds?     acuteMeds:'Nil' }</p>
        <p>OTC Medication    {hasOtcMeds?         otcMeds:'Nil'}</p>
  
    </div>
  )
}

export default Medications