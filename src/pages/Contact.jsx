import React, { useState } from 'react'
import { anticoag, medicinesInfo } from '../data'
import ContactItem from '../components/ContactItem'
import { nanoid } from 'nanoid'
import { sortContactsByName } from '../helper'

const Contact = () => {
    
    const [isMedInfoShown,setIsMedInfoShown]=useState(false)
    const [isAnticoagShown,setIsAnticoagShown]=useState(false)

    const renderContacts =(arr)=>sortContactsByName( arr).map(({name,tel,email})=><ContactItem key={nanoid()} name={name} tel={tel} email={email} /> )

  return (
    <div className='container flex-col contact-page'>
        <h3 className='flex-row' >Medicines Information Contacts</h3>
        { renderContacts(medicinesInfo)}
        <h3 className='flex-row' >Anticoagulation Contacts</h3>
        { renderContacts(anticoag)}
    </div>
  )
}

export default Contact