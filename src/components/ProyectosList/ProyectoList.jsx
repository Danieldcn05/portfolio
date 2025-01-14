import React from 'react';
import Proyecto from '../Proyecto/Proyecto';
import './ProyectoList.css';

const ProyectoList = ({ proyectos }) => {
  return (
    <div className='cont-p' id='proyectos'>
        <h2>Proyectos</h2>
        <div className="tech-card-list">
        {proyectos.map((proyecto, index) => (
            <Proyecto key={index} name={proyecto.name} info={proyecto.info} img={proyecto.img} linkGit={proyecto.linkGit} subtitle={proyecto.subtitle} onOpenGallery={proyecto.handleOpenGallery} />
        ))}
        </div>
    </div>
  );
};

export default ProyectoList;