import React from 'react'
import '../index.css'
import { useFormContext } from '../context/formContext'
import TextInput from './TextInput'
import Date from './Date'
import Time from './Time'
import YesNoRadio from './YesNoRadio'
import TextArea from './TextArea'
import NumberInput from './NumberInput'


const Form = () => {
    const { form }=useFormContext()
        const {
          completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments,
          hasAllergy,allergies,hasRegMeds,regMeds,hasAcuteMeds,acuteMeds,hasOtcMeds,otcMeds,
          smokes,cigNum,smokingAdvice,smokingAdviceComments,nrtConsent,preferredNrt  
  
  }=form
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
         
         <YesNoRadio 
               label='Medical Team to Review' value={medReviewRequired} 
               name='medReviewRequired'no='Nothing'>
              <TextArea name='medReviewComments' value={medReviewComments}/>
         </YesNoRadio>
         
          <YesNoRadio 
               label='Patient drug allergies/sensitivities and reactions' 
                value={hasAllergy} name='hasAllergy'no='NKDA'>
              <TextArea name='allergies' value={allergies}/>
          </YesNoRadio>
        
          <YesNoRadio 
                label='Regular Medicines' value={hasRegMeds} name='hasRegMeds'>
               <TextArea  name='regMeds' value={regMeds}/>
          </YesNoRadio> 

          <YesNoRadio 
                 label='Acute Medicines' value={hasAcuteMeds} name='hasAcuteMeds'>
               <TextArea name='acuteMeds' value={acuteMeds}/>
          </YesNoRadio>
      
           <YesNoRadio 
                 label='OTC Medicines' value={hasOtcMeds} name='hasOtcMeds'>
                <TextArea name='otcMeds' value={otcMeds}/>
          </YesNoRadio> 

          <YesNoRadio
            label='Smoking Status' value={smokes} name='smokes'  >
                  <NumberInput title='Number of cigarettes smoked per day' name='cigNum' value={""||cigNum}/>
                  <YesNoRadio label='Smoking cessation advice given'  name='smokingAdvice' value={smokingAdvice} >
                        <TextArea name='smokingAdviceComments' value={smokingAdviceComments} placeholder={'Specify'}/>
                  </YesNoRadio>
                  <YesNoRadio label='Patient Consents to nicotine replacement therapy prescription' name='nrtConsent' value={nrtConsent} >
                        <TextArea name='preferredNrt'value={preferredNrt}/>

                  </YesNoRadio>
            


          </YesNoRadio>
       
         <button>Submit</button>


    </form>
  
  )
}

export default Form