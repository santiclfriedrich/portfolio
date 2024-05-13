"use client"
import './burguer.css'
// En tu archivo BurgerMenu.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const BurgerMenu = ({ isOpen, toggleMenu, scrollToSection }) => {
    return (
        <div className="burger-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className='burger-icon' />
            <ul className={`burger-menu-links ${isOpen ? 'active' : ''}`}>
                <li onClick={() => scrollToSection('introduction-page')}>
                    Inicio
                </li>
                <li onClick={() => scrollToSection('about-page')}>
                    Sobre Mi
                </li>
                <li onClick={() => scrollToSection('projects-page')}>
                    Proyectos
                </li>
                <li onClick={() => scrollToSection('contact-page')}>
                    Contacto
                </li>
            </ul>
        </div>
    );
}


export default BurgerMenu;

