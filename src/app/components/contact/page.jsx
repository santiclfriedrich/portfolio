import './contact.css'
import Image from 'next/image'
import me from './me.jpeg'

const Contact = () => {
  return (
    <div className='contact-wrapper' id='contact-page'>
        <div className='contact-container'>

        <h2>Contacto</h2>

        <div className='contact'>
          <div className='contact-left'>
                <div className='image-contact'>
                  <Image src={me} className='image-me' />
                  <div className='text-container'>
                    <h3>Santiago Friedrich</h3>
                    <p className='contact-subtext'>Full Stack Dev</p>
                  </div>            
                </div>
                
                <p className='contact-descrip'>Descubrí la programación luego de terminar la secundaria y desde ese momento me propuse a aprender de manera autodidacta y con varios cursos.  </p>
                <p className='contact-descrip'> Cuento con experiencia en proyectos personales y actualmente me encuentro preparado para demostrar y desarrollar mis habilidades en un ambiente laboral. </p>

                
          </div>

          <div className='contact-right'>
                <div className='email-sec' >
                    
                </div>
          </div>

        </div>

        </div>     
    </div>
  )
}

export default Contact