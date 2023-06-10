import React, { useState } from 'react';


const CopyButton=({copy,isCopied,text})=>(  <span className='flex-row copy-container'>
<p onClick={copy} className="email pointer">
  {text}
</p>
<button className='copy-button' onClick={copy} disabled={isCopied}>
{isCopied ? 'Copied!' : 'Copy'}
</button>

</span>)




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
        <CopyButton copy={copyEmail} isCopied={isEmailCopied} text={email} />
        <CopyButton copy={copyTel}   isCopied={isTelCopied}   text={tel} />
  
    </div>
  );
};

export default ContactItem;
