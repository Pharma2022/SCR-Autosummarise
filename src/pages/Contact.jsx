import React, { useState } from 'react';
import { anticoag, chemistsList, medicinesInfo } from '../data';
import ContactItem from '../components/ContactItem';
import { nanoid } from 'nanoid';
import { sortContactsByName } from '../helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({ value, onChange, placeholder }) => (
  <input className='search-input' type="text" value={value} onChange={onChange} placeholder={placeholder} />
);

const Contact = () => {
  const [isMedInfoShown, setIsMedInfoShown] = useState(false);
  const [isAnticoagShown, setIsAnticoagShown] = useState(false);
  const [isChemistShown, setIsChemistShown] = useState(false);
  const [medInfoSearchTerm, setMedInfoSearchTerm] = useState('');
  const [anticoagSearchTerm, setAnticoagSearchTerm] = useState('');
  const [chemistSearchTerm, setChemistSearchTerm] = useState('');

  const handleMedInfoSearchTermChange = (e) => {
    setMedInfoSearchTerm(e.target.value);
  };

  const handleAnticoagSearchTermChange = (e) => {
    setAnticoagSearchTerm(e.target.value);
  };

  const handleChemistSearchTermChange = (e) => {
    setChemistSearchTerm(e.target.value);
  };

  const filterContacts = (contacts, searchTerm) => {
    if (!searchTerm) {
      return contacts;
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
      );
    });
  };

  const renderContacts = (contacts) => {
    return sortContactsByName(contacts).map(({ name, tel, email }) => (
      <ContactItem key={nanoid()} name={name} tel={tel} email={email} />
    ));
  };

  return (
    <div className="container flex-col contact-page">
      <h2>Contacts</h2>
      <h3 onClick={() => setIsMedInfoShown((prev) => !prev)} className="flex-row pointer accordion-icon">
        Medicines Information Contacts
        <FontAwesomeIcon icon={isMedInfoShown ? faChevronUp : faChevronDown} />
      </h3>
      {isMedInfoShown && (
        <>
          <SearchInput
            value={medInfoSearchTerm}
            onChange={handleMedInfoSearchTermChange}
            placeholder="Search Medicines Information Centers..."
          />
          {renderContacts(filterContacts(medicinesInfo, medInfoSearchTerm))}
        </>
      )}

      <h3 onClick={() => setIsAnticoagShown((prev) => !prev)} className="flex-row pointer accordion-icon">
        Anticoagulation Clinic Contacts
        <FontAwesomeIcon icon={isAnticoagShown ? faChevronUp : faChevronDown} />
      </h3>
      {isAnticoagShown && (
        <>
          <SearchInput
            value={anticoagSearchTerm}
            onChange={handleAnticoagSearchTermChange}
            placeholder="Search anticoag clinics"
          />
          {renderContacts(filterContacts(anticoag, anticoagSearchTerm))}
        </>
      )}

      <h3 onClick={() => setIsChemistShown((prev) => !prev)} className="flex-row pointer accordion-icon">
        Community Pharmacy Contacts
        <FontAwesomeIcon icon={isChemistShown ? faChevronUp : faChevronDown} />
      </h3>
      {isChemistShown && (
        <>
          <SearchInput
            value={chemistSearchTerm}
            onChange={handleChemistSearchTermChange}
            placeholder="Search chemists."
          />
          {renderContacts(filterContacts(chemistsList, chemistSearchTerm))}
        </>
      )}
    </div>
  );
};

export default Contact;
