import React from 'react'
import CompletedBy from './rendered components/CompletedBy'
import Sources from './rendered components/Sources'
import Medications from './rendered components/Medications'
import Smoking from './rendered components/Smoking'
import Discrepancies from './rendered components/Discrepancies'

const Render = () => {
  return (
    <div className='render container flex-col'>
        <CompletedBy/>
        <Sources/>
        <Medications/>
        <Smoking/>
        <Discrepancies/>
    
    
    </div>
  )
}

export default Render