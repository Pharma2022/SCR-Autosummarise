
import './App.css'
import Home from './pages/Home'
import Layout from './components/Layout'
import { useFormContext } from './context/formContext'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact'


function App() {
 
  const {form}=useFormContext()
  
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/title' element={<Contact/>}/>
          </Route>
        </Routes>
      
    
        
    </BrowserRouter>
  )
}

export default App
