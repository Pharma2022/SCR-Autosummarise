import React, { Fragment } from 'react'

const Label = ({label,name,children}) => {
  return (
    <Fragment>
    <div className='form-row flex-row'>
    <label htmlFor={name}>{label}</label>


    </div>
        {children}
        </Fragment>
  )
}

export default Label