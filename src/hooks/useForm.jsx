import React,{ useState,useEffect } from "react"
import { sortRepeats,sortAcutes} from "../helper"
import { nanoid } from "nanoid"


const useForm = () => {


    const [form,setFormData]=useState({
        
        completedBy:"",reconciledBy:"",transcribedBy:"",dateCompleted:"",timeCompleted:"",
        medReviewRequired:"",medReviewComments:"",
        SCR:"",SCRupdated:"",patient:"",eTTA:"",eTTADate:"",pods:"",carer:"",nursingHome:"",GP:"",chemist:"",  
        hasAllergy:"", allergies:"",hasRegMeds:"",regMeds:"",hasAcuteMeds:"",acuteMeds:"",hasOtcMeds:"",otcMeds:"",
        smokes:"",cigNum:"",smokingAdvice:"",smokingAdviceComments:"",nrtConsent:"",preferredNrt:"",smokingReferral:"",
        discrepancies:"",pharmReferral:"",pharmReferralComments:"",
        hasSteroids:"",longTermHigh:"",longTermHighIndication:"",hasIcs:"",ics:"",hasEmergencySteroids:"",emergencySteroids:"",
        isMca:"",isDms:"",hasDmsConsent:"",isDosette:"",chemistName:"",chemistNo:"",odsCode:"",nhsMail:"",lastSupplyDate:"", 
        commsIssues:"",commsIssuesComments:"", counsellingReq:"",counsellingReqComments:"",compliance:"",complianceComments:"",
        hasWarfarin:"",warfarinIndication:"",warfarinRange:"",warfarinDose:"",warfarinDuration:"",warfarinLastAppt:"",warfarinINR:"",warfarinClinic:"",warfarinClinicContactNo:"",warfarinClinicEmail:"",warfarinNextAppt:"",
        hasOpioidReplacement:"",opioid:"",opioidDose:"",lastOpioidSupply:"",opioidChemistNameAndNo:"",dals:"",dalsContactNo:"",keyWorkerName:"",
        medsSupply:"",topUpMeds:"",dischargePlan:"",dischargeDestination:""


    })
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
    
    
        const [renderedRegMeds,setRenderedRegMeds]= useState(regMeds)
        
        const [renderedAcuteMeds,setRenderedAcuteMeds]= useState(acuteMeds)

        const [regFormat,SetRegMedsFormat]=useState('scr')
        const [acuteFormat,setAcuteMedsFormat]=useState('scr')

        const formatregSCR=()=>{
            setRenderedRegMeds('')
            SetRegMedsFormat('scr')}

        const formatregFreetype=()=>{
            setRenderedRegMeds('')
            SetRegMedsFormat('freetype')}


            const formatAcuteSCR=()=>{
                setRenderedAcuteMeds('')
                setAcuteMedsFormat('scr')}
    
            const formatAcuteFreetype=()=>{
                setRenderedAcuteMeds('')
                setAcuteMedsFormat('freetype')}


     const sortRegMeds=()=>{
         setRenderedRegMeds(sortRepeats(regMeds))

    }
     
     const sortAcuteMeds=()=>{
        setRenderedAcuteMeds(sortAcutes(acuteMeds))    
        
    }       
    useEffect(()=>{
        setFormData(prev=>({...prev,regMeds:""}))
    },[regFormat])
    useEffect(()=>{
        setFormData(prev=>({...prev,acuteMeds:""}))
    },[acuteFormat])
    useEffect(()=>{
        setRenderedRegMeds(regMeds)
    },[regMeds])
    
    useEffect(()=>{
        setRenderedAcuteMeds(acuteMeds)
    },[acuteMeds])

    useEffect(()=>{
     setFormData(prev=>({...prev,SCRupdated:""}))   
    },[SCR])
    useEffect(()=>{
        setFormData(prev=>({...prev,eTTADate:""}))   
       },[eTTA])
    useEffect(()=>{
        setFormData(prev=>({...prev,lastSupplyDate:""}))   
       },[isDosette])
    useEffect(()=>{
    setFormData(prev=>({...prev,warfarinLastAppt:"",warfarinNextAppt:""}))   
    },[hasWarfarin])

    useEffect(()=>{
        setFormData(prev=>({...prev,lastOpioidSupply:""}))   
        },[hasOpioidReplacement])




    const  handleChange=(e)=> {
      const {name, value, type, checked} = e.target
      setFormData(prev => ({
              ...prev,
              [name]: type === "checkbox" ? checked : value
          })
      )
  
      

  }
  return { form,sortAcuteMeds,sortRegMeds
    ,handleChange,renderedAcuteMeds,renderedRegMeds,formatregFreetype,formatregSCR,acuteFormat,regFormat,formatAcuteSCR,formatAcuteFreetype}
}

export default useForm