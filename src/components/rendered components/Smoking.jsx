import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import Title from '../Title'

const Smoking = () => {

const {form:{smokes,cigNum,smokingAdvice,smokingAdviceComments,nrtConsent,preferredNrt,smokingReferral, }}=useFormContext()


  return (
    <div>
        <Title>Smoking Status</Title>  
        {<p>Smoker? {smokes? "Yes":"No"}</p>}
        {smokes &&
        <Fragment>
        <p>Number of cigarettes smoked per day: {cigNum}</p>
        <p>Smoking Advice given {smokingAdvice? "Yes":"No"} </p>
        {smokingAdvice&& <p>{smokingAdviceComments} </p>}
        <p>Consents to NRT ? {nrtConsent? `Yes,preferred NRT: ${preferredNrt}`:"No"} </p>
        <p>Patient referred to smoking cessation service: {smokingReferral? "Yes":"No"}</p>
        </Fragment>
        }


    </div>
  )
}

export default Smoking

