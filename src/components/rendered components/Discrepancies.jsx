import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import { nanoid } from 'nanoid'

const Discrepancies = () => {
const {form:{  discrepancies,newMeds,withheld,changed,pharmReferral,pharmReferralComments,}}= useFormContext()

const returnUl=(element)=>(!element?<p>Nil</p>: element.split('\n').length?
<ul>{ element.split('\n').map(item=>(<li key={nanoid()}>{item}</li>))  }</ul>:
<p>{element}</p>)

  return (
    <div >
        {
        <Fragment>
        <p className='bold underline'>List of Discrepancies:</p>

        <p className='bold underline'>New</p>
       
        {returnUl(newMeds)}

        <p className='bold underline'>Changed</p>
       {returnUl(changed)}
        <p className='bold underline'>Withheld</p>

        {returnUl(withheld)}
        </Fragment> 
        
        }
        { <Fragment>
        <p className='bold underline'>Referral to Pharmacist/Technician</p>
        {pharmReferral? <p>{pharmReferralComments}</p>:<p>Nil</p>}
        </Fragment>}
    </div>
  )
}

export default Discrepancies