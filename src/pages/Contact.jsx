import React, { useState } from 'react';
import { anticoag, chemistsList, medicinesInfo } from '../data';
import ContactItem from '../components/ContactItem';
import { nanoid } from 'nanoid';
import { sortContactsByName } from '../helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [isMedInfoShown, setIsMedInfoShown] = useState(false);
  const [isAnticoagShown, setIsAnticoagShown] = useState(false);
  const [isChemistShown,setIsChemistShown]=useState(false)
  const renderContacts = (arr) =>
    sortContactsByName(arr).map(({ name, tel, email }) => (
      <ContactItem key={nanoid()} name={name} tel={tel} email={email} />
    ));
 

  return (

    <div className="container flex-col contact-page">
      <h2>Contacts</h2>
      <h3 onClick={()=>setIsMedInfoShown(prev=>!prev)} 
        className='flex-row pointer accordion-icon'>
          Medicines Information Contacts
          <FontAwesomeIcon  
              icon={isMedInfoShown ? faChevronUp : faChevronDown}  
              />
      </h3>
      {isMedInfoShown&&renderContacts(medicinesInfo)}
      <h3 onClick={()=>setIsAnticoagShown(prev=>!prev)} 
          className='flex-row pointer accordion-icon'>
            Anticoagulation Clinic Contacts
            <FontAwesomeIcon  
            icon={isAnticoagShown ? faChevronUp : faChevronDown}  />
      </h3>
      {isAnticoagShown&&renderContacts(anticoag)}
      <h3 onClick={()=>setIsChemistShown(prev=>!prev)} 
        className='flex-row pointer accordion-icon'>
          Community Pharmacy Contacts
          <FontAwesomeIcon  
              icon={isChemistShown ? faChevronUp : faChevronDown}  
              />
      </h3>
      {isChemistShown&&renderContacts(chemistsList)}


    </div>
  );
};

export default Contact;
