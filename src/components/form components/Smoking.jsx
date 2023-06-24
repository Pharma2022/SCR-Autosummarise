import React from 'react'
import FormAccordion from '../form elements/FormAccordion'
import { YesNoRadio } from '../form elements/Radios'
import TextArea from '../form elements/TextArea'
import TextInput from '../form elements/TextInput'
import { useFormContext } from '../../context/formContext'


const Smoking = ({isClozapine}) => {
    const {form:{smokes,cigNum,smokingAdvice,smokingAdviceComments,nrtConsent,preferredNrt,smokingReferral}}=useFormContext()
  return (
    <FormAccordion title={`Smoking Status`}>
          <YesNoRadio    name='smokes'         value={smokes}        label={<p className='bold underline'>Smoking Status  </p>} >
          {isClozapine? 
          <p className='red '>(Smoking status must be established for patient on clozapine due to drug interactions)</p>
          :null}
            <TextInput name='cigNum'         value={""||cigNum}    title='Number of cigarettes smoked per day' />
            <YesNoRadio  name='smokingAdvice'  value={smokingAdvice} label='Smoking cessation advice given' >
              <TextArea  name='smokingAdviceComments' value={smokingAdviceComments} placeholder={'Specify'}/>
            </YesNoRadio>
            <YesNoRadio  name='nrtConsent'     value={nrtConsent}    label='Patient Consents to nicotine replacement therapy prescription'>
              <TextArea  name='preferredNrt'   value={preferredNrt}/>
            </YesNoRadio>
            <YesNoRadio name='smokingReferral' value={smokingReferral} label='Patient referred to smoking cessation service'>
                      <a href='https://my.northmid.nhs.uk/tackling-tobacco-dependency' target='_blank' >
                        To refer to the smoking cessation service, please click here
                      </a>
            </YesNoRadio>

        </YesNoRadio>
    </FormAccordion>
  )
}

export default Smoking