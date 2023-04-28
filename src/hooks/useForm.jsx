import React,{ useState } from "react"


const useForm = () => {


    const [form,setFormData]=useState({completedBy:"",reconciledBy:"",transcribedBy:"",dateCompleted:"",timeCompleted:"",medReviewRequired:"",medReviewComments:"",
    hasAllergy:"", allergies:"",hasRegMeds:"",regMeds:"",hasAcuteMeds:"",acuteMeds:"" })
    const {completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments,hasAllergy,allergies,
        hasRegMeds,regMeds,hasAcuteMeds,acuteMeds 
    
    }=form
    const  handleChange=(e)=> {
      const {name, value, type, checked} = e.target
      setFormData(prev => ({
              ...prev,
              [name]: type === "checkbox" ? checked : value
          })
      )
  
      

  }
  return { form,completedBy,reconciledBy,transcribedBy,dateCompleted,timeCompleted,medReviewRequired,medReviewComments,
    hasAllergy,allergies,hasRegMeds,regMeds,hasAcuteMeds,acuteMeds 
    ,handleChange}
}

export default useForm