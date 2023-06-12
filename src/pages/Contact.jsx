import React, { useState } from 'react';
import { anticoag, chemistsList, medicinesInfo } from '../data';
import Accordion from '../components/contact components/Accordion';
const Contact = () => {


  return (
    <div className="container flex-col contact-page">
      <h2>Contacts</h2>

      <Accordion
        placeholder={'Search Medicines Information Centers'}
        title='Medicines Information'
        arr={medicinesInfo}
      />
      <Accordion
        placeholder={'Search Anticoagulation Centers'}
        title='Anticoagulation Clinic'
        arr={anticoag}
      />
      <Accordion
        placeholder={'Search Community Pharmacies'}
        title='Community Pharmacies'
        arr={chemistsList}
      />

    </div>
  );
};

export default Contact;
