import React from 'react'
import { useFormContext } from '../../context/formContext'

const Medications = () => {
    const {form:{ hasAllergy,allergies,hasRegMeds,hasAcuteMeds,hasOtcMeds,otcMeds},renderedAcuteMeds,renderedRegMeds

}=useFormContext()

  return (
    <div className='container flex-col'>
        <p>Allergies: {hasAllergy? allergies:"NKDA"}</p>
        <p>Regular Mediation {hasRegMeds?         renderedRegMeds:'Nil' }</p>
        <p>Acute Medication  {hasAcuteMeds?     renderedAcuteMeds:'Nil' }</p>
        <p>OTC Medication    {hasOtcMeds?         otcMeds:'Nil'}</p>
  
    </div>
  )
}

export default Medications