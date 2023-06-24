import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import { nanoid } from 'nanoid'
import Title from '../Title'
import { singleOrDouble } from '../../helper'
const Discrepancies = () => {
const {form:{  newMeds,withheld,changed,pharmReferral,pharmReferralComments,}}= useFormContext()


const returnUl=(element)=>(!element?<p>Nil</p>: singleOrDouble(element) )

  return (
    <div >
        {
        <Fragment>
        <Title>List of Discrepancies:</Title>

        <Title>New</Title>
       
        {returnUl(newMeds)}

        <Title>Changed</Title>
       {returnUl(changed)}
        <Title>Withheld</Title>

        {returnUl(withheld)}
        </Fragment> 
        
        }
        { <Fragment>
        <Title>Referral to Pharmacist/Technician</Title>
        {pharmReferral? singleOrDouble(pharmReferralComments):<p>Nil</p>}
        </Fragment>}
    </div>
  )
}

export default Discrepancies