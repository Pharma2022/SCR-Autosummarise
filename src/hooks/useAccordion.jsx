import { useState } from "react";
import { nanoid } from "nanoid";
import {sortContactsByName} from '../helper'
import ContactItem from '../components/contact components/ContactItem'
const useContact=()=>{
  const [search,setSearch]=useState('')
  const [shown,setShown]=useState(false)
  const toggleShown=()=>setShown(prev=>!prev)  
  const handleChange=({target:{value}})=>setSearch(value)
   
    const filterContacts = (contacts, searchTerm) => {
      if (!searchTerm) {
        return contacts
      }
  
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      return contacts.filter(({ name, tel, email }) => {
        const lowercasedName = name.toLowerCase();
        const lowercasedTel = tel.toLowerCase();
        const lowercasedEmail = email.toLowerCase();
  
        return (
          lowercasedName.includes(lowercasedSearchTerm) ||
          lowercasedTel.includes(lowercasedSearchTerm) ||
          lowercasedEmail.includes(lowercasedSearchTerm)
        )
      })
    }
  
    const renderContacts = (contacts) => {
       
    
        return sortContactsByName(contacts).map(({ name, tel, email }) => (
          <ContactItem
            key={nanoid()}
            name={name}
            tel={tel}
            email={email}
          />
        ))
      }
   return{renderContacts,filterContacts,search,shown,toggleShown,handleChange}
  }

  export default useContact