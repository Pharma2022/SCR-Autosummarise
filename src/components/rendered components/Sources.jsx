import React from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate } from '../../helper'

const Sources = () => {
    const {form:{SCR,SCRupdated,patient,eTTA,eTTADate,pods,carer,nursingHome,GP,chemist}}=useFormContext()
  return (
    <div>
      <p className='bold underline'>Sources</p>
      <ul>
        {SCR?           <li> {'SCR'} last updated: {formatDate(SCRupdated)}     </li>:null}
        {patient?       <li> {'Patient'}                                        </li>:null}
        {eTTA?          <li> {'TTA'} {formatDate(eTTADate)}                     </li>:null}
        {pods?          <li> {'Pods'}                                           </li>:null}
        {carer?         <li> {'Carer'}                                          </li>:null}
        {nursingHome?   <li> {'Nursing Home'}                                   </li>:null}
        {GP?            <li> {'GP'}                                             </li>:null}
        {chemist?       <li> {'Community Pharmacy'}                             </li>:null}
      </ul>
      </div>
  )
}

export default Sources