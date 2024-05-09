"use client"
import { FaLinkedin, FaGithub,  } from 'react-icons/fa'
import { MdOutlineMail } from "react-icons/md";
import './footer.css'
import Link from 'next/link';

const Footer = () => {

  const email = 'santiago.claros.f@gmail.com'

  const handleMail = () =>{
    window.location.href = `mailto:${email}`
  }

  return (
    <div className='footer-wrapper'>
        <div className='footer-container'>
          <div className='icons-container'>

          <Link href={`https://www.linkedin.com/in/santiago-martin-claros-friedrich-122323223/`} target='_blank'>
            <FaLinkedin className='icon-linkedin' />
            </Link>

            <Link href={`https://github.com/santiclfriedrich`}>
            <FaGithub className='icon-github' />
            </Link>

            <button onClick={handleMail}>
            <MdOutlineMail className='icon-mail' />
            </button>
            


          </div>

          <p className='footer-text'>Copyright © Santiago Friedrich. Todos los derechos reservados.</p>

        </div> 
    </div>
  )
}

export default Footer