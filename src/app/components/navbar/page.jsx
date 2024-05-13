"use client"
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject, faHome, faLanguage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { useStoreLanguage } from '@/app/zustand';

const Navbar = () => {

    const { changeCurrentLanguage, currentLanguage } = useStoreLanguage();

    const fnChangeCurrentLanguage = () => {
        changeCurrentLanguage()
    }


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)
        if (section){
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    const home = currentLanguage === 'es' ? 'Inicio' : 'Home';
    const about = currentLanguage === 'es' ? 'Sobre Mi' : 'About';
    const projects = currentLanguage === 'es' ? 'Proyectos' : 'Projects';
    const contact = currentLanguage === 'es' ? 'Contacto' : 'Contact';


  return (
    
    
        <nav className='navbar'>
            <div className='nav-container'>         
            
                <ul>    
                    <li onClick={() => scrollToSection('introduction-page') }>     
                        <div className='nav-item' >
                            <FontAwesomeIcon icon={faHome} className='icon-home' />
                            <span>{home}</span>

                        </div>
                    </li>
                </ul>

                <ul>
                    <li onClick={() => scrollToSection('about-page') }>
                        <div className='nav-item' >
                            <FontAwesomeIcon icon={faAddressCard} className='icon-aboutme' />
                            <span>{about}</span>
                        </div>
                        
                    </li>
                </ul>

                <ul>
                    <li onClick={() => scrollToSection('projects-page') }>
                    <div className='nav-item' >
                        <FontAwesomeIcon icon={faDiagramProject} className='icon-projects' />
                        <span>{projects}</span>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li onClick={() => scrollToSection('contact-page') }>
                        <div className='nav-item' >
                            <FontAwesomeIcon icon={faPhone} className='icon-contact' />
                            <span>{contact}</span>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li className='item-language'>
                        {currentLanguage === 'es' ? (
                        <div className='nav-item' onClick={fnChangeCurrentLanguage} >
                            <FontAwesomeIcon icon={faLanguage} className='icon-language'/>
                            <span>En</span>
                        </div>
                        ) : (
                            <div className='nav-item' onClick={fnChangeCurrentLanguage} >
                            <FontAwesomeIcon icon={faLanguage} className='icon-language' />
                            <span>Es</span>
                        </div>
                        )}
                    </li>
                </ul>

                

                </div>
           
        </nav>
  )
}

export default Navbar