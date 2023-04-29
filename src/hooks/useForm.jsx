import React,{ useState } from "react"


const useForm = () => {


    const [form,setFormData]=useState({
        
        completedBy:"",reconciledBy:"",transcribedBy:"",dateCompleted:"",timeCompleted:"",
        medReviewRequired:"",medReviewComments:"",  
        hasAllergy:"", allergies:"",hasRegMeds:"",regMeds:"",hasAcuteMeds:"",acuteMeds:"",hasOtcMeds:"",otcMeds:"",
        smokes:"",cigNum:"",smokingAdvice:"",smokingAdviceComments:"",nrtConsent:"",preferredNrt:"",smokingReferral:"",
        discrepancies:"",pharmReferral:"",pharmReferralComments:"",
        hasSteroids:"",longTermHigh:"",longTermHighIndication:"",hasIcs:"",ics:"",hasEmergencySteroids:"",emergencySteroids:"",
        isMca:"",isDms:"",hasDmsConsent:"",isDosette:"",chemistName:"",chemistNo:"",odsCode:"",nhsMail:"",lastSupplyDate:"", 
        commsIssues:"",commsIssuesComments:"", counsellingReq:"",counsellingReqComments:"",compliance:"",complianceComments:"",
        hasWarfarin:"",warfarinIndication:"",warfarinRange:"",warfarinDose:"",warfarinDuration:"",warfarinLastAppt:"",warfarinINR:"",warfarinClinic:"",warfarinClinicContactNo:"",warfarinClinicEmail:"",warfarinNextAppt:"",
         

    })

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