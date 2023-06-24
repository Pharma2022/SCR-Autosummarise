import React, { Fragment, useEffect, useState } from 'react'
import CompletedBy from './rendered components/CompletedBy'
import Sources from './rendered components/Sources'
import Medications from './rendered components/Medications'
import Smoking from './rendered components/Smoking'
import Discrepancies from './rendered components/Discrepancies'
import Steroids from './rendered components/Steroids'
import PharmaceuticalNeeds from './rendered components/PharmaceuticalNeeds'
import Warfarin from './rendered components/Warfarin'
import Discharge from './rendered components/Discharge'
import Methadone from './rendered components/Methadone'
import { useFormContext } from '../context/formContext'
import { formatDate } from '../helper'
import Allergies from './rendered components/Allergies'
const Render = () => {
  const {checkboxesArray, form,sortAcuteMeds,sortRegMeds
    ,handleChange,renderedAcuteMeds,renderedRegMeds,formatregFreetype,formatregSCR,acuteFormat,regFormat,formatAcuteSCR,formatAcuteFreetype}=useFormContext()
    const  {
      completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments,
      SCR,SCRupdated,patient,eTTA,eTTADate,pods,carer,nursingHome,GP,chemist, 
      hasAllergy,allergies,hasRegMeds,regMeds,hasAcuteMeds,acuteMeds,hasOtcMeds,otcMeds,
      smokes,cigNum,smokingAdvice,smokingAdviceComments,nrtConsent,preferredNrt,smokingReferral, 
      discrepancies, newMeds,changed,withheld,pharmReferral,pharmReferralComments,
      hasSteroids,longTermHigh,longTermHighIndication,hasIcs,ics,hasEmergencySteroids,emergencySteroids,
      isMca,isDms,hasDmsConsent,isDosette,chemistName,chemistNo,odsCode,nhsMail,lastSupplyDate, 
      commsIssues,commsIssuesComments, counsellingReq,counsellingReqComments,compliance,complianceComments, 
      hasWarfarin,warfarinIndication,warfarinRange,warfarinDose,warfarinDuration,warfarinLastAppt,warfarinINR,warfarinClinic,warfarinClinicContactNo,warfarinClinicEmail,warfarinNextAppt,
      hasOpioidReplacement,opioid,opioidDose,lastOpioidSupply,opioidChemistNameAndNo,dals,dalsContactNo,keyWorkerName,
      medsSupply,topUpMeds,dischargePlan,dischargeDestination
      
          }=form
          const [isCopied,setIsCopied]=useState(false)
          const htmlTemplate=  `<div style='font-family: Arial,  sans-serif;'>
          <p style="margin-bottom: 0;"><span>Completed by :</span> ${completedBy}</p>
          <p style="margin-bottom: 0;"><span>Reconciled by :</span> ${reconciledBy}</p>
          <p style="margin-bottom: 0;"><span>Transcribed by :</span> ${transcribedBy}</p>
          <p><span>Completed at :</span> ${dateCompleted && formatDate(dateCompleted)} ${timeCompleted}</p>
          <p style="margin-bottom: 0; color: rgba(255, 0, 0, 0.737);">MEDICAL TEAM TO REVIEW</p>
          <p>${medReviewRequired ? 'Yes' : 'No'}</p>
          <p>${medReviewRequired && medReviewComments}</p>
        </div>
        <div style='font-family: Arial,  sans-serif;'>
        <p style="text-decoration: underline; font-weight: 700;">Drug History</p>
        <p style="text-decoration: underline; font-weight: 700;">Sources</p>
        <ul>
          ${SCR ? `<li>SCR last updated: ${formatDate(SCRupdated)}</li>` : ''}
          ${patient ? `<li>Patient</li>` : ''}
          ${eTTA ? `<li>TTA ${formatDate(eTTADate)}</li>` : ''}
          ${pods ? `<li>Pods</li>` : ''}
          ${carer ? `<li>Carer</li>` : ''}
          ${nursingHome ? `<li>Nursing Home</li>` : ''}
          ${GP ? `<li>GP</li>` : ''}
          ${chemist ? `<li>Community Pharmacy</li>` : ''}
        </ul>
      </div>
      <div style='font-family: Arial,  sans-serif;'>
    <p style="text-decoration: underline; font-weight: 700;">Allergies:</p>
    <ul>${hasAllergy ? allergies.split('\n').map(allergy => `<li k}>${allergy}</li>`).join('') : "<li>NKDA</li>"}</ul>
    <p style="text-decoration: underline; font-weight: 700; margin-bottom:0">Regular Medication</p>
    ${!hasRegMeds ? "<p style='margin-top:0'>Nil</p>" : regFormat === "scr" ? `<p>${renderedRegMeds}</p>` : regFormat === "freetype" ? `<ol>${renderedRegMeds.length ? renderedRegMeds.split('\n').map(item => `<li >${item}</li>`).join('') : ''}</ol>` : ""}
    <p style="text-decoration: underline; font-weight: 700; margin-bottom:0">Acute Medication</p>
    ${!hasAcuteMeds ? "<p style='margin-top:0'>Nil</p>" : acuteFormat === "scr" ? `<p>${renderedAcuteMeds}</p>` : acuteFormat === "freetype" ? `<ol>${renderedAcuteMeds.length ? renderedAcuteMeds.split('\n').map(item => `<li >${item}</li>`).join('') : ''}</ol>` : ""}
    <p style="text-decoration: underline; font-weight: 700; margin-bottom:0">OTC Medication</p>
    <p>${hasOtcMeds ? otcMeds.split('\n').length ? otcMeds.split('\n').map(item => `<li >${item}</li>`).join('') : otcMeds : 'Nil'}</p>
  </div>
  <div style='font-family: Arial,  sans-serif;'>
    <p style="text-decoration: underline; font-weight: 700; margin-bottom:0">Smoking Status</p>
    <p>Smoker? ${smokes ? "Yes" : "No"}</p>
    ${smokes ? `
      <p>Number of cigarettes smoked per day: ${cigNum}</p>
      <p>Smoking Advice given ${smokingAdvice ? "Yes" : "No"}</p>
      ${smokingAdvice ? `<p>${smokingAdviceComments}</p>` : ""}
      <p>Consents to NRT ? ${nrtConsent ? `Yes, preferred NRT: ${preferredNrt}` : "No"}</p>
      <p>Patient referred to smoking cessation service: ${smokingReferral ? "Yes" : "No"}</p>
    ` : ""}
  </div>
  <div style='font-family: Arial,  sans-serif;'>
  <p style="margin-bottom: 0; font-weight: bold; text-decoration: underline;">List of Discrepancies:</p>
  <p style="margin-bottom: 0; font-weight: bold;">New</p>
  ${!newMeds ? "<p style='margin-top:0'>Nil</p>" : `<ul style='margin-top:0'>${newMeds.split('\\n').map(item => `<li>${item}</li>`).join('')}</ul>`}
  <p style="margin-bottom: 0; font-weight: bold;">Changed</p>
  ${!changed ? "<p style='margin-top:0'>Nil</p>" : `<ul style='margin-top:0'>${changed.split('\\n').map(item => `<li>${item}</li>`).join('')}</ul>`}
  <p style="margin-bottom: 0; font-weight: bold;">Withheld</p>
  ${!withheld ? "<p style='margin-top:0'>Nil</p>" : `<ul style='margin-top:0'>${withheld.split('\\n').map(item => `<li>${item}</li>`).join('')}</ul>`}
  <p style="margin-bottom: 0; font-weight: bold;">Referral to Pharmacist/Technician</p>
  ${pharmReferral ? `<p>${pharmReferralComments}</p>` : "<p style='margin-top:0'>Nil</p>"}
</div>
<div style='font-family: Arial,  sans-serif;'>
  <p style="margin-bottom: 0; font-weight: bold; text-decoration: underline;">NPSA Alert Adults at Risk of Adrenal Crisis- PHARMACIST To complete</p>
  <p style='margin-top:0;'>${hasSteroids ? "History of Steroid Therapy" : "No Steroid Therapy"}</p>
  ${hasSteroids ? ` <p>If yes to any questions below, supply red steroid emergency card on discharge (add red steroid card prompt on TTA). Refer to the bulletin and Adrenal Crisis Clinical Guideline for full criteria.</p>
    <p>Was the patient prescribed long term or high dose oral steroids before admission? ${longTermHigh ? `Yes ${longTermHighIndication}` : "No"}</p>
    <p>Was the patient high dose Inhaled steroids before admission? ${hasIcs ? `Yes ${ics}` : "No"}</p>
    <p>Was the patient prescribed emergency hydrocortisone injection before admission? ${hasEmergencySteroids ? `Yes ${emergencySteroids}` : "No"}</p>
  ` : ''}
</div>
<div style='font-family: Arial,  sans-serif;'>
  <p style="margin-bottom:0; font-weight:bold; text-decoration:underline;">Pharmaceutical Needs Assessment</p>
  <p style="margin-top:0;">${isMca === 'originalBoxes' ? "Original boxes" : isMca === "dosetteBox" ? "Dosette box" : isMca === 'both' && "Original boxes AND Dosette box"||'Please select original boxes, medication compliance aid or both'}</p>
  <p>Does this patient meet the discharge medicines service (DMS) referral criteria? ${isDms ? "Yes" : "No"}</p>
  <p>Has the patient given consent to send information to the nominated pharmacy? ${hasDmsConsent ? "Yes" : "No"}</p>
  <p style="margin-bottom:0; font-weight:bold;">Dosette box patient? : ${isDosette ? "Yes" : "No"}</p>
 
  ${isDosette ? `
    <p style="margin-top:0;">Community pharmacy name: ${chemistName}</p>
    <p>Contact no: ${chemistNo}</p>
    <p>ODS Code: ${odsCode}</p>
    <p>NHS email: ${nhsMail}</p>
    <p>Last Supply Date: ${formatDate(lastSupplyDate)}</p>
    <p>Communication concerns: ${commsIssues ? commsIssuesComments : "Nil"}</p>
    <p>Counselling required: ${counsellingReq ? counsellingReqComments : "Nil"}</p>
    <p>Compliance issues: ${compliance ? complianceComments : "Nil"}</p>
  ` : ''}
</div>
<div style='font-family: Arial,  sans-serif;'>
  <p style="margin-bottom:0; font-weight:bold; text-decoration:underline;">Anticoagulation:</p>
  <p style='margin-top:0;'>${hasWarfarin ? "Yes" : "Nil"}</p>
  ${hasWarfarin ? `
    <p>Indication: ${warfarinIndication}</p>
    <p>Range: ${warfarinRange}</p>
    <p>Dose: ${warfarinDose}</p>
    <p>Duration: ${warfarinDuration}</p>
    <p>Last appointment date: ${formatDate(warfarinLastAppt)}</p>
    <p>Last INR: ${warfarinINR}</p>
    <p>Name of anticoagulation clinic/provider: ${warfarinClinic}</p>
    <p>Contact number of provider: ${warfarinClinicContactNo}</p>
    <p>Email Address: ${warfarinClinicEmail}</p>
    <p>Next appointment: ${formatDate(warfarinNextAppt)}</p>
  ` : ''}
</div>
<div style='font-family: Arial,  sans-serif;'>
  <p style='margin-bottom:0; font-weight:bold; text-decoration:underline;'>Methadone/Buprenorphine:</p>
  <p style='margin-top:0;'>${hasOpioidReplacement ? opioid : "Nil"}</p>
  ${hasOpioidReplacement ? `
    <p>Dose: ${opioidDose}</p>
    <p>Last Supply: ${formatDate(lastOpioidSupply)}</p>
    <p>Chemist name and number: ${opioidChemistNameAndNo}</p>
    <p>Details of drug advisory service: ${dals}</p>
    <p>Telephone: ${dalsContactNo}</p>
    <p>Key Worker: ${keyWorkerName}</p>
  ` : ''}
</div>
<p style='font-family: Arial,  sans-serif;margin-bottom: 0; font-weight: bold; text-decoration: underline;'>Medications for discharge:</p>
<p style='font-family: Arial,  sans-serif;margin-top: 0;'>
  ${medsSupply === 'ownSupply' ? 'Has own supply at home, supply new and changed medicines only'
  : medsSupply === 'topUp' ? `Has own supply at home but needs the following medicines only ${topUpMeds}`
  : 'Supply All'}
</p>

<p style='font-family: Arial,  sans-serif;margin-bottom: 0; font-weight: bold; text-decoration: underline;' >Discharge plan</p>

<p style='font-family: Arial,  sans-serif;margin-top:0 ' >Expected to be discharged to: <span style='font-weight: bold;'>${dischargePlan === 'nursingHome' ? 'Nursing Home'
  : dischargePlan === 'notKnown' ? 'Not known on admission'
  : dischargePlan === 'other' ? dischargeDestination
  : 'Own home'}</span/>
</p>`
        
        useEffect(()=>{
          const copyHtml=async=> { navigator.clipboard.writeText(htmlTemplate)}

          if (isCopied){
            copyHtml()
            setTimeout(()=>setIsCopied(false),1500)
          }

        },[isCopied])

        const handleCopyClick = () => {
          setIsCopied(true);
        };
  return (
    <Fragment>
 
         <div className='render container flex-col' id='renderedForm'>
        <CompletedBy/>
        <Allergies/>
        <Sources/>
        <Medications/>
        <Smoking/>
        <Discrepancies/>
        <Steroids/>
        <PharmaceuticalNeeds/>
        <Warfarin/>
        <Methadone/>
        <Discharge/>
        {/* <button className='button' onClick={handleCopyClick}>{isCopied ? 'Copied' : 'Copy'}</button> */}

    </div>
    </Fragment>
 
  )
}

export default Render