import React from "react";
import { nanoid, } from "nanoid";

export function sortRepeats(str) {
  const medsArr = [];
  const medsStrArr = str.split(/\n(?=Repeat)/);
  for (let i = 0; i < medsStrArr.length; i++) {
    const medStr = medsStrArr[i].trim();
    const medObj = {};
    let [repeatType, issueDate, name, instructions, quantity] = medStr.split(/\t/);
    medObj.repeatType = repeatType;
    medObj.issueDate = issueDate.split(": ")[1];
    medObj.name = name;
    medObj.instructions = instructions;
    medObj.quantity = quantity;
    let supportingInfoMatch = medStr.match(/Supporting Information: \[(.*)\]/);
    if (supportingInfoMatch) {
      medObj.supportingInformation = supportingInfoMatch[1];
    }
    // handle 'Authorised (not issued):' case
    let authorisedMatch = medStr.match(/Authorised(?: \(not issued\))?: ([^\t]*)/);
    if (authorisedMatch) {
      medObj.authorisedDate = authorisedMatch[1];
    }
    medsArr.push(medObj);
  }
  medsArr.sort((a, b) => a.name.localeCompare(b.name));
    
    return   <ol>
    {medsArr.map(({name,instructions})=>(<li key={nanoid()}>{name} {instructions}  </li>))}    </ol>
  }
  

  export function sortAcutes(str) {
    const medsArr = [];
  const medsStrArr = str.split(/\n(?=Acute Medication)/);
  for (let i = 0; i < medsStrArr.length; i++) {
    const medStr = medsStrArr[i].trim();
    const medObj = {};
    const [prescribedStr, name, instructions, quantity] = medStr.split(/\t/);
    medObj.prescribed = prescribedStr.split(": ")[1];
    medObj.name = name;
    medObj.instructions = instructions;
    medObj.quantity = quantity;
    medsArr.push(medObj);
  }

  // sort the medications array by name
  medsArr.sort((a, b) => a.name.localeCompare(b.name));
    
    return   <ol>
    {medsArr.map(({name,instructions,quantity})=>(<li key={nanoid()}> {instructions} {quantity} </li>))}    </ol>
  }



  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const daySuffix = getDaySuffix(day);
  


    return isNaN(day) ?null: `${day}${daySuffix} ${month} ${year}`;
  }
  
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
  
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  
  export {formatDate}


  export const sortContactsByName=(contacts)=> contacts.sort(({name:a}, {name:b}) => a.localeCompare(b));
  

  export const arrayModifyForAccordion=arr=>arr.map(({name,postCode,tel,email})=>({name:`${name} ${postCode}`,tel,email })

  )

  export const singleOrDouble= element=>element.split('\n').length?
  <ul>{ element.split('\n').map(item=>(<li key={nanoid()}>{item}</li>))  }</ul>:
  <p>{element}</p>