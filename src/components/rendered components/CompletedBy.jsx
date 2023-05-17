import React from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate } from '../../helper'

const CompletedBy = () => {

const {form:{completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments}}=useFormContext()
  return (
    <div>
          <p>  <span className='bold '>Completed by :</span>   {completedBy}</p>
          <p>  <span className='bold '>Reconciled by :</span>   {reconciledBy}</p>
          <p>  <span className='bold '>Transcribed by :</span>   {transcribedBy}</p>
          <p>  <span className='bold '>Completed at :</span>   {dateCompleted&& formatDate(dateCompleted)} {timeCompleted}</p>
          <p className='bold underline red'> Medication review required {medReviewRequired?"Yes":"No" }</p>
          <p> {medReviewRequired&& medReviewComments}   </p>



    </div>
  )
}

export default CompletedBy