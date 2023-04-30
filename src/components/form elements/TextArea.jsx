import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'

const TextArea = ({value,name,placeholder}) => {
    const {handleChange}=useFormContext()
  return (
    <Fragment>
        <textarea value={value} name={name} onChange={handleChange}
        
         placeholder={placeholder||""}
        />
    </Fragment>

  )
}

export default TextArea