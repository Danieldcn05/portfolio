import React from 'react';
import { FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import './SocialMenu.css';
import { HiOutlineMail } from 'react-icons/hi';

const SocialMenu = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert(`${text} copiado al portapapeles`);
    };

    return (
        <div className="social-menu">
            <a onClick={() => copyToClipboard('605483561')}>
                <FaPhoneAlt />
            </a>
            <a onClick={() => copyToClipboard('danieldcn05@gmail.com')}>
                <HiOutlineMail />
            </a>
            <a href="https://www.linkedin.com/in/daniel-del-cerro-navarro-2042142b2/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/Danieldcn05" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
        </div>
    );
};

export default SocialMenu;