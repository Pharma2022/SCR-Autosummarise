import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import { nanoid } from 'nanoid'
import Title from '../Title'

const Discrepancies = () => {
const {form:{  discrepancies,newMeds,withheld,changed,pharmReferral,pharmReferralComments,}}= useFormContext()

const returnUl=(element)=>(!element?<p>Nil</p>: element.split('\n').length?
<ul>{ element.split('\n').map(item=>(<li key={nanoid()}>{item}</li>))  }</ul>:
<p>{element}</p>)

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
        {pharmReferral? <p>{pharmReferralComments}</p>:<p>Nil</p>}
        </Fragment>}
    </div>
  )
}

export default Discrepancies