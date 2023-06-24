import React from 'react'
import { useFormContext } from '../../context/formContext'
import Title from '../Title'
const DischargePlan = () => {
    const {form:{dischargeDestination,dischargePlan}}=useFormContext()
  return (
    <><Title>Discharge plan </Title>

    <p>Expected to be discharged to:
    {dischargePlan==='nursingHome'?' Nursing Home'
    :dischargePlan==='notKnown'?' Not known on admission'
    :dischargePlan==='other'?  dischargeDestination
    : ' Own home' }  </p>    
    </>
  )
}

export default DischargePlan