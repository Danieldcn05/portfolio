// TechCard.js
import React from 'react';
import './Proyecto.css';

const Proyecto = ({ img, name,subtitle, info, linkGit, linkDemo }) => {
    return (
        <div class="projcard projcard-blue">
            <div class="projcard-innerbox">
                <img class="projcard-img" src={img} />
                <div class="projcard-textbox">
                    <div class="projcard-title">{name}</div>
                    <div class="projcard-subtitle">{subtitle}</div>
                    <div class="projcard-bar"></div>
                    <div class="projcard-description">{info}</div>
                    
                    <button class="projcard-button" onClick={() => window.open(linkGit, '_blank')}>GitHub</button>
                    <button class="projcard-button" onClick={() => window.open(linkDemo, '_blank')}>Demo</button>

                    
                    
                </div>
            </div>
        </div>  
    );
};

export default Proyecto;