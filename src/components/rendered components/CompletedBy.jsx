import React from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate, singleOrDouble } from '../../helper'
import Title from '../Title'

const CompletedBy = () => {

const {form:{completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments}}=useFormContext()
  return (
    <div>
          <p className='bold underline mb-0'>Medication Reconciliation</p>
          <Title notUnderlined={true} >  <span >Completed by :</span>   {completedBy}</Title>
          <Title notUnderlined={true} >  <span >Reconciled by :</span>   {reconciledBy}</Title>
          <Title notUnderlined={true}>  <span >Transcribed by :</span>   {transcribedBy}</Title>
          <p >  <span >Completed at :</span>   {dateCompleted&& formatDate(dateCompleted)} {timeCompleted}</p>
          <Title className='red' > Medical Team to Review </Title>
          <p className='mb-0'>{medReviewRequired?"Yes":"No" }</p>
          <p className='mb-0'> {medReviewRequired? singleOrDouble( medReviewComments):null}   </p>



    </div>
  )
}

export default CompletedBy