import React from 'react'
import { useFormContext } from '../../context/formContext'

const CompletedBy = () => {
const {form}=useFormContext()
const {completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments}=form
  return (
    <div className='container flex-col'>
          <p>Completed by {completedBy}</p>
          <p>Reconciled by {reconciledBy}</p>
          <p>Transcribed by {transcribedBy}</p>
          <p>Completed at {dateCompleted} {timeCompleted}</p>
          <p className='bold under'> Medication review required {medReviewRequired?"Yes":"No" }</p>
          <p> {medReviewRequired&& medReviewComments}   </p>



    </div>
  )
}

export default CompletedBy