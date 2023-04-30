import { nanoid } from "nanoid"

const navLinks=[
            
{href:"https://portal.national.ncrs.nhs.uk/portal/", title:'SCR',id:nanoid(),active:true },
{href:"https://mismiles.github.io/medr/template.html", title:'Original Template',id:nanoid(),active:false},
{href:"https://epma.nmh.nhs.uk/", title:'EPMA JAC',id:nanoid(),active:false},
{href:"https://servicefinder.nhs.uk/login", title:'Service Finder',id:nanoid(),active:false},
{href:"https://connect.careflowapp.com/", title:'Careflow Connect',id:nanoid(),active:false},
{href:"https://rap-vitals.syhapp.com/vpClinical/Login#/", title:'Vitals',id:nanoid(),active:false},

]
export {navLinks}

const x=(


<div>
<       li class="nav-item active">
          <a class="nav-link" href="https://portal.national.ncrs.nhs.uk/portal/" target="_blank">SCR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://mismiles.github.io/medr/template.html" target="_blank">Original template</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://epma.nmh.nhs.uk/" target="_blank">EPMA JAC</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://servicefinder.nhs.uk/login" target="_blank">Service finder</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://connect.careflowapp.com/" target="_blank">Careflow Connect</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://rap-vitals.syhapp.com/vpClinical/Login#/" target="_blank">Vitals</a>
        </li>
</div>


)