import React, { Fragment } from 'react'
import { useFormContext } from '../context/formContext'
import {nanoid} from 'nanoid'

const RadioLabel=({label,children})=>(
<div className='form-row flex-row' >
    <span>{label}</span>
    <span>{children}</span>
</div>

)


const YesNoRadio = ({label,value,name,textareaName,textareaValue,no}) => {
    const {handleChange}=useFormContext()

const yesId=nanoid()
const noID=nanoid()

  return (
    <Fragment>
   <RadioLabel label={label}>

        <label htmlFor={yesId}>Yes</label>

         <input  id={yesId}  type="radio" name={name} value={true} onChange={handleChange} checked={value===true}  />
         <label htmlFor={noID}>{no? no :"No"}</label>
         <input  id={noID}  type="radio" name={name} value={false} onChange={handleChange} checked={value===false}  />
      


   </RadioLabel>
   {value ? <textarea  name={textareaName} value={textareaValue} onChange={handleChange}/>:null}
   </Fragment>
  )
}

export default YesNoRadio