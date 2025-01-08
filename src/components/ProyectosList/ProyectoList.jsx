// TechCardList.js
import React from 'react';
import Proyecto from '../Proyecto/Proyecto';
import './ProyectoList.css';

const ProyectoList = ({ proyectos }) => {
  return (
    <div className='cont-p' id='proyectos'>
        <h2>Proyectos</h2>
        <div className="tech-card-list">
        {proyectos.map((proyecto) => (
            <Proyecto name={proyecto.name} info={proyecto.info} img={proyecto.img} linkGit={proyecto.linkGit} linkDemo={proyecto.linkDemo} subtitle={proyecto.subtitle} />
        ))}
        </div>
    </div>
    
  );
};

export default ProyectoList;