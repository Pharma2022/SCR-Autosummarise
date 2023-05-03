import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'

const Discrepancies = () => {
const {form:{  discrepancies,pharmReferral,pharmReferralComments,}}= useFormContext()

  return (
    <div >
        {
        <Fragment>
        <p className='bold underline'>List of Discrepancies:</p>
      {discrepancies?  <p>{discrepancies}
        </p> :'Nil'}
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