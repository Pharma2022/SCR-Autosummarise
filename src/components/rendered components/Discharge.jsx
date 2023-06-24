import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import Title from '../Title'
import DischargePlan from './DischargePlan'

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

        
        <DischargePlan/>
    </Fragment>
  )
}

export default Discharge