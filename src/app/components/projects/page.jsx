import './projects.css'
import Image from 'next/image'
import vortex from './vorttex.jpg'
import Link from 'next/link'
import { FaBuffer } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='projects-wrapper' id='projects-page'>
        <div className='projects-container' >

            <h2>Proyectos</h2>

            <p>A continuación podras ver algunos proyectos académicos o personales desarrollados por mí y/o en conjunto con otras personas.</p>

            <div className='icon-proj'>
              <FaBuffer className='icon-buffer' />
            </div>
            
            <p className='dest-proj'>Proyecto Destacado</p>

            <div className='projects'>

                  
                  <div className='image-container'>
                    <Link href={`https://vorttex-gaming-topabli2-topablis-projects.vercel.app/`}>
                    <Image className='image-project' src={vortex} alt='project-photo' />
                    </Link>
                  </div>  

                  <div className='projects-detail'>
                  <div className='details'>
                  <h4>Vorttex Gaming</h4>     
                    <p className='subt'>Sobre Keys de Videojuegos</p>
                    <p className='desc'>En este comercio electronico puedes buscar tus juegos favoritos, crear y gestionar tu cuenta, añadirlos al carrito y procesar su compra.</p>
                  </div>

                  </div>  
            </div>

        </div>
        </div>
  )
}

export default Projects