import React, { Fragment } from 'react'
import { useFormContext } from '../context/formContext'
import {nanoid} from 'nanoid'

const RadioLabel=({label,children,col})=>(
<div className='form-row flex-col' >
    <span>{label}</span>
    <span className={col?'flex-col':null}>{children}</span>
</div>

)

const Radio=({name,title,value,property})=>{
  const {handleChange}=useFormContext()
  return(
    
    <label >{title}
    <input    type="radio" name={name} value={value} onChange={handleChange} checked={property===value}  />
    </label>

  )
}


const YesNoRadio = ({label,value,name,yes,no,children}) => {
    const {handleChange}=useFormContext()



  return (
    <Fragment>
   <RadioLabel label={label}>

        <label >{yes? yes:"Yes"}
        <input    type="radio" name={name} value={true} onChange={handleChange} checked={value}  />
        </label>

        
         <label >{no? no :"No"}
         
         <input   type="radio" name={name} value={""} onChange={handleChange} checked={!value}  />
         </label>
      


   </RadioLabel>
    {value&& children}
   </Fragment>
  )
}

export {YesNoRadio,Radio,RadioLabel}