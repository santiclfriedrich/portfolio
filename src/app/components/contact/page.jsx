"use client"
import './contact.css'
import { useState } from 'react';
import Image from 'next/image'
import me from './me.jpeg'
import { MdOutlineMail } from "react-icons/md";
import { FaCopy, FaCheck, FaPen, FaAddressCard, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { PiBagSimpleFill } from "react-icons/pi";
import Link from 'next/link';
import { useStoreLanguage } from '@/app/zustand';


const Contact = () => {

  const [email, setEmail] = useState('santiago.claros.f@gmail.com')
  const [copied, setCopied] = useState(false)

  const {currentLanguage} = useStoreLanguage()

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(email)
    .then(() => {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 1300)
    })
    .catch((error) => {
      console.error('Error al copiar el correo electrónico', error)
    })
  }

  const handleRedactClick = () => {
    window.location.href = `mailto:${email}`
  }

  const title = currentLanguage === 'es' ? 'Contacto' : 'Contact'
  const paragraph1 = currentLanguage === 'es'
  ? 'Descubrí la programación luego de terminar la secundaria y desde ese momento me propuse a aprender de manera autodidacta y con varios cursos.'
  : 'After high school, I turned into the world of programming, embarking on a journey of self-directed learning and enrolling in multiple courses to expand my knowledge.'

  const paragraph2 = currentLanguage === 'es'
  ? 'Cuento con experiencia en proyectos personales y actualmente me encuentro preparado para demostrar y desarrollar mis habilidades en un ambiente laboral.'
  : 'I have experience from personal projects and am now ready to showcase and elevate my skills in a professional environment.'

  const copy = currentLanguage === 'es' ? 'Copiar' : 'Copy'
  const compose = currentLanguage === 'es' ? 'Contactar' : 'Compose'
  const spanish = currentLanguage === 'es' ? 'Español' : 'Spanish'
  const professional = currentLanguage === 'es' ? 'Profesional' : 'Professional'

  return (
    <div className='contact-wrapper' id='contact-page'>
        <div className='contact-container'>

        <h2>{title}</h2>

        <div className='contact'>
          <div className='contact-left'>
                <div className='image-contact'>
                  <Image src={me} className='image-me' />
                  <div className='text-container'>
                    <h3>Santiago Friedrich</h3>
                    <p className='contact-subtext'>Software Dev</p>
                  </div>            
                </div>
                
                <p className='contact-descrip'>{paragraph1}</p>
                <p className='contact-descrip'> {paragraph2} </p>

                
          </div>

          <div className='contact-right'>
                <div className='email-sec' >

                  <div className='email-content'>
                  <MdOutlineMail className='email-icon' />
                    <p className='email-title'>Email</p>
                  </div>  

                    <div className='email-buttons-container'>
                    <button className='copy-button' onClick={copyToClipBoard} >
                      <span>{copy}</span>
                      {   copied ? <FaCheck className='check-icon' />  : <FaCopy className='copy-icon' /> }
                    </button>
                    <button className='redact-button' onClick={handleRedactClick}>
                      <span>{compose}</span>
                      <FaPen className='pen-icon' />
                    </button>
                    </div>    

                </div>


                <div className='cv-sec' >

                  <div className='cv-content'>
                  <FaAddressCard className='cv-icon' />
                    <p className='cv-title'>Curriculum Vitae</p>
                  </div>  

                    <div className='cv-buttons-container'>
                    
                    <Link href={`https://drive.google.com/file/d/1w63jt_CsHE1BV_p2k4nXC9D8EhQ3XXWF/view?usp=sharing`} target='_blank'>
                    <button className='cv-button'>
                      <span>{spanish}</span>
                      <FaRegFilePdf className='pdf-icon' />
                    </button>
                    </Link>
                    </div>    
              

                </div>


                <div className='pro-sec' >

                  <div className='pro-content'>
                  <PiBagSimpleFill className='pro-icon' />
                    <p className='pro-title'>{professional}</p>
                  </div>  

                    <div className='pro-buttons-container'>
                    
                    <Link href={`https://www.linkedin.com/in/santiago-martin-claros-friedrich-122323223/`} target='_blank'>
                    <button className='pro-button'>
                      <span>Linkedin / Santiago</span>
                      <FaLinkedin className='linkedin-icon' />
                    </button>
                    </Link>

                    <Link href={`https://github.com/santiclfriedrich`} target='_blank' >
                    <button className='pro-button2'>
                      <span>Github / Santiago</span>
                      <FaGithub className='github-icon' />
                    </button>
                    </Link>
                    
                    </div>    

                </div>


          </div>

        </div>

        </div>     
    </div>
  )
}

export default Contact