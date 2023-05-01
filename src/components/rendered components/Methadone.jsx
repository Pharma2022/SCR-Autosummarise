import React, { Fragment } from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate } from '../../helper'

const Methadone = () => {

    const {form:{ hasOpioidReplacement,opioid,opioidDose,lastOpioidSupply,opioidChemistNameAndNo,dals,dalsContactNo,keyWorkerName,}}=useFormContext()
  return (
    <div className='container flex-col'>
        <p className='bold underline'>Methadone/Buprenorphine : {hasOpioidReplacement? opioid :"Nil"}</p>
        {hasOpioidReplacement&&
        <Fragment>
        <p>Dose: {opioidDose}</p>
        <p>Last Supply {formatDate(lastOpioidSupply)}</p>    
        <p>Chemist name and number : {opioidChemistNameAndNo}</p>
        <p>Details of drug advisory service: {dals}</p>
        <p>Telephone: {dalsContactNo}</p>
        <p>Key Worker: {keyWorkerName}</p>    
        </Fragment>}
    </div>
  )
}

export default Methadone