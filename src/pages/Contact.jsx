import React, { useEffect, useState } from 'react';
import { chemistsList } from '../data/chemists';
import { anticoag } from '../data/anticoag';
// import { medicinesInfo } from '../data/MI';
import Accordion from '../components/contact components/Accordion';
import { gpList } from '../data/GP';
import { db } from '../firebaseConfig';

import useFirestoreCollection from '../hooks/useFirestoreCollection';

const Contact = () => {


const GPs=useFirestoreCollection('gp-list')
 const Pharmacies=useFirestoreCollection('chemists')
 const medicinesInfo=useFirestoreCollection('medsinfo')

  return (
    <div className="container flex-col contact-page">
      <h2>Contacts</h2>

      <Accordion
        placeholder={'Search Medicines Information Centers'}
        title='Medicines Information Services'
        arr={medicinesInfo}
      />
      <Accordion
        placeholder={'Search Anticoagulation Centers'}
        title='Anticoagulation Clinics'
        arr={anticoag}
      />
      <Accordion
        placeholder={'Search Community Pharmacies'}
        title='Community Pharmacies'
        arr={Pharmacies}
      />
      <Accordion
        placeholder={'Search GP Surgeries'}
        title='GP Practices'
        arr={GPs}
      />
    </div>
  );
};

export default Contact;
