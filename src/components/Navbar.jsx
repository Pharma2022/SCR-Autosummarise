import React,{useState} from 'react'
import { nanoid } from 'nanoid'
import { navLinks } from '../data'
const NavItem=({active,href,title,onClick,id})=>(      
<li className={`nav-item ${active?"active":""}`} >
<a className="nav-link" onClick={onClick} href={href} id={id} target="_blank">{title}</a>
</li>)



const Navbar = () => {

    const [links,setLinks]=useState(navLinks)
    console.log(links)

    const handleChange=(ID)=>{
        setLinks(prev=>prev.map(item=>({...item,active:item.id===ID? true:false })))



    }



  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Clinical applications</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav ml-auto">
        {links.map(({active,href,title,id})=>(<NavItem active={active} href={href} title={title} key={id} onClick={()=>handleChange(id)} />))}
 
      </ul>
    </div>
  </nav>
  )
}

export default Navbar