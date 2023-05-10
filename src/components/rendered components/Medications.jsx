import React from 'react'
import { useFormContext } from '../../context/formContext'
import { nanoid } from 'nanoid'

const Medications = () => {
    const {form:{ hasAllergy,allergies,hasRegMeds,hasAcuteMeds,hasOtcMeds,otcMeds},renderedAcuteMeds,renderedRegMeds

}=useFormContext()

console.log (renderedRegMeds.split('\n'))

  return (
    <div>
        <p className='bold underline'>Allergies:</p>
        <p>Allergies: {hasAllergy? allergies:"NKDA"}</p>
        <p className='bold underline'>Regular Mediation</p> 
        { hasRegMeds? 
        <ol>
          {renderedRegMeds.split('\n').map(med=>(<li key={nanoid()}>{med} </li>))}
        </ol>
        :     <p>Nil</p>}
        <p className='bold underline'>Acute Medication</p>  
        <p>{hasAcuteMeds?     renderedAcuteMeds:'Nil' }</p>
        <p className='bold underline'>OTC Medication</p>    
        <p>{hasOtcMeds?         otcMeds:'Nil'}</p>
  
    </div>
  )
}

export default Medications