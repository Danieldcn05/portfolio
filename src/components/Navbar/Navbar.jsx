import React, { useEffect } from 'react';
import './Navbar.css';
import logoN from '../../assets/images/cohete-n.png';
import logoB from '../../assets/images/cohete-b.png';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 400) {
                navbar.classList.add('scrolled');
                navbar.querySelector('.navbar-logo').src = logoB;
            } else {
                navbar.classList.remove('scrolled');
                navbar.querySelector('.navbar-logo').src = logoN;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <img src={logoN} alt="Logo" className="navbar-logo" onClick={() => scrollToSection('inicio')} />
            <ul className="navbar-list">
                <li className="navbar-item" onClick={() => scrollToSection('inicio')}>Inicio</li>
                <li className="navbar-item" onClick={() => scrollToSection('tecnologias')}>Tecnologías</li>
                <li className="navbar-item" onClick={() => scrollToSection('proyectos')}>Proyectos</li>
                <li className="navbar-item" onClick={() => scrollToSection('contact')}>Contacto</li>
            </ul>
        </nav>
    );
};

export default Navbar;