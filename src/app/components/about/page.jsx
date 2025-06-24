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
? 'Desarrollador web orientado al Front-end con 3 años de experiencia en proyectos personales y académicos, trabajando con tecnologías como React, Node y Nextjs'
:
'Front-end focused web developer with 3 years of experience in personal and academic projects, working with technologies such as React, Node, and Next.js.'

const paragraph2 = currentLanguage === 'es' 
? 'A través de una capacitación intensiva en desarrollo de software y habilidades interpersonales con JP Morgan y Fundación Pescar, obtuve una beca para estudiar Ingeniería en Informática en la Universidad del Salvador. También accedí a becas para cursos complementarios en Análisis de Datos y Ciberseguridad, que ampliaron mi formación técnica. '
:
'Through an intensive training program in software development and interpersonal skills with JP Morgan and Fundación Pescar, I was awarded a scholarship to study Computer Engineering at Universidad del Salvador. I also received additional scholarships for complementary courses in Data Analysis and Cybersecurity, which expanded my technical education.'

const paragraph3 = currentLanguage === 'es' 
? 'Me destaco por mi capacidad para resolver problemas, la autocrítica y el trabajo en equipo. Actualmente sigo perfeccionándome de manera autodidacta y busco mi primera oportunidad profesional como desarrollador.'
:
'I stand out for my problem-solving skills, self-criticism, and ability to work in a team. I am currently continuing to improve through self-learning and seeking my first professional opportunity as a developer.'

const education = currentLanguage === 'es' ? 'Educación' : 'Education'
const coderhouse = currentLanguage === 'es' ? "Carrera de Desarrollo Full stack" : 'Full Stack Development Career'
const pescar = currentLanguage === 'es' ? 'Desarrollo Full Stack + Habilidades Interpersonales' : 'Full Stack Development + Soft Skills'
const usal = currentLanguage === 'es' ? 'Carrera de Ingeniería en Informática' : 'Computer Engineering Studies'

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
                        <p>{usal}  <span>Universidad del Salvador</span></p>
                        <p className='date'>2025</p>
                    </div>

                    <div className='about-ed-description2'>
                        <p>{pescar}  <span>JP Morgan - Pescar</span></p>
                        <p className='date'> 2024 </p>
                    </div>

                    <div className='about-ed-description3 space-y-2 '>
                        <p>{coderhouse}  <span>Coderhouse</span></p>
                        <p className='date'>2021 - 2022</p>
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