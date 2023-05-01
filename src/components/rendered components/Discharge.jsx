import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'

const Discharge = () => {

const {form:{medsSupply,topUpMeds,dischargePlan,dischargeDestination}}=useFormContext()

  return (
    <Fragment>

        <p className='container '>
            
            Medications for discharge:
            {medsSupply==='ownSupply'? 'Has own supply at home, supply new and changed medicines only'
            :medsSupply==='topUp'? `Has own supply at home but needs the following medicines only ${topUpMeds}`
            :'Supply All' 
            
            
            }

            </p >

        <p className='container'>Discharge plan </p>

        <p className='container'>Expected to be discharged to:
        {dischargePlan==='nursingHome'?' Nursing Home'
        :dischargePlan==='notKnown'?' Not known on admission'
        :dischargePlan==='other'?  dischargeDestination
        : ' Own home'

        }  </p>     

    </Fragment>
  )
}

export default Discharge