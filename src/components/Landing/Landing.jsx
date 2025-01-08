import React from 'react';
import './Landing.css'; // Importa el archivo CSS para los estilos
import perfilImage from '../../assets/images/imagen_perfil.jpg'; // Importa la imagen
import curriculumPDF from '../../assets/curr.pdf'; // Importa el PDF

function Landing() {
    const handleButtonClick = () => {
        window.open(curriculumPDF, '_blank');
    };

    return (
        <div className="landing" id="inicio">
            <div className="landing-content">
                <div className="landing-text">
                    <h1 className="landing-title">Daniel del Cerro</h1>
                    <p className="landing-info">Desarrollador de Software Fullstack</p>
                    <button onClick={handleButtonClick}>Ver Curriculum</button>
                </div>
                <img src={perfilImage} alt="Tu Nombre" className="landing-image" />
            </div>
        </div>
    );
}

export default Landing;