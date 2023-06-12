import React from 'react'

const ContactItemProperty=({copy,isCopied,text,type})=>(  <span className='flex-row copy-container'>
<p onClick={copy} className="email ">
 <span className='bold type pointer-no-underline'>{type}: </span> <span className='pointer'>{text}</span>
{isCopied&& <span className='copy-button'>Copied!
</span>}
</p>

</span>)

export default ContactItemProperty