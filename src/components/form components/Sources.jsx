import React from 'react'
import { nanoid } from 'nanoid'
import FormDate from '../form elements/Date'
import CheckBox from '../form elements/CheckBox'
import TextInput from '../form elements/TextInput'
import { useFormContext } from '../../context/formContext'
import FormAccordion from '../form elements/FormAccordion'

const Sources = ({children}) => {
    const {form:{ nok,nokContact,nokName,},checkboxesArray}=useFormContext()
  return (
    <FormAccordion title={'Sources'}>
    <div className='checkboxes wrap'>
    {checkboxesArray.map(({name,value,title,isDate,conditional})=> isDate? (conditional&&
    <FormDate key={nanoid()} name={name} value={value}  title={title} />) :(
    <CheckBox key={nanoid()} name={name} value={value} title={title} />))}
    <CheckBox key={nanoid()} name={'nok'} value={nok} title={'Relative'}/>

    {nok? 
    <>
    <TextInput className={'mt-0'} name={'nokName'}    value={nokName}    title={'Enter name+relation to patient'}/>
    <TextInput className={'mt-0'} name={'nokContact'} value={nokContact} title={'Enter contact number'}/>
    </>:null}
    {children}
  </div>
  </FormAccordion>
  )
}

export default Sources