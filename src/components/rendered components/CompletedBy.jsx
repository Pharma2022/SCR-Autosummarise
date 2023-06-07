import React from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate } from '../../helper'
import Title from '../Title'

const CompletedBy = () => {

const {form:{completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments}}=useFormContext()
  return (
    <div>
          <Title notUnderlined={true} >  <span >Completed by :</span>   {completedBy}</Title>
          <Title notUnderlined={true} >  <span >Reconciled by :</span>   {reconciledBy}</Title>
          <Title notUnderlined={true}>  <span >Transcribed by :</span>   {transcribedBy}</Title>
          <p >  <span >Completed at :</span>   {dateCompleted&& formatDate(dateCompleted)} {timeCompleted}</p>
          <Title className='red' > MEDICAL TEAM TO REVIEW </Title>
          <p>{medReviewRequired?"Yes":"No" }</p>
          <p> {medReviewRequired&& medReviewComments}   </p>



    </div>
  )
}

export default CompletedBy