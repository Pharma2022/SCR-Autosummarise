import React, { Fragment } from 'react'
import { useFormContext } from '../context/formContext'

const NumberInput = ({name,value,title}) => {

    const {handleChange}=useFormContext()
    
    
      return (
        <Fragment>
        <label htmlFor={name}>{title}</label>
        <input type='number' name={name} value={value} onChange={handleChange} />
        </Fragment>
      )
    }

export default NumberInput