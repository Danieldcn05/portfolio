import React, { useEffect, useRef } from 'react';
import './Contact.css'; // Importa el archivo CSS para los estilos
import { FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
    const contactRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const contactSection = contactRef.current;
            const socialMenu = document.querySelector('.social-menu');
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
                if (isVisible) {
                    socialMenu.style.opacity = '0';
                    socialMenu.style.visibility = 'hidden';
                } else {
                    socialMenu.style.opacity = '1';
                    socialMenu.style.visibility = 'visible';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert(`${text} copiado al portapapeles`);
    };

    return (
        <div className="contact" id="contact" ref={contactRef}>
            <h2>¡Gracias por su tiempo!</h2>
            <p>Agradezco que hayas dedicado un momento para explorar mi trabajo. Si te interesa colaborar o tienes alguna pregunta, no dudes en contactarme:</p>
            <div className='contact_icons'>
                <div className='cont'>
                    <div className='contact_icon' onClick={() => copyToClipboard('danieldcn05@gmail.com')}>
                        <a ><HiOutlineMail /></a>
                        <p>danieldcn05@gmail.com</p>
                    </div>

                    <div className='contact_icon' onClick={() => copyToClipboard('605483561')}>
                        <a><FaPhoneAlt /></a>
                        <p>605 48 35 61</p>
                    </div>

                </div>

                <div className='cont'>
                    <div className='contact_icon'>
                        <a href="https://www.linkedin.com/in/daniel-del-cerro-navarro-2042142b2/" target="_blank">
                            <FaLinkedin />
                        </a>
                        <p>Daniel del Cerro Navarro</p>
                    </div>

                    <div className='contact_icon'>
                        <a href="https://github.com/Danieldcn05" target="_blank">
                            <FaGithub />
                        </a>
                        <p>Danieldcn05</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;