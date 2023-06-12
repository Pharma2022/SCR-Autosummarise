import React, { useState } from 'react';


import AccordionItem from './contact components/AccordionItem';



const ContactItem = ({ name, email, tel }) => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isTelCopied, setIsTelCopied] = useState(false);

  const copyItem = async (item, setIsCopied) => {
    await navigator.clipboard.writeText(item);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const copyEmail = () => copyItem(email, setIsEmailCopied);
  const copyTel = () => copyItem(tel, setIsTelCopied);

  return (
    <div className='contact-item'>
      <p className='name bold'>{name}</p>
        <AccordionItem type={'email'} copy={copyEmail} isCopied={isEmailCopied} text={email} />
        <AccordionItem type={'tel'} copy={copyTel}   isCopied={isTelCopied}   text={tel} />
  
    </div>
  );
};

export default ContactItem;
