import React, { Fragment } from 'react'
import '../index.css'
import { useFormContext } from '../context/formContext'
import TextInput from './form elements/TextInput'
import FormDate from './form elements/Date'
import Time from './form elements/Time'
import {YesNoRadio,Radio,RadioLabel, GenericRadio, CustomRadio} from './form elements/Radios'
import TextArea from './form elements/TextArea'
import CheckBox from './form elements/CheckBox'
// import { checkboxesArray } from '../formData'
import { nanoid } from 'nanoid'
import FormAccordion from './form elements/FormAccordion'
import CompletedBy from './form components/CompletedBy'
import Sources from './form components/Sources'
import Allergies from './form components/Allergies'
import Smoking from './form components/Smoking'
import DischargePlan from './form components/DischargePlan'


const Form = () => {
    const { form, sortAcuteMeds,sortRegMeds,formatregFreetype,formatregSCR,acuteFormat,regFormat,formatAcuteSCR,formatAcuteFreetype }=useFormContext()
        const {
          medReviewRequired,medReviewComments,
          hasRegMeds,regMeds,hasAcuteMeds,acuteMeds,hasOtcMeds,otcMeds,
          smokes,cigNum,smokingAdvice,smokingAdviceComments,nrtConsent,preferredNrt,smokingReferral, 
          discrepancies, newMeds,changed,withheld,pharmReferral,pharmReferralComments,
          hasSteroids,longTermHigh,longTermHighIndication,hasIcs,ics,hasEmergencySteroids,emergencySteroids,
          isMca,isDms,hasDmsConsent,isDosette,chemistName,chemistNo,odsCode,nhsMail,lastSupplyDate, 
          commsIssues,commsIssuesComments, counsellingReq,counsellingReqComments,compliance,complianceComments, 
          hasWarfarin,warfarinIndication,warfarinRange,warfarinDose,warfarinDuration,warfarinLastAppt,warfarinINR,warfarinClinic,warfarinClinicContactNo,warfarinClinicEmail,warfarinNextAppt,
          hasOpioidReplacement,opioid,opioidDose,lastOpioidSupply,opioidChemistNameAndNo,dals,dalsContactNo,keyWorkerName,
          medsSupply,topUpMeds,dischargePlan,dischargeDestination
          
              }=form
   
              return (
                <form className='form container flex-col'  >
      
         <CompletedBy/>
      
         <YesNoRadio     label={<p className='bold underline red'>Medical Team to Review</p>} no=' Nothing'
                         name='medReviewRequired' value={medReviewRequired}   >
              <TextArea  name='medReviewComments' value={medReviewComments}/>
         </YesNoRadio>
         <p className='bold underline left'>Drug History </p>

          <Allergies/>
    
          <Sources/>

     
       

         <FormAccordion title={'Regular Medicines'}>

          <YesNoRadio    name='hasRegMeds'     value={hasRegMeds}    label={<p className='bold underline'>Regular Medicines </p>} >
            <span className='form-row format '>
            <GenericRadio property={regFormat} value='scr'      onClick={formatregSCR} >Copy from SCR </GenericRadio>
            <GenericRadio property={regFormat} value='freetype' onClick={formatregFreetype} >Freetype</GenericRadio>
            </span>

            <TextArea    name='regMeds'        value={regMeds}/>
            {regMeds&& regFormat==='scr'&& <button type='button' className='button' onClick={()=>sortRegMeds()}>Sort</button>}



          </YesNoRadio> 
         </FormAccordion>
         <FormAccordion title={'Acute Medicines'}>
          <YesNoRadio    name='hasAcuteMeds'   value={hasAcuteMeds}  label={<p className='bold underline'>Acute Medicines </p>} >
            <TextArea    name='acuteMeds'      value={acuteMeds}/>
            <span className='form-row format '>
              <GenericRadio property={acuteFormat} value='scr'      onClick={formatAcuteSCR} >Copy from SCR </GenericRadio>
              <GenericRadio property={acuteFormat} value='freetype' onClick={formatAcuteFreetype} >Freetype</GenericRadio>
              </span>

            {acuteMeds &&acuteFormat==='scr' && <button type='button'className='button' onClick={()=>sortAcuteMeds()}>Sort</button>}




          </YesNoRadio>
          </FormAccordion>
          <FormAccordion title={'OTC Medicines'}>
          <YesNoRadio    name='hasOtcMeds'     value={hasOtcMeds}    label={<p className='bold underline'>OTC Medicines</p>} >
            <TextArea    name='otcMeds'        value={otcMeds}/>
          </YesNoRadio> 
          </FormAccordion>

         <Smoking/>

          <FormAccordion title={'Discrepancies/Pharmacist/MMT Referral'}>

          <YesNoRadio name={'discrepancies'}    value={discrepancies}  label={<p className='bold underline'>Discrepancies found?</p>}>
            <p className='bold underline'>List of Discrepancies (with Reasons)</p>
            <p className='bold underline'> New</p>
            <TextArea name='newMeds' value={newMeds} placeholder={'New'}/>
            <p className='bold underline'> Changed</p>
            <TextArea name='changed' value={changed} placeholder={'Changed'}/>
            <p className='bold underline'> Withheld</p>
            <TextArea name='withheld' value={withheld} placeholder={'Withheld'}/>
            
            </YesNoRadio>    
          <YesNoRadio     name='pharmReferral'        value={pharmReferral}  no='N/A' label={<p className='bold underline'>Referral to Pharmacist /Pharmacy Technician</p>}>
                <TextArea name='pharmReferralComments' value={pharmReferralComments} placeholder={'Enter details'}/>
          </YesNoRadio>

          </FormAccordion>


          <FormAccordion title={'Steroids'} defaultState={false}>
          <YesNoRadio     
                      name='hasSteroids'    value={hasSteroids}     yes='History of steroid therapy' no='No Steroid Therapy' 
                      label={<p className='bold underline'>NPSA Alert Adults at Risk of Adrenal Crisis- PHARMACIST To complete</p>}>
                <p>If yes to any questions below, supply red steroid emergency card on discharge (add red steroid card prompt on TTA).
                  Refer to the bulletin and Adrenal Crisis Clinical Guideline for full criteria.</p>
              <a href='https://my.northmid.nhs.uk/download.cfm?ver=9962%3E' target='_blank'>
                    Link to Adrenal Crisis guideline
              </a>
              <YesNoRadio  name='longTermHigh'          value={longTermHigh}
                           label={<p>Was the patient prescribed long term or high dose <span className='underline'>oral</span> steroids before admission</p>}
                          >
                 <TextArea name='longTermHighIndication' value={longTermHighIndication} placeholder={'State Indication'}/>
              </YesNoRadio>
              <YesNoRadio  name='hasIcs'                 value={hasIcs}
                          label={<p>Was the patient high dose <span className='underline'>Inhaled</span> steroids before admission</p>}>
                      <TextArea name='ics'               value={ics} placeholder={'Specify'}/>
              </YesNoRadio>
              <YesNoRadio  name='hasEmergencySteroids'   value={hasEmergencySteroids}
                          label={<p>Was the patient prescribed <span className='underline'>emergency hydrocortisone injection</span>  before admission </p>}>
                      <TextArea name='emergencySteroids' value={emergencySteroids} placeholder={'Specify'}/>
              </YesNoRadio>
          </YesNoRadio>
          </FormAccordion>
     




          {
          <Fragment >
              <FormAccordion title={'Pharmaceutical Needs'}>
              <RadioLabel className={'format flex-col'} label={<p className='bold underline'>Pharmaceutical Needs Assessment</p>}>
                <CustomRadio       name='isMca'                  value='dosetteBox'       title={'Medication compliance aid(e.g. dosette box)'} property={isMca} />
                <CustomRadio       name='isMca'                  value='originalBoxes'    title={'Original Boxes '}                             property={isMca} />
                <CustomRadio       name='isMca'                  value='both'             title={'Both '}                                       property={isMca} />
              </RadioLabel>
              <YesNoRadio    name='isDms'                  value={isDms}            label={<p className='bold underline'>Does this patient meet the <span className='bold'>discharge medicines service(dms)</span> referral criteria?</p>} >
                    <YesNoRadio 
                             name='hasDmsConsent'          value={hasDmsConsent}    label={<p>If yes, complete all community pharmacy details including ODS code (obtainable from SCR).Has the patient given consent to send information to the nominated pharmacy?</p>}       />

              </YesNoRadio>
          
              <YesNoRadio    name='isDosette'              value={isDosette}           label={<p>Dosette box patient</p>}  >
                  <TextInput name='chemistName'            value={chemistName}         title='Community pharmacy name'/>
                  <TextInput name='chemistNo'              value={chemistNo}           title='Contact number'/>
                  <TextInput name='odsCode'                value={odsCode}             title='ODS Code'/>
                  <TextInput name='nhsMail'                value={nhsMail}             title='NHS Email'/>
                  <FormDate  name='lastSupplyDate'         value={lastSupplyDate}      title='Date of last supply'/>
              </YesNoRadio>
              <YesNoRadio    name='commsIssues'            value={commsIssues}         label={<p>Communication concerns (e.g.visual/hearing/language)</p>} >
                  <TextArea  name='commsIssuesComments'    value={commsIssuesComments} placeholder='Specify'/>
              </YesNoRadio>
              <YesNoRadio    name='counsellingReq'         value={counsellingReq}      label={<p>Counselling required</p>}>
                 <TextArea   name='counsellingReqComments' value={counsellingReqComments} placeholder='Specify'/>
              </YesNoRadio>
              <YesNoRadio    name='compliance'             value={compliance}          label={<p>Compliance issues</p>}>
                  <TextArea  name='complianceComments'     value={complianceComments}  placeholder='Specify'/>
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
                </FormAccordion>
                <FormAccordion title={'Anticoagulation'} defaultState={false}>
              <YesNoRadio        name='hasWarfarin'             value={hasWarfarin}                label={<p className='bold underline'>Anticoagulation</p>}>
                      <TextInput name='warfarinIndication'      value={warfarinIndication}         title='Indication' />
                      <TextInput name='warfarinRange'           value={warfarinRange}              title='Target Range' />
                      <TextInput name='warfarinDose'            value={warfarinDose}               title='Dose' />
                      <TextInput name='warfarinDuration'        value={warfarinDuration}           title='Duration' />
                      <FormDate  name='warfarinLastAppt'        value={warfarinLastAppt}           title='Last appointment Date' />
                      <TextInput name='warfarinINR'             value={warfarinINR}                title='Last INR Result'/>
                      <TextInput name='warfarinClinic'          value={warfarinClinic}             title='Name of anticoagulation clinic/provider'/>
                      <TextInput name='warfarinClinicContactNo' value={warfarinClinicContactNo}    title='Contact number of provider'/>
                      <TextInput name='warfarinClinicEmail'     value={warfarinClinicEmail}        title='Email of provider'/>
                      <FormDate  name='warfarinNextAppt'        value={warfarinNextAppt}           title='Date of next appointment' />
              </YesNoRadio>
              </FormAccordion>
                <FormAccordion title={'Methadone/Buprenorphine'} defaultState={false}>
              <YesNoRadio         name='hasOpioidReplacement'   value={hasOpioidReplacement}      label={<p className='bold underline'>Methadone/Buprenorphine</p>}>
                      <RadioLabel className={'format'} label={<p >If normally on methadone/buprenorphine please provide the following details</p>}>
                        <CustomRadio    name='opioid'                 value='methadone'                 title={'Methadone'}     property={opioid} />
                        <CustomRadio    name='opioid'                 value='buprenorphine'             title={'Buprenorphine'} property={opioid} />
                      </RadioLabel>
                      <TextInput  name='opioidDose'             value={opioidDose}                title={'Dose'}/>
                      {opioid&& 
                      <FormDate   name='lastOpioidSupply'       value={lastOpioidSupply}          title={`last supply of ${opioid}`}/>}
                      <TextInput  name='opioidChemistNameAndNo' value={opioidChemistNameAndNo}    title={'Chemist name and number'}/>
                      <TextInput  name='dals'                   value={dals}                      title={'Details of drug advisory service'}/>
                      <TextInput  name='dalsContactNo'          value={dalsContactNo}             title={'Contact No (Grove/Enable/other)'}/>
                      <TextInput  name='keyWorkerName'          value={keyWorkerName}             title={'Key worker name'}/>
                      <a href="https://my.northmid.nhs.uk/download.cfm?ver=12635" target="_blank">Please refer to methadone guideline</a>
              </YesNoRadio>
              </FormAccordion>

              <FormAccordion title={'Discharge'}>
              <RadioLabel className={'format'} label={<p className='bold underline left '>Medicines for discharge</p>} col={true}>
                      <CustomRadio      name='medsSupply'             value='ownSupply' property={medsSupply} title={'Has own supply at home, supply new and changed medicines only'}   />
                      <CustomRadio      name='medsSupply'             value='topUp'     property={medsSupply} title={'Has own supply at home but needs the following medicines only (please list)'}   />
                      <CustomRadio      name='medsSupply'             value='supplyAll'  property={medsSupply} title={'Supply all medicines'}    />
            
              </RadioLabel>
                      {medsSupply==='topUp'&&
                      <TextInput  name='topUpMeds'                    value={topUpMeds} title='Specify'       placeholder='Specify'/>     
                      }

             <DischargePlan/>
              
              </FormAccordion>
          </Fragment>

          }




    </form>
  
  )
}

export default Form