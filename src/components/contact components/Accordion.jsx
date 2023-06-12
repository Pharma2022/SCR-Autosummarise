
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import useAccordion from '../../hooks/useAccordion';
const Accordion = ({placeholder,title,arr }) => {
  const {renderContacts,filterContacts,search,shown,toggleShown,handleChange}=useAccordion()
    
      
      return (<> 
                  <h3 onClick={toggleShown} className="flex-row pointer accordion-icon">
                     {title} Contacts <FontAwesomeIcon icon={shown ? faChevronUp : faChevronDown} />
                  </h3>
                  {shown&&(
                  <>
                    <input className='search-input' 
                        type="text" 
                        value={search} 
                        onChange={handleChange} 
                        placeholder={placeholder} />
                    {renderContacts(filterContacts(arr,search))}
                  </>)
          }
          
          
           </>)

}
export default Accordion