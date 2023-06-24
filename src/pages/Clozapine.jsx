import React from 'react'
import ClozapineForm from '../components/ClozapineForm'
import ClozapineRender from '../components/ClozapineRender'

const Clozapine = () => {
    console.log('hello')
  return (
 <div className='wrapper flex-row'>
    <ClozapineForm/>
    <ClozapineRender/>
    

 </div>
  )
}

export default Clozapine