'use client'
import './projects.css'
import Image from 'next/image'
import vortex from './vorttex.jpeg'
import talleres from './talleres.png'
import Link from 'next/link'
import { FaBuffer } from "react-icons/fa";
import { useStoreLanguage } from '@/app/zustand';

const Projects = () => {

  const { currentLanguage } = useStoreLanguage()

  const projects = currentLanguage === 'es' ? 'Proyectos' : 'Projects'
  const projectsub = currentLanguage === 'es'
  ? 'A continuación podras ver algunos proyectos académicos o personales desarrollados por mí y/o en conjunto con otras personas.'
  : 'Below you will find some academic or personal projects developed by me and/or in collaboration with other people.'

  const featuredProject = currentLanguage === 'es' ? 'Proyecto Destacado' : 'Featured Project'

  const aboutSubVortex = currentLanguage === 'es' ? 'Sobre keys de videojuegos' : 'About video games keys'
  const aboutVortex = currentLanguage === 'es' 
  ? 'En este comercio electronico puedes buscar tus juegos favoritos, crear y gestionar tu cuenta, añadirlos al carrito y procesar su compra.'
  : 'In this e-commerce platform, you can search for your favorite games, create and manage your account, add them to the cart, and process your purchase.'

  const aboutSubTalleres = currentLanguage === 'es' ? 'Sobre talleres culturales' : 'About cultural workshops'
  const aboutTalleres = currentLanguage === 'es' ? 'En este sitio se difunde un evento cultural con talleres y actividades artísticas abiertas al público.'
  : 'This site promotes a cultural event with workshops and artistic activities open to the public.'

  return (
    <div className='projects-wrapper' id='projects-page'>
        <div className='projects-container' >

            <h2>{projects}</h2>

            <p>{projectsub}</p>

            <div className='icon-proj'>
              <FaBuffer className='icon-buffer' />
            </div>
            
            <p className='dest-proj'>{featuredProject}</p>

            <div className='projects'>

                  <div className='project-container'>

                    <div className='image-container '>
                      <Link href={`https://vorttex-gaming-topabli2-topablis-projects.vercel.app/`} target="_blank" rel="noopener noreferrer">
                      <Image className='image-project' src={vortex} alt='project-photo' />
                      </Link>
                    </div>  

                    <div className='projects-detail'>
                    <div className='details'>
                    <h4>Vorttex Gaming</h4>     
                      <p className='subt text-sm md:text-base'>{aboutSubVortex}</p>
                      <p className='desc text-sm md:text-base'>{aboutVortex}</p>
                    </div>

                    </div>  

                  </div>



                  <div className='project-container'>
                    <div className='image-container '>
                      <Link href="https://talleresabiertos.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <Image className='image-project' src={talleres} alt='project-photo'/>
                      </Link>
                    </div>  

                    <div className='projects-detail'>
                    <div className='details'>
                    <h4>Talleres Abiertos</h4>     
                      <p className='subt text-sm md:text-base'>{aboutSubTalleres}</p>
                      <p className='desc text-sm md:text-base'>{aboutTalleres}</p>
                    </div>

                    </div>  
                  </div>
            </div>

        </div>
        </div>
  )
}

export default Projects