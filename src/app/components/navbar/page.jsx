"use client"
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject, faHome, faLanguage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';


const Navbar = () => {


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)
        if (section){
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    }


  return (
    
    
        <nav className='navbar'>
            <div className='nav-container'>         
            
                <ul>    
                    <li onClick={() => scrollToSection('introduction-page') }>     
                        <div className='nav-item' >
                            <FontAwesomeIcon icon={faHome} className='icon-home' />
                            <span>Inicio</span>

                        </div>
                    </li>
                </ul>

                <ul>
                    <li onClick={() => scrollToSection('about-page') }>
                        <div className='nav-item' >
                            <FontAwesomeIcon icon={faAddressCard} className='icon-aboutme' />
                            <span>Sobre mí</span>
                        </div>
                        
                    </li>
                </ul>

                <ul>
                    <li onClick={() => scrollToSection('projects-page') }>
                    <div className='nav-item' >
                        <FontAwesomeIcon icon={faDiagramProject} className='icon-projects' />
                        <span>Proyectos</span>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li onClick={() => scrollToSection('contact-page') }>
                        <div className='nav-item' >
                            <FontAwesomeIcon icon={faPhone} className='icon-contact' />
                            <span>Contacto</span>
                        </div>
                    </li>
                </ul>

                <ul>
                    <li className='item-language'>
                        <div className='nav-item' >
                            <FontAwesomeIcon icon={faLanguage} className='icon-language' />
                            <span>En</span>
                        </div>
                    </li>
                </ul>

                

                </div>
           
        </nav>
  )
}

export default Navbar