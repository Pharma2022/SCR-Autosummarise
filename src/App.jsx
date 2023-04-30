import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <Fragment>
      <Navbar/>
<Form/>
<div className='container'></div>
</Fragment>
  )
}

export default App
