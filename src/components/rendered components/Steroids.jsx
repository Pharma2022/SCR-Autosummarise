import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import Title from '../Title'

const Steroids = () => {

    const {form:{hasSteroids,longTermHigh,longTermHighIndication,hasIcs,ics,hasEmergencySteroids,emergencySteroids,}}=useFormContext()
  return (
    <div>
        <Title>NPSA Alert Adults at Risk of Adrenal Crisis- PHARMACIST To complete</Title>
        <p>{hasSteroids? "History of Steroid Therapy": "No Steroid Therapy"} </p>
        {hasSteroids&& 
        <Fragment>
        <p>If yes to any questions below, supply red steroid emergency 
        card on discharge (add red steroid card prompt on TTA). Refer to the bulletin 
        and Adrenal Crisis Clinical Guideline for full criteria.</p>
       <p>Was the patient prescribed long term or high dose oral steroids before admission? {longTermHigh?`Yes ${longTermHighIndication}`:"No"} </p>
       <p>Was the patient high dose Inhaled steroids before admission? {hasIcs?`Yes ${ics}`:"No"}</p>
       <p>Was the patient prescribed emergency hydrocortisone injection before admission? {hasEmergencySteroids? `Yes ${emergencySteroids}`:"No"} </p>     


        </Fragment>
        }
    </div>
  )
}

export default Steroids