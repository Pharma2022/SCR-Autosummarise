import React from 'react'
import FormAccordion from '../form elements/FormAccordion'
import { YesNoRadio } from '../form elements/Radios'
import TextArea from '../form elements/TextArea'
import { useFormContext } from '../../context/formContext'

const Allergies = () => {
    const {form:{hasAllergy,allergies}}=useFormContext()
  return (
    <FormAccordion title={'Allergies'}>

    <YesNoRadio    name='hasAllergy'     value={hasAllergy}    label={<p className='bold underline'>Patient drug allergies/sensitivities and reactions</p>} no='NKDA'  >
      <TextArea    name='allergies'      value={allergies}/>
    </YesNoRadio>
   </FormAccordion>
  )
}

export default Allergies