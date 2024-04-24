
import './about.css'

const About = () => {
  return (
    <div className='about-container' >

        <div className='about-content' >
            <h2>Sobre mí</h2>

            <div className='about-description'>
                  <p>Desarrollador web orientado al Front-end con 2 años de experiencia en proyectos personales y académicos, trabajando con tecnologías como React, Node y Nextjs  </p>
                  <p className='pt-5'>Me considero una persona con gran resolución de problemas, buena capacidad autocrítica y capaz de trabajar en equipo. </p>
                  <p className='pt-5'> Actualmente me encuentro estudiando y practicando de manera autodidacta, en busca de una oportunidad en el área del desarrollo web. </p>
            </div>

            <div className='about-ed-container' >
              <div className='about-ed'>
                    <h3>Educación</h3>

                    <div className='about-ed-description'>
                        <p>Carrera de Desarrollo Full Stack  <span>Coderhouse</span></p>
                        <p className='date'>2021 - 2022</p>
                    </div>

                    <div className='about-ed-description2'>
                        <p>Desarrollo Full Stack  <span>Henry</span></p>
                        <p className='date'> 2023 </p>
                    </div>

              </div>
            </div>
            

        </div>
        

    </div>
  )
}

export default About