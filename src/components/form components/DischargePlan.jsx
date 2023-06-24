import React from 'react'
import { RadioLabel,CustomRadio } from '../form elements/Radios'
import TextInput from '../form elements/TextInput'
import { useFormContext } from '../../context/formContext'

const DischargePlan = () => {
    const {form:{dischargePlan,dischargeDestination}}=useFormContext()
  return (
    <React.Fragment>
    <RadioLabel className={'format flex-col'} label={<p className='bold underline'>Discharge Plan </p>}>
    <CustomRadio     name='dischargePlan'          value='ownHome'         property={dischargePlan} title={'Own Home'}   />
    <CustomRadio      name='dischargePlan'          value='nursingHome'     property={dischargePlan} title={'Nursing Home'}   />
    
    <CustomRadio      name='dischargePlan'          value='notKnown'        property={dischargePlan} title={'Not known on Admission'}    />
    <CustomRadio     name='dischargePlan'          value='other'           property={dischargePlan} title={'Other Please Specify'}    />

</RadioLabel>
    {dischargePlan==='other'&&
    <TextInput  name='dischargeDestination'   value={dischargeDestination} title={'Destination: '} />
    
    }
    </React.Fragment>
  )
}

export default DischargePlan