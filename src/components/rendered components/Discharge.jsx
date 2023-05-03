import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'

const Discharge = () => {

const {form}=useFormContext()
const {medsSupply,topUpMeds,dischargePlan,dischargeDestination}=form

  return (
    <Fragment>

        <p  className='bold underline'>
            
            Medications for discharge:
            {medsSupply==='ownSupply'? 'Has own supply at home, supply new and changed medicines only'
            :medsSupply==='topUp'? `Has own supply at home but needs the following medicines only ${topUpMeds}`
            :'Supply All' 
            
            
            }

            </p >

        <p className='bold underline'>Discharge plan </p>

        <p className='bold underline'>Expected to be discharged to:
        {dischargePlan==='nursingHome'?' Nursing Home'
        :dischargePlan==='notKnown'?' Not known on admission'
        :dischargePlan==='other'?  dischargeDestination
        : ' Own home'

        }  </p>     

    </Fragment>
  )
}

export default Discharge