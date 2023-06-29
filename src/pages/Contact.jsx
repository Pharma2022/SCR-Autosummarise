import React, { useEffect, useState } from 'react';
import { chemistsList } from '../data/chemists';
import { anticoag } from '../data/anticoag';
import { medicinesInfo } from '../data/MI';
import Accordion from '../components/contact components/Accordion';
import { gpList } from '../data/GP';
import { db } from '../firebaseConfig';
import {
  collection,
  onSnapshot,
  query,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

const Contact = () => {


  const [GPs, setGPs] = useState([])
  const [Pharmacies,setPharmacies]=useState([])

  useEffect(() => {
    const q = query(collection(db, 'gp-list'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let myArr = [];
      querySnapshot.forEach((doc) => {
        myArr.push({ ...doc.data(), id: doc.id });
      });

      // Sort the todos alphabetically
      myArr.sort((a, b) => a.name.localeCompare(b.name));


      setGPs(myArr);
    });

    return () => unsubscribe();
  }, [])
  useEffect(() => {
    const q = query(collection(db, 'chemists'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let myArr = [];
      querySnapshot.forEach((doc) => {
        myArr.push({ ...doc.data(), id: doc.id });
      });

      // Sort the todos alphabetically
      myArr.sort((a, b) => a.name.localeCompare(b.name));


      setPharmacies(myArr);
    });

    return () => unsubscribe();
  }, [])

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
