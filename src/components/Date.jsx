import React from 'react'
import { useFormContext } from '../context/formContext'


const Date = ({name,value,title}) => {

const {handleChange}=useFormContext()


  return (
    <div className='form-row flex-row'>
    <label htmlFor={name}>{title}</label>
    <input name={name} value={value} onChange={handleChange} type='date'/>
    </div>
  )
}

export default Date