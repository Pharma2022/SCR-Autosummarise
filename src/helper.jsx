function splitMedications(str) {
    const medsArr = [];
    const medsStrArr = str.split(/\n(?=Repeat Medication)/);
    for (let i = 0; i < medsStrArr.length; i++) {
      const medStr = medsStrArr[i].trim();
      const medObj = {};
      if (medStr.includes("Last Issued:")) {
        const [repeat, issuedStr, name, instructions, quantity] = medStr.split(/\t/);
        medObj.repeat = repeat;
        medObj.issued = issuedStr.split(": ")[1];
        medObj.name = name;
        medObj.instructions = instructions;
        medObj.quantity = quantity;
      } else if (medStr.includes("Authorised (not issued):")) {
        const [repeat, authorisedStr, name, instructions, quantity] = medStr.split(/\t/);
        medObj.repeat = repeat;
        medObj.issued = null;
        medObj.authorised = authorisedStr.split(": ")[1];
        medObj.name = name;
        medObj.instructions = instructions;
        medObj.quantity = quantity;
      }
      medsArr.push(medObj);
    }
  
    // sort the medications array by name
    medsArr.sort((a, b) => a.name.localeCompare(b.name));
    
    return medsArr;
  }
  

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const daySuffix = getDaySuffix(day);
  
    return `${day}${daySuffix} ${month} ${year}`;
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