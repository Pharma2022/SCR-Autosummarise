import React from 'react'
import { useFormContext } from '../../context/formContext'
import { nanoid } from 'nanoid'
import Title, { OrderedList } from '../Title'
const Medications = () => {
    const {regFormat,acuteFormat, form:{ hasAllergy,allergies,hasRegMeds,hasAcuteMeds,hasOtcMeds,otcMeds},renderedAcuteMeds,renderedRegMeds

}=useFormContext()

const sortAndSplit =(arr)=>    arr.length? arr.length===1? <p>{arr[0]}</p> :arr.split('\n').sort((a, b) => a.localeCompare(b)).map(item=><li key={nanoid()}>{item}</li>):null
 

  return (
    <div>
      
      
        <Title>Regular Mediation</Title> 
      {!hasRegMeds? <p>Nil</p>: 
      regFormat==='scr'? <p>{renderedRegMeds}</p>
      : regFormat==='freetype'&& 

    <OrderedList>
      {sortAndSplit(renderedRegMeds)}
    </OrderedList>

      }

      

        <Title>Acute Medication</Title>  
        {!hasAcuteMeds? <p>Nil</p>: 
      acuteFormat==='scr'? <p>{renderedAcuteMeds}</p>
      : acuteFormat==='freetype'&& 

    <OrderedList>
      {sortAndSplit(renderedAcuteMeds)}
    </OrderedList>

      }
        <Title>OTC Medication</Title>   
        {!hasOtcMeds? <p>Nil</p>:null}
        <OrderedList>
       {sortAndSplit(otcMeds)}
          
        </OrderedList> 
  
    </div>
  )
}

export default Medications