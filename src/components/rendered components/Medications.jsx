import React from 'react'
import { useFormContext } from '../../context/formContext'
import { nanoid } from 'nanoid'

const Medications = () => {
    const {regFormat,acuteFormat, form:{ hasAllergy,allergies,hasRegMeds,hasAcuteMeds,hasOtcMeds,otcMeds},renderedAcuteMeds,renderedRegMeds

}=useFormContext()



  return (
    <div>
        <p className='bold underline'>Allergies:</p>
        <p>Allergies: {hasAllergy? allergies:"NKDA"}</p>
        <p className='bold underline'>Regular Mediation</p> 
      {!hasRegMeds? <p>Nil</p>: 
      regFormat==='scr'? <p>{renderedRegMeds}</p>
      : regFormat==='freetype'&& 

    <ol>
      {renderedRegMeds.length?renderedRegMeds.split('\n').map(item=><li key={nanoid()}>{item}</li>):null}
    </ol>

      }



        <p className='bold underline'>Acute Medication</p>  
        {!hasAcuteMeds? <p>Nil</p>: 
      acuteFormat==='scr'? <p>{renderedAcuteMeds}</p>
      : acuteFormat==='freetype'&& 

    <ol>
      {renderedAcuteMeds.length?renderedAcuteMeds.split('\n').map(item=><li key={nanoid()}>{item}</li>):null}
    </ol>

      }
        <p className='bold underline'>OTC Medication</p>    
        <p>{hasOtcMeds? otcMeds.length?          otcMeds.split('\n').map(item=><li key={nanoid()}>{item}</li>) :null:'Nil'}</p>
  
    </div>
  )
}

export default Medications