import React from 'react'
import { useFormContext } from '../../context/formContext'
import { nanoid } from 'nanoid'
import Title, { OrderedList } from '../Title'
const Medications = () => {
    const {regFormat,acuteFormat, form:{ hasAllergy,allergies,hasRegMeds,hasAcuteMeds,hasOtcMeds,otcMeds},renderedAcuteMeds,renderedRegMeds

}=useFormContext()



  return (
    <div>
      
        <Title>Allergies:</Title>
        <p>{hasAllergy? allergies.split('\n').map(allergy=>(<li key={nanoid()}>{allergy}</li>)):"NKDA"}</p>
        <Title>Regular Mediation</Title> 
      {!hasRegMeds? <p>Nil</p>: 
      regFormat==='scr'? <p>{renderedRegMeds}</p>
      : regFormat==='freetype'&& 

    <OrderedList>
      {renderedRegMeds.length?renderedRegMeds.split('\n').map(item=><li key={nanoid()}>{item}</li>):null}
    </OrderedList>

      }



        <Title>Acute Medication</Title>  
        {!hasAcuteMeds? <p>Nil</p>: 
      acuteFormat==='scr'? <p>{renderedAcuteMeds}</p>
      : acuteFormat==='freetype'&& 

    <OrderedList>
      {renderedAcuteMeds.length?renderedAcuteMeds.split('\n').map(item=><li key={nanoid()}>{item}</li>):null}
    </OrderedList>

      }
        <Title>OTC Medication</Title>    
        <p>{hasOtcMeds? otcMeds.split('\n').length?          otcMeds.split('\n').map(item=><li key={nanoid()}>{item}</li>) :otcMeds:'Nil'}</p>
  
    </div>
  )
}

export default Medications