import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import {nanoid} from 'nanoid'

const RadioLabel=({label,children,col,className})=>(
<div className={`form-row flex-col `} >
    <span>{label}</span>
    <span className={`${col&&'flex-col'}  ${className}`}>{children}</span>
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
   <RadioLabel className={`toggle-btn ${value? 'green-toggle':'red-toggle'}`} label={label }>

        <label value={true} className={value?'checked' :null} onClick={handleChange} name={name} >{yes? yes:"Yes"}
        <input  className='yesno'  type="radio" name={name} value={true} onChange={handleChange} checked={value}  />
        </label>

        
         <label value={""} className={!value?'checked' :null} onClick={handleChange} name={name} >{no? no :"No"}
         
         <input  className='yesno' type="radio" name={name} value={""} onChange={handleChange} checked={!value}  />
         </label>
      


   </RadioLabel>
    {value&& children}
   </Fragment>
  )
}

export {YesNoRadio,Radio,RadioLabel}