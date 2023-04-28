import React from 'react'
import '../index.css'
import { useFormContext } from '../context/formContext'
import TextInput from './TextInput'
import Date from './Date'
import Time from './Time'
import YesNoRadio from './YesNoRadio'


const Form = () => {
    const { form,completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments,
        hasAllergy,allergies,hasRegMeds,regMeds,hasAcuteMeds,acuteMeds }=useFormContext()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form)
    }

  return (
    <form className='container flex-col' onSubmit={handleSubmit} >
         <TextInput name='completedBy' value={completedBy} title='Completed by'/>
         <TextInput name='reconciledBy' value={reconciledBy} title='Reconciled by'/>
         <TextInput name='transcribedBy' value={transcribedBy} title='Transcribed by'/>
         <Date name='dateCompleted' value={dateCompleted} title='Date Completed'/>
         <Time name='timeCompleted' value={timeCompleted} title='Time Completed'/>   
         <YesNoRadio label='Medical Team to Review' value={medReviewRequired} name='medReviewRequired'
         textareaName='medReviewComments' textareaValue={medReviewComments} no='Nothing'/>
        <YesNoRadio label='Patient drug allergies/sensitivities and reactions' value={hasAllergy} name='hasAllergy'
         textareaName='allergies' textareaValue={allergies} no='NKDA'/>
        <YesNoRadio label='Regular Medicines' value={hasRegMeds} name='hasRegMeds'
         textareaName='regMeds' textareaValue={regMeds} />
           <YesNoRadio label='Acute Medicines' value={hasAcuteMeds} name='hasAcuteMeds'
         textareaName='acuteMeds' textareaValue={acuteMeds} />
         <button>Submit</button>
    </form>
  
  )
}

export default Form