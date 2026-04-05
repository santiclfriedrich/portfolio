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
import { useReveal } from '@/app/hooks/useReveal';

const row1 = [
  { icon: <IoLogoJavascript className='icon-js' />,    label: 'JavaScript' },
  { icon: <FaReact className='icon-react' />,          label: 'React' },
  { icon: <FaNode className='icon-node' />,            label: 'Node.js' },
  { icon: <SiNextdotjs className='icon-next' />,       label: 'Next.js' },
  { icon: <SiRedux className='icon-redux' />,          label: 'Redux' },
  { icon: <SiExpress className='icon-express' />,      label: 'Express' },
  { icon: <SiTailwindcss className='icon-tailw' />,    label: 'Tailwind' },
  { icon: <FaGitAlt className='icon-git' />,           label: 'Git' },
]

const row2 = [
  { icon: <SiVite className='icon-vite' />,            label: 'Vite' },
  { icon: <FaHtml5 className='icon-html' />,           label: 'HTML5' },
  { icon: <FaCss3Alt className='icon-css' />,          label: 'CSS3' },
  { icon: <FaBootstrap className='icon-boots' />,      label: 'Bootstrap' },
  { icon: <BiLogoPostgresql className='icon-postgre' />, label: 'PostgreSQL' },
  { icon: <DiMongodb className='icon-mongo' />,        label: 'MongoDB' },
  { icon: <SiSequelize className='icon-seq' />,        label: 'Sequelize' },
  { icon: <FaGithub className='icon-github' />,        label: 'GitHub' },
]

const About = () => {

  const {currentLanguage} = useStoreLanguage();

  const refHeader = useReveal(0.1)
  const refDesc   = useReveal(0.1)
  const refEd     = useReveal(0.1)
  const refExp    = useReveal(0.1)
  const refTech   = useReveal(0.1)

  const title = currentLanguage === 'es' ? 'Sobre mi' : 'About me'

  const paragraph1 = currentLanguage === 'es'
    ? 'Desarrollador web orientado al Front-end con 3 años de experiencia en proyectos personales y académicos, trabajando con tecnologías como React, Node y Nextjs'
    : 'Front-end focused web developer with 3 years of experience in personal and academic projects, working with technologies such as React, Node, and Next.js.'

  const paragraph2 = currentLanguage === 'es'
    ? 'A través de una capacitación intensiva en desarrollo de software y habilidades interpersonales con JP Morgan y Fundación Pescar, obtuve una beca para estudiar Ingeniería en Informática en la Universidad del Salvador. También accedí a becas para cursos complementarios en Análisis de Datos y Ciberseguridad, que ampliaron mi formación técnica.'
    : 'Through an intensive training program in software development and interpersonal skills with JP Morgan and Fundación Pescar, I was awarded a scholarship to study Computer Engineering at Universidad del Salvador. I also received additional scholarships for complementary courses in Data Analysis and Cybersecurity, which expanded my technical education.'

  const paragraph3 = currentLanguage === 'es'
    ? 'Me destaco por mi capacidad para resolver problemas, la autocrítica y el trabajo en equipo. Actualmente sigo perfeccionándome de manera autodidacta y busco mi primera oportunidad profesional como desarrollador.'
    : 'I stand out for my problem-solving skills, self-criticism, and ability to work in a team. I am currently continuing to improve through self-learning and seeking my first professional opportunity as a developer.'

  const education     = currentLanguage === 'es' ? 'Educación'  : 'Education'
  const coderhouse    = currentLanguage === 'es' ? 'Carrera de Desarrollo Full stack' : 'Full Stack Development Career'
  const pescar        = currentLanguage === 'es' ? 'Desarrollo Full Stack + Habilidades Interpersonales' : 'Full Stack Development + Soft Skills'
  const usal          = currentLanguage === 'es' ? 'Lic. en Sistemas de Información' : 'Information Systems Degree'

  const experience    = currentLanguage === 'es' ? 'Experiencia'      : 'Experience'
  const ecommerceRole = currentLanguage === 'es' ? 'Responsable Ecommerce' : 'Ecommerce Manager'
  const present       = currentLanguage === 'es' ? 'Actualidad'       : 'Present'

  const technology    = currentLanguage === 'es' ? 'Tecnologías'      : 'Technologies'
  const technologysub = currentLanguage === 'es'
    ? 'Algunas de las tecnologías que manejo hasta el momento.'
    : 'Here you can see some of the technologies I currently handle.'

  return (
    <div className='about-container sm:px-6 lg:px-8' id='about-page'>
      <div className='about-content max-w-3xl mx-auto'>

        <h2 ref={refHeader} className='reveal sm:text-sm lg:text-5xl font-semibold mb-4 text-center'>{title}</h2>

        <div ref={refDesc} className='reveal reveal-delay-1 about-description space-y-2 text-center'>
          <p>{paragraph1}</p>
          <p className='pt-5'>{paragraph2}</p>
          <p className='pt-5'>{paragraph3}</p>
        </div>

        <div ref={refEd} className='reveal about-ed-container space-y-2'>
          <div className='about-ed'>
            <h3>{education}</h3>

            <div className='about-ed-description space-y-2'>
              <div className="left-text">{usal}</div>
              <div className="right-text">Universidad del Salvador</div>
              <p className="date">2025</p>
            </div>

            <div className='about-ed-description2'>
              <div className="left-text">{pescar}</div>
              <div className="right-text">JP Morgan - Pescar</div>
              <p className="date">2024</p>
            </div>

            <div className='about-ed-description3 space-y-2'>
              <div className="left-text">{coderhouse}</div>
              <div className="right-text">Coderhouse</div>
              <p className="date">2021 - 2022</p>
            </div>
          </div>
        </div>

        <div ref={refExp} className='reveal about-exp-container space-y-2'>
          <div className='about-exp'>
            <h3>{experience}</h3>

            <div className='about-ed-description'>
              <div className="left-text">{ecommerceRole}</div>
              <div className="right-text">Argentina Color</div>
              <p className="date">Ago 2025 - {present}</p>
            </div>
          </div>
        </div>

        <div ref={refTech} className='reveal technologies-container'>
          <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold text-center'>{technology}</h3>
          <p>{technologysub}</p>

          <div className='marquee-wrapper'>

            <div className='marquee-row'>
              <div className='marquee-track'>
                {[...row1, ...row1].map((tech, i) => (
                  <div className='marquee-item' key={`r1-${i}`}>
                    <div className='marquee-icon'>{tech.icon}</div>
                    <span className='marquee-label'>{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='marquee-row'>
              <div className='marquee-track'>
                {[...row2, ...row2].map((tech, i) => (
                  <div className='marquee-item' key={`r2-${i}`}>
                    <div className='marquee-icon'>{tech.icon}</div>
                    <span className='marquee-label'>{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About
