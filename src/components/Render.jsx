import React from 'react'
import CompletedBy from './rendered components/CompletedBy'
import Sources from './rendered components/Sources'
import Medications from './rendered components/Medications'
import Smoking from './rendered components/Smoking'
import Discrepancies from './rendered components/Discrepancies'
import Steroids from './rendered components/Steroids'
import PharmaceuticalNeeds from './rendered components/PharmaceuticalNeeds'
import Warfarin from './rendered components/Warfarin'
import Discharge from './rendered components/Discharge'
import Methadone from './rendered components/Methadone'

const Render = () => {
  return (
    <div className='render container flex-col'>
        <CompletedBy/>
        <Sources/>
        <Medications/>
        <Smoking/>
        <Discrepancies/>
        <Steroids/>
        <PharmaceuticalNeeds/>
        <Warfarin/>
        <Methadone/>
        <Discharge/>

    </div>
  )
}

export default Render