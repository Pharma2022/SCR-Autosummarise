import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { NavItemLink } from "./Navbar";

const Layout=()=>{
     
    return (
        <>
        <Navbar/>
        {/* <nav className="secondary-nav flex-row">    
          
          <button><Link to={'/'}>Home</Link></button>
          <button><Link to={'/contact'}>Contacts</Link>
          </button>
        </nav> */}
        <Outlet/>
   
        </>
    )
}
export default Layout