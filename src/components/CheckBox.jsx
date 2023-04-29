import React from 'react'
import { useFormContext } from '../context/formContext'

const CheckBox = ({title,value,name}) => {
    const {handleChange}=useFormContext()
  return (
    <label>{title}
           <input 
                type="checkbox" 
                checked={value}
                onChange={handleChange}
                name={name}
            />
    </label>
  )
}

export default CheckBox