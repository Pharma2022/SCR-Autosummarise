import React from 'react'
import { useFormContext } from '../../context/formContext'


const FormDate = ({name,value,title,className}) => {

const {handleChange}=useFormContext()
const maxDate=new Date().toISOString().split('T')[0]

  return (
    <div className={`form-row flex-col ${className}`}>
    <label htmlFor={name}>{title}</label>
    <input name={name} max={maxDate} value={value} onChange={handleChange} type='date'/>
    </div>
  )
}

export default FormDate