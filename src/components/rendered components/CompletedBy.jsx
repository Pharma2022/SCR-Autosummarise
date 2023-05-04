import React from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate } from '../../helper'

const CompletedBy = () => {

const {form:{completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments}}=useFormContext()
  return (
    <div>
          <p>Completed by {completedBy}</p>
          <p>Reconciled by {reconciledBy}</p>
          <p>Transcribed by {transcribedBy}</p>
          <p>Completed at {dateCompleted&& formatDate(dateCompleted)} {timeCompleted}</p>
          <p className='bold underline red'> Medication review required {medReviewRequired?"Yes":"No" }</p>
          <p> {medReviewRequired&& medReviewComments}   </p>



    </div>
  )
}

export default CompletedBy