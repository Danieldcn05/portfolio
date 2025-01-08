// TechCardList.js
import React from 'react';
import TechCard from '../TechCard/TechCard';
import './TechCardList.css';

const TechCardList = ({ techs }) => {
  return (
    <div className='cont1' id="tecnologias">
        <h2>Tecnologías</h2>
        <div className="tech-card-list">
        {techs.map((tech, index) => (
            <TechCard key={index} logo={tech.logo} name={tech.name} info={tech.info} />
        ))}
        </div>
    </div>
    
  );
};

export default TechCardList;