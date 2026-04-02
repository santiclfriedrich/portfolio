'use client'
import './introduction.css'
import Image from 'next/image'
import me from './intro-me.jpeg'
import { useStoreLanguage } from '@/app/zustand'

const Introduction = () => {

  const { currentLanguage } = useStoreLanguage()

  const present1 = currentLanguage === 'es' ? 'Desarrollador Web' : 'Full-Stack Web';
  const present2 = currentLanguage === 'es' ? 'Full-Stack' : 'Developer';

  return (
    <section className='intro-wrapper' id='introduction-page'>

          <div className='intro-container'>

            <div className='intro-image intro-fade-up' style={{ animationDelay: '0.1s' }}>
              <Image src={me} alt='intro-photo' />
            </div>

            <div className='intro-header'>
                <h1 className='intro-fade-up' style={{ animationDelay: '0.2s' }}>Santiago Friedrich</h1>
                <h3 className='intro-fade-up' style={{ animationDelay: '0.35s' }}>{present1}</h3>
                <h4 className='intro-fade-up typing-cursor' style={{ animationDelay: '0.5s' }}>{present2}</h4>
            </div>

          </div>

    </section>
  )
}

export default Introduction
