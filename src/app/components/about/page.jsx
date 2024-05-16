'use client'
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
import { useStoreLanguage } from '@/app/zustand';


const About = () => {

const {currentLanguage} = useStoreLanguage();

const title = currentLanguage === 'es' ? 'Sobre mi' : 'About me';

const paragraph1 = currentLanguage === 'es' 
? 'Desarrollador web orientado al Front-end con 2 años de experiencia en proyectos personales y académicos, trabajando con tecnologías como React, Node y Nextjs'
:
'Front-end focused web developer with 2 years of experience in personal and academic projects, working with technologies such as React, Node, and Next.js.'

const paragraph2 = currentLanguage === 'es' 
? 'Me considero una persona con gran resolución de problemas, buena capacidad autocrítica y capaz de trabajar en equipo. '
:
'I consider myself a person with great problem-solving skills, good self-critical ability, and capable of working in a team'

const paragraph3 = currentLanguage === 'es' 
? 'Actualmente me encuentro estudiando y practicando de manera autodidacta, en busca de una oportunidad en el área del desarrollo web. '
:
'Currently, I am studying and practicing self-taught, in search of an opportunity in the web development field.'

const education = currentLanguage === 'es' ? 'Educación' : 'Education'
const coderhouse = currentLanguage === 'es' ? "Carrera de Desarrollo Full stack" : 'Full Stack Development Career'
const henry = currentLanguage === 'es' ? 'Desarrollo Full Stack' : 'Full Stack Development'

const technology = currentLanguage === 'es' ? 'Tecnologías' : 'Technologies'
const technologysub = currentLanguage === 'es'
? 'Algunas de las tecnologías que manejo hasta el momento.'
: 'Here you can see some of the technologies I currently handle.'


  return (
    <div className='about-container sm:px-6 lg:px-8 ' id='about-page' >

        <div className='about-content max-w-3xl mx-auto ' >
            <h2 className='sm:text-sm lg:text-5xl font-semibold mb-4 text-center'>{title}</h2>

            <div className='about-description space-y-2 text-center'>
                  <p>{paragraph1}</p>
                  <p className='pt-5'> {paragraph2} </p>
                  <p className='pt-5'> {paragraph3}</p>
            </div>

            <div className='about-ed-container space-y-2' >
              <div className='about-ed'>
                    <h3>{education}</h3>

                    <div className='about-ed-description space-y-2 '>
                        <p>{coderhouse}  <span>Coderhouse</span></p>
                        <p className='date'>2021 - 2022</p>
                    </div>

                    <div className='about-ed-description2'>
                        <p>{henry}  <span>Henry</span></p>
                        <p className='date'> 2023 </p>
                    </div>

              </div>
            </div>
            
            <div className='technologies-container' >

            <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-center'>{technology}</h3>

            <p>{technologysub}</p>

            <div className='technologies' >     

              <div className='container-grid sm:grid-cols-4 gap-2 lg:gap-8 md:gap-8 justify-center items-center sm:w-11/12 md:w-5/6 lg:w-11/12 xl:w-11/12'>

                  <div className='technology' >
                      <IoLogoJavascript className='icon-js icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <FaReact className='icon-react icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <FaNode className='icon-node icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>


                  <div className='technology' >
                      <SiNextdotjs className='icon-next icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <SiRedux className='icon-redux  icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <SiExpress className='icon-express icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <SiTailwindcss className='icon-tailw icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <FaGitAlt className='icon-git icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <SiVite className='icon-vite icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>


                  <div className='technology' >
                      <FaHtml5 className='icon-html icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <FaCss3Alt className='icon-css icons text-4xl sm:text-5xl lg:text-6xl text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <FaBootstrap className='icon-boots icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <BiLogoPostgresql className='icon-postgre icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <DiMongodb className='icon-mongo icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <SiSequelize className='icon-seq icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

                  <div className='technology' >
                      <FaGithub className='icon-github icons text-4xl sm:text-5xl lg:text-6xl' />
                  </div>

              </div>

            </div>
          </div>

              

        </div>      
    </div>
  )
}

export default About