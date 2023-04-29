import React, { Fragment } from 'react'
import { useFormContext } from '../context/formContext'
import {nanoid} from 'nanoid'

const RadioLabel=({label,children})=>(
<div className='form-row flex-row' >
    <span>{label}</span>
    <span>{children}</span>
</div>

)



const YesNoRadio = ({label,value,name,no,children}) => {
    const {handleChange}=useFormContext()



  return (
    <Fragment>
   <RadioLabel label={label}>

        <label >Yes
        <input    type="radio" name={name} value={true} onChange={handleChange} checked={value!==""}  />
        </label>

        
         <label >{no? no :"No"}
         
         <input   type="radio" name={name} value="" onChange={handleChange} checked={value===""}  />
         </label>
      


   </RadioLabel>
    {value&& children}
   </Fragment>
  )
}

export default YesNoRadio