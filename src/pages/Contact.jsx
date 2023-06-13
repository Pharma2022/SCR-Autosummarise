import React, { useState } from 'react';
import { chemistsList } from '../data/chemists';
import { anticoag } from '../data/anticoag';
import { medicinesInfo } from '../data/MI';
import Accordion from '../components/contact components/Accordion';
import { gpList } from '../data/GP';



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
      <Accordion
        placeholder={'Search GPs'}
        title='GP Practices'
        arr={gpList}
      />
    </div>
  );
};

export default Contact;
