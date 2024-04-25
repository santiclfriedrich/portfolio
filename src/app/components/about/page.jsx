import './about.css'
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSequelize } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


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
            
            <div className='technologies-container' >

            <h3>Tecnologías</h3>

            <p>Aquí puedes ver algunas de las tecnologías que manejo hasta el momento.</p>

            <div className='technologies' >     

              <div className='container-grid'>

                  <div className='technology' >
                      <IoLogoJavascript className='icon-js' />
                  </div>

                  <div className='technology' >
                      <FaReact className='icon-react' />
                  </div>

                  <div className='technology' >
                      <FaNode className='icon-node' />
                  </div>


                  <div className='technology' >
                      <SiNextdotjs className='icon-next' />
                  </div>

                  <div className='technology' >
                      <SiRedux className='icon-redux' />
                  </div>

                  <div className='technology' >
                      <SiExpress className='icon-express' />
                  </div>

                  <div className='technology' >
                      <SiTailwindcss className='icon-tailw' />
                  </div>

                  <div className='technology' >
                      <FaGitAlt className='icon-git' />
                  </div>

                  <div className='technology' >
                      <SiVite className='icon-vite' />
                  </div>


                  <div className='technology' >
                      <FaHtml5 className='icon-html' />
                  </div>

                  <div className='technology' >
                      <FaCss3Alt className='icon-css' />
                  </div>

                  <div className='technology' >
                      <FaBootstrap className='icon-boots' />
                  </div>

                  <div className='technology' >
                      <BiLogoPostgresql className='icon-postgre' />
                  </div>

                  <div className='technology' >
                      <DiMongodb className='icon-mongo' />
                  </div>

                  <div className='technology' >
                      <SiSequelize className='icon-seq' />
                  </div>

                  <div className='technology' >
                      <FaGithub className='icon-github' />
                  </div>

              </div>

            </div>
          </div>

              

        </div>      
    </div>
  )
}

export default About