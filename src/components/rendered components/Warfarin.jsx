import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate } from '../../helper'

const Warfarin = () => {
    const {form:{hasWarfarin,warfarinIndication,warfarinRange,warfarinDose,warfarinDuration,warfarinLastAppt
        ,warfarinINR,warfarinClinic,warfarinClinicContactNo,warfarinClinicEmail,warfarinNextAppt}}=useFormContext()

  return (
    <div className='container flex-col'>
     <p>Anticoagulation:{hasWarfarin?"Yes":"Nil"}</p>
     {hasWarfarin&&
     <Fragment>
     <p>Indication: {warfarinIndication}</p>
     <p>Range {warfarinRange}</p>
     <p>Dose {warfarinDose}</p>
     <p>Duration {warfarinDuration}</p>
     <p>Last appointment date: { formatDate(warfarinLastAppt)}</p>
     <p>Last INR: {warfarinINR} </p>
     <p>Name of anticoagulation clinic/provider: {warfarinClinic} </p>
     <p>Contact number of provider : {warfarinClinicContactNo}</p>
     <p>Email Address : {warfarinClinicEmail} </p>
     <p>Next appt : {formatDate(warfarinNextAppt)}</p> 


     </Fragment>
     }   

    </div>
  )
}

export default Warfarin