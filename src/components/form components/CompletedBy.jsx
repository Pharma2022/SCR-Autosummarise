import React from 'react'
import { useFormContext } from '../../context/formContext'
import TextInput from '../form elements/TextInput'
import FormDate from '../form elements/Date'
import Time from '../form elements/Time'
const CompletedBy = () => {
    const {form}=useFormContext()
    const {completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,}=form
  return (
    <>
         <TextInput className={'flex-row'}     name='completedBy'     value={completedBy}    title='Completed by'/>
         <TextInput className={'flex-row'}     name='reconciledBy'    value={reconciledBy}   title='Reconciled by'/>
         <TextInput className={'flex-row'}     name='transcribedBy'   value={transcribedBy}  title='Transcribed by'/>
         <FormDate  className={'flex-row'}     name='dateCompleted'   value={dateCompleted}  title='Date Completed'/>
         <Time      className={'flex-row'}     name='timeCompleted'   value={timeCompleted}  title='Time Completed'/>   
         
    </>
  )
}

export default CompletedBy