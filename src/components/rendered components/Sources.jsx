import React from 'react'
import { useFormContext } from '../../context/formContext'
import { formatDate } from '../../helper'
import Title from '../Title'

const Sources = ({children}) => {
    const {form:{SCR,SCRupdated,patient,eTTA,eTTADate,pods,carer,nursingHome,GP,chemist,nok,nokName,nokContact,
                  
    }}=useFormContext()
  return (
    <div>
      <Title>Drug History </Title>
      <Title>Sources</Title>
      <ul >
        {SCR?           <li> {'SCR'} last updated: {formatDate(SCRupdated)}     </li>:null}
        {patient?       <li> {'Patient'}                                        </li>:null}
        {eTTA?          <li> {'TTA'} {formatDate(eTTADate)}                     </li>:null}
        {pods?          <li> {'Pods'}                                           </li>:null}
        {carer?         <li> {'Carer'}                                          </li>:null}
        {nursingHome?   <li> {'Nursing Home'}                                   </li>:null}
        {GP?            <li> {'GP'}                                             </li>:null}
        {chemist?       <li> {'Community Pharmacy'}                             </li>:null}
        {nok?           <li> {`${nokName} ${nokContact}` }                      </li>:null}
        {children}
      </ul>
      </div>
  )
}

export default Sources