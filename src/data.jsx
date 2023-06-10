import { nanoid } from "nanoid"

const navLinks=[
            
{href:"https://portal2.national.ncrs.nhs.uk/summarycarerecord/", title:'SCR',id:nanoid(),active:true },
{href:"https://epma.nmh.nhs.uk/", title:'EPMA JAC',id:nanoid(),active:false},
{href:"https://servicefinder.nhs.uk/login", title:'Service Finder',id:nanoid(),active:false},
{href:"https://connect.careflowapp.com/", title:'Careflow Connect',id:nanoid(),active:false},
{href:"https://rap-vitals.syhapp.com/vpClinical/Login#/", title:'Vitals',id:nanoid(),active:false},

]
export {navLinks}

export const medicinesInfo= [
    {
      name: "UCLH",
      email: "uclh.medicines.information@nhs.net",
      tel: "020 3447 7936"
    },
    {
      name: "NMUH",
      email: "nmu-tr.medicinesinformation@nhs.net",
      tel: "0207 887 2417"
    },
    {
      name: "Royal Free",
      email: "rf.medicinesadvice@nhs.net",
      tel: "020 7794 0500"
    },
    {
      name: "Whittington",
      email: "whh-tr.medicinesinformation@nhs.net",
      tel: "020 7288 5758"
    },
    {
      name: "Barts Health",
      email: "bartshealth.pharmacymedicinesinformation@nhs.net",
      tel: "0208 535 6971"
    },
    {
      name: "Northwick Park",
      email: "lnwh-tr.medinfo@nhs.net",
      tel: "0208 869 2761/2"
    },
    {
      name: "Royal National Orthopaedic Hospital",
      email: "gaurang.purohit@nhs.net",
      tel: "0208 909 5410"
    },
    {
      name: "Great Ormond Street Hospital",
      email: "medicines.information@gosh.nhs.uk",
      tel: "0207 829 8608"
    }
  ]
export const anticoag = [
    {
      name: "NMUH",
      email: "nmu-tr.anticoag@nhs.net",
      tel: "020 8887 2464"
    },
    {
      name: "UCLH",
      email: "uclh.referrals.anticoag@nhs.net",
      tel: "020 3447 5222"
    },
    {
      name: "Whittington",
      email: "whh-tr.anticoagulation@nhs.net",
      tel: "020 7288 3516"
    },
    {
      name: "Barnet",
      email: "bcf-tr.dawnac@nhs.net",
      tel: "020 8216 4710"
    },
    {
      name: "Royal Free",
      email: "rf.acc@nhs.net",
      tel: "020 3758 2018 / 020 7794 0500 x 36932"
    }
  ];
  