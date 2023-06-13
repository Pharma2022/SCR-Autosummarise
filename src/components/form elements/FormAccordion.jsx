import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons'
const FormAccordion = ({title,children}) => {
    const [isShown,setIsShown]=useState(true)
    const toggleShown=()=>setIsShown(prev=>!prev)
  return (
    <>
    <p onClick={toggleShown} className='bold underline mb-0'>{title} <FontAwesomeIcon icon={isShown ? faChevronUp : faChevronDown} /></p>
    {isShown? children: null}
    </>
  )
}

export default FormAccordion

