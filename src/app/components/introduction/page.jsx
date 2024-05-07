import './introduction.css'
import Image from 'next/image'
import me from './me.jpeg'

const Introduction = () => {
  return (
    <section className='intro-wrapper' id='introduction-page'>

          <div className='intro-container' >

            <div className='intro-image' >
              <Image src={me} alt='intro-photo' />
            </div>

            <div className='intro-header'>
                <h1>Santiago Friedrich</h1>
                <h3>Desarrollador Web</h3>
                <h4>Full-Stack</h4>
            </div>

          </div>

          
          
        
        
        
    </section>
  )
}

export default Introduction