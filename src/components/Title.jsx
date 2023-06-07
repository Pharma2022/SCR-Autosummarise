import React from 'react'

const Title = ({children, className, notUnderlined}) => {
  return (
    <p className={`mb-0 ${!notUnderlined&& 'bold underline'} ${className}`}>{children}</p>
  )
}

export default Title


const OrderedList= ({children, className, notUnderlined}) => {
  return (
    <ol className='mb-0'>{children}</ol>
  )
}

export {OrderedList}