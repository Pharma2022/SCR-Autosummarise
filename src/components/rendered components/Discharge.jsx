import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import Title from '../Title'

const Discharge = () => {

const {form}=useFormContext()
const {medsSupply,topUpMeds,dischargePlan,dischargeDestination}=form

  return (
    <Fragment>

        <Title> Medications for discharge:</Title>
        <p>
            {medsSupply==='ownSupply'? 'Has own supply at home, supply new and changed medicines only'
            :medsSupply==='topUp'? `Has own supply at home but needs the following medicines only ${topUpMeds}`
            :'Supply All'}
            </p >

        <Title>Discharge plan </Title>

        <p>Expected to be discharged to:
        {dischargePlan==='nursingHome'?' Nursing Home'
        :dischargePlan==='notKnown'?' Not known on admission'
        :dischargePlan==='other'?  dischargeDestination
        : ' Own home' }  </p>     

    </Fragment>
  )
}

export default Discharge