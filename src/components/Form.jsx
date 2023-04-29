import React, { Fragment } from 'react'
import '../index.css'
import { useFormContext } from '../context/formContext'
import TextInput from './TextInput'
import Date from './Date'
import Time from './Time'
import {YesNoRadio,Radio,RadioLabel} from './Radios'
import TextArea from './TextArea'
import NumberInput from './NumberInput'
import Label from './Label'
import CheckBox from './CheckBox'


const Form = () => {
    const { form }=useFormContext()
        const {
          completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments,
          SCR,SCRupdated,patient,eTTA,eTTADate,pods,carer,nursingHome,GP,chemist, 
          hasAllergy,allergies,hasRegMeds,regMeds,hasAcuteMeds,acuteMeds,hasOtcMeds,otcMeds,
          smokes,cigNum,smokingAdvice,smokingAdviceComments,nrtConsent,preferredNrt,smokingReferral, 
          discrepancies,pharmReferral,pharmReferralComments,
          hasSteroids,longTermHigh,longTermHighIndication,hasIcs,ics,hasEmergencySteroids,emergencySteroids,
          isMca,isDms,hasDmsConsent,isDosette,chemistName,chemistNo,odsCode,nhsMail,lastSupplyDate, 
          commsIssues,commsIssuesComments, counsellingReq,counsellingReqComments,compliance,complianceComments, 
          hasWarfarin,warfarinIndication,warfarinRange,warfarinDose,warfarinDuration,warfarinLastAppt,warfarinINR,warfarinClinic,warfarinClinicContactNo,warfarinClinicEmail,warfarinNextAppt,
          hasOpioidReplacement,opioid,opioidDose,lastOpioidSupply,opioidChemistNameAndNo,dals,dalsContactNo,keyWorkerName,
          medsSupply,topUpMeds,
          
              }=form
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form)
    }

  return (
    <form className='container flex-col' onSubmit={handleSubmit} >
         <TextInput name='completedBy'   value={completedBy}    title='Completed by'/>
         <TextInput name='reconciledBy'  value={reconciledBy}   title='Reconciled by'/>
         <TextInput name='transcribedBy' value={transcribedBy}  title='Transcribed by'/>
         <Date      name='dateCompleted' value={dateCompleted}  title='Date Completed'/>
         <Time      name='timeCompleted' value={timeCompleted}  title='Time Completed'/>   
         
         <YesNoRadio   label={<p className='bold underline red'>Medical Team to Review</p>} value={medReviewRequired} 
                      name='medReviewRequired'no=' Nothing'>
              <TextArea name='medReviewComments' value={medReviewComments}/>
         </YesNoRadio>
         <p className='bold underline left'>Drug History </p>
         <div className='form-row flex-row wrap'>
          <p className='bold underline'> Sources</p>
  
            <CheckBox  name='SCR'            value={SCR}          title={SCR} />
            {SCR&& 
            <Date      name='SCRupdated'     value={SCRupdated}   title='SCR last updated'/>}
            <CheckBox  name='patient'        value={patient}      title='Patient'/>
            <CheckBox  name='eTTA'           value={eTTA}         title='TTA'/>
            {eTTA&& 
            <Date      name='eTTADate'       value={eTTADate}     title='TTA Date'/>}
            <CheckBox  name='pods'           value={pods}         title='pods'/>
            <CheckBox  name='carer'          value={carer}        title='carer'/>
            <CheckBox  name='nursingHome'    value={nursingHome}  title='Nursing Home'/>
            <CheckBox  name='GP'             value={GP}           title='GP'/>
            <CheckBox  name='chemist'        value={chemist}      title='Community Pharmacy'/>
           
    
         </div>

         
          <YesNoRadio label={<p className='bold underline'>Patient drug allergies/sensitivities and reactions</p>} 
                value={hasAllergy} name='hasAllergy'no='NKDA'>
              <TextArea name='allergies' value={allergies}/>
          </YesNoRadio>
        
          <YesNoRadio  label={<p className='bold underline'>Regular Medicines </p>}
                value={hasRegMeds} name='hasRegMeds'>
               <TextArea  name='regMeds' value={regMeds}/>
          </YesNoRadio> 

          <YesNoRadio   label={<p className='bold underline'>Acute Medicines </p>}
                 value={hasAcuteMeds} name='hasAcuteMeds'>
               <TextArea name='acuteMeds' value={acuteMeds}/>
          </YesNoRadio>
      
           <YesNoRadio  label={<p className='bold underline'>OTC Medicines</p>}
                 value={hasOtcMeds} name='hasOtcMeds'>
                <TextArea name='otcMeds' value={otcMeds}/>
          </YesNoRadio> 

          <YesNoRadio   label={<p className='bold underline'>Smoking Status'</p>   } 
                value={smokes} name='smokes'>
                  <NumberInput title='Number of cigarettes smoked per day' name='cigNum' value={""||cigNum}/>
                  <YesNoRadio label='Smoking cessation advice given'  name='smokingAdvice' value={smokingAdvice} >
                        <TextArea name='smokingAdviceComments' value={smokingAdviceComments} placeholder={'Specify'}/>
                  </YesNoRadio>
                  <YesNoRadio label='Patient Consents to nicotine replacement therapy prescription' name='nrtConsent' value={nrtConsent} >
                        <TextArea name='preferredNrt'value={preferredNrt}/>

                  </YesNoRadio>
                  <YesNoRadio label='Patient referred to smoking cessation service' name='smokingReferral' value={smokingReferral}>
                      <a href='https://my.northmid.nhs.uk/tackling-tobacco-dependency' target='_blank' >
                        To refer to the smoking cessation service, please click here
                      </a>
                  </YesNoRadio>

          </YesNoRadio>

          <Label name='discrepancies' label={<p className='bold underline'>List of Discrepancies (with Reasons)</p>}>
                <TextArea name='discrepancies' value={discrepancies} placeholder={'New:Changes:Stopped'}/>
          </Label>

          <YesNoRadio label='Referral to Pharmacist /Pharmacy Technician' name='pharmReferral' value={pharmReferral}  no='N/A'>
                <TextArea name='pharmReferralComments' value={pharmReferralComments} placeholder={'Enter details'}/>
          </YesNoRadio>

          <YesNoRadio label='NPSA Alert Adults at Risk of Adrenal Crisis- PHARMACIST To complete' name='hasSteroids' value={hasSteroids} 
                       yes='History of steroid therapy' no='No Steroid Therapy'>
                <p>If yes to any questions below, supply red steroid emergency card on discharge (add red steroid card prompt on TTA).
                  Refer to the bulletin and Adrenal Crisis Clinical Guideline for full criteria.</p>
                <a href='https://my.northmid.nhs.uk/download.cfm?ver=9962%3E' target='_blank'>
                    Link to Adrenal Crisis guideline
                </a>
                <YesNoRadio label={<p>Was the patient prescribed long term or high dose <span className='underline'>oral</span> steroids before admission</p>}
                    name='longTermHigh' value={longTermHigh}>
                      <TextArea name='longTermHighIndication' value={longTermHighIndication} placeholder={'State Indication'}/>
                </YesNoRadio>
                <YesNoRadio label={<p>Was the patient high dose <span className='underline'>Inhaled</span> steroids before admission</p>}
                    name='hasIcs' value={hasIcs}>
                      <TextArea name='ics' value={ics} placeholder={'Specify'}/>
                </YesNoRadio>
                <YesNoRadio label={<p>Was the patient prescribed <span className='underline'>emergency hydrocortisone injection</span>  before admission </p>}
                    name='hasEmergencySteroids' value={hasEmergencySteroids}>
                      <TextArea  name='emergencySteroids' value={emergencySteroids} placeholder={'Specify'}/>
                </YesNoRadio>
          </YesNoRadio>
          {
          <Fragment >
  
              <RadioLabel label={<p className='bold underline'>Pharmaceutical Needs Assessment</p>}>
                <Radio name='isMca' title={'Medication compliance aid(e.g. dosette box)'} value='dosetteBox' property={isMca} />
                <Radio name='isMca' title={'Original Boxes '} value='originalBoxes' property={isMca} />
                <Radio name='isMca' title={'Both '} value='both' property={isMca} />
              </RadioLabel>
              <YesNoRadio label={<p className='bold underline'>Does this patient meet the <span className='bold'>discharge medicines service(dms)</span> referral criteria?</p>}
                name='isDms' value={isDms}  >
                    <YesNoRadio  label={<p>If yes, complete all community pharmacy details including ODS code (obtainable from SCR).Has the patient given consent to send information to the nominated pharmacy?</p>}
                    name='hasDmsConsent' value={hasDmsConsent}
                    />

              </YesNoRadio>
          
              <YesNoRadio   label={<p>Dosette box patient</p>}  
                                 name='isDosette' value={isDosette}>
                      <TextInput name='chemistName'     value={chemistName}     title='Community pharmacy name'/>
                      <TextInput name='chemistNo'       value={chemistNo}       title='Contact number'/>
                      <TextInput name='odsCode'         value={odsCode}         title='ODS Code'/>
                      <TextInput name='nhsMail'         value={nhsMail}         title='NHS Email'/>
                      <Date      name='lastSupplyDate'  value={lastSupplyDate}  title='Date of last supply'/>
              </YesNoRadio>
              <YesNoRadio label={<p>Communication concerns (e.g.visual/hearing/language)</p>} name='commsIssues' value={commsIssues}>
                      <TextArea name='commsIssuesComments' value={commsIssuesComments} placeholder='Specify'/>
              </YesNoRadio>
              <YesNoRadio label={<p>Counselling required</p>} name='counsellingReq' value={counsellingReq}>
                      <TextArea name='counsellingReqComments' value={counsellingReqComments} placeholder='Specify'/>
              </YesNoRadio>
              <YesNoRadio label={<p>Compliance issues</p>} name='compliance' value={compliance}>
                      <TextArea name='complianceComments' value={complianceComments} placeholder='Specify'/>
              </YesNoRadio>
              {commsIssues&&
              <Fragment>
              <p>Any patients with a language barrier please use 'The Big Word' translation service</p>
                  <a href='https://my.northmid.nhs.uk/the-big-word---translation-service' target='_blank'>Big Word Translation Service Link
                  </a>
                <p>
                  Bigword access code: ***
                </p>
                </Fragment>}
              <YesNoRadio label={<p className='bold underline'>Anticoagulation</p>} name='hasWarfarin' value={hasWarfarin}>
                      <TextInput name='warfarinIndication'      value={warfarinIndication}         title='Indication' />
                      <TextInput name='warfarinRange'           value={warfarinRange}              title='Target Range' />
                      <TextInput name='warfarinDose'            value={warfarinDose}               title='Dose' />
                      <TextInput name='warfarinDuration'        value={warfarinDuration}           title='Duration' />
                      <Date      name='warfarinLastAppt'        value={warfarinLastAppt}           title='Last appointment Date' />
                      <TextInput name='warfarinINR'             value={warfarinINR}                title='Last INR Result'/>
                      <TextInput name='warfarinClinic'          value={warfarinClinic}             title='Name of anticoagulation clinic/provider'/>
                      <TextInput name='warfarinClinicContactNo' value={warfarinClinicContactNo}    title='Contact number of provider'/>
                      <TextInput name='warfarinClinicEmail'     value={warfarinClinicEmail}        title='Email of provider'/>
                      <Date      name='warfarinNextAppt'        value={warfarinNextAppt}           title='Date of next appointment' />
              </YesNoRadio>


              <YesNoRadio label={<p className='bold underline'>Methadone/Buprenorphine</p>} name={'hasOpioidReplacement'} value={hasOpioidReplacement}>
                      <RadioLabel label={<p >If normally on methadone/buprenorphine please provide the following details</p>}>
                        <Radio    name='opioid' title={'Methadone'} value='methadone' property={opioid} />
                        <Radio    name='opioid' title={'Buprenorphine'} value='buprenorphine' property={opioid} />
                      </RadioLabel>
                      <TextInput  name='opioidDose'             value={opioidDose}                title={'Dose'}/>
                      {opioid&& 
                      <Date       name='opioidDose'             value={lastOpioidSupply}          title={`last supply of ${opioid}`}/>}
                      <TextInput  name='opioidChemistNameAndNo' value={opioidChemistNameAndNo}    title={'Dose'}/>
                      <TextInput  name='dals'                   value={dals}                      title={'Details of drug advisory service'}/>
                      <TextInput  name='dalsContactNo'          value={dalsContactNo}             title={'Contact No (Grove/Enable/other)'}/>
                      <TextInput  name='keyWorkerName'          value={keyWorkerName}             title={'Key worker name'}/>
                      <a href="https://my.northmid.nhs.uk/download.cfm?ver=12635" target="_blank">Please refer to methadone guideline</a>
              </YesNoRadio>
              
              <RadioLabel label={<p className='bold underline left '>Medicines for discharge</p>} col={true}>
                      <Radio    name='medsSupply' title={'Has own supply at home, supply new and changed medicines only'} value='ownSupply' property={medsSupply} />
                      <Radio    name='medsSupply' title={'Has own supply at home but needs the following medicines only (please list)'} value='topUp' property={medsSupply} />
                      {medsSupply==='topUp'&&
                      <TextInput name='topUpMeds' value={topUpMeds} placeholder='Specify'/>
                      }
                      <Radio    name='medsSupply' title={'Supply all medicines'} value='supplyAll' property={medsSupply} />
            
              </RadioLabel>
              

          </Fragment>

          }


       
         <button>Submit</button>


    </form>
  
  )
}

export default Form