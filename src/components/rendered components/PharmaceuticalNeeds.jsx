import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate } from '../../helper'
import Title from '../Title'
const PharmaceuticalNeeds = () => {
    
    const {form:{ isMca,isDms,hasDmsConsent,isDosette,chemistName,chemistNo,odsCode,nhsMail,lastSupplyDate,
        commsIssues,commsIssuesComments, counsellingReq,counsellingReqComments,compliance,complianceComments, 
    }}=useFormContext()
  return (
    <div>
        <Title>Pharmaceutical Needs Assessment</Title>
        <p style={{marginBlock:'0em'}}>{isMca==='originalBoxes'? "Original boxes": isMca==="dosetteBox"? "Dosette box": isMca==='both' && "Original boxes AND Dosette box"}</p>
        <p style={{marginTop:'0em'}}>Does this patient meet the discharge medicines service(dms) referral criteria? {isDms? "Yes":"No"}</p>
        <p>Has the patient given consent to send information to the nominated pharmacy? {hasDmsConsent? "Yes":"No"}</p>
        <Title >Dosette box patient:  </Title>
        <p>{isDosette? "Yes":"No"}</p>
        {isDosette&&        
        <Fragment>
        <p>Community pharmacy name:{chemistName} </p>
        <p>Contact no: {chemistNo}</p>
        <p>ODS Code: {odsCode}</p>
        <p>NHS email: {nhsMail}</p>
        <p>Last Supply Date : {formatDate(lastSupplyDate)}</p>
        <p>Communication concerns: {commsIssues? commsIssuesComments:"Nil"}</p>
        <p>Counselling  required: {counsellingReq? counsellingReqComments:"Nil"}</p>
        <p>Compliance issues: {compliance? complianceComments:"Nil"}</p>
        </Fragment>}
   </div>
  )
}

export default PharmaceuticalNeeds