import React,{ useState,useEffect } from "react"


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
        medsSupply:"",topUpMeds:"",


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
            const updateForm=(element)=>setFormData(prev=>({...prev,element:""}))
    useEffect(()=>{
        updateForm(SCRupdated)
 
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
  return { form
    ,handleChange}
}

export default useForm