import React from 'react'
import { useFormContext } from '../../context/formContext'

const Medications = () => {
    const {form:{ hasAllergy,allergies,hasRegMeds,hasAcuteMeds,hasOtcMeds,otcMeds},renderedAcuteMeds,renderedRegMeds

}=useFormContext()

  return (
    <div>
        <p className='bold underline'>Allergies:</p>
        <p>Allergies: {hasAllergy? allergies:"NKDA"}</p>
        <p className='bold underline'>Regular Mediation</p> 
        <p>{hasRegMeds?         renderedRegMeds:'Nil' }</p>
        <p className='bold underline'>Acute Medication</p>  
        <p>{hasAcuteMeds?     renderedAcuteMeds:'Nil' }</p>
        <p className='bold underline'>OTC Medication</p>    
        <p>{hasOtcMeds?         otcMeds:'Nil'}</p>
  
    </div>
  )
}

export default Medications