import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Render from './components/Render'
import CompletedBy from './components/rendered components/CompletedBy'

function App() {
 

  return (
    <Fragment>
      <Navbar/>
     
<div className='wrapper flex-row'>
  <Form/>
   <CompletedBy/> 
</div>
</Fragment>
  )
}

export default App
