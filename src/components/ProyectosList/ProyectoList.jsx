import React, { useState } from 'react';
import Proyecto from '../Proyecto/Proyecto';
import './ProyectoList.css';
import ImageGallery from '../ImageGallery/ImageGallery';

const ProyectoList = ({ proyectos }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleOpenGallery = (images) => {
    setSelectedImages(images);
    setShowGallery(true);
    console.log('open gallery');
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
  };

  return (
    <div className='cont-p' id='proyectos'>
      <h2>Proyectos</h2>
      <div className="tech-card-list">
        {proyectos.map((proyecto, index) => (
          <Proyecto
            key={index}
            name={proyecto.name}
            info={proyecto.info}
            img={proyecto.img}
            linkGit={proyecto.linkGit}
            subtitle={proyecto.subtitle}
            onOpenGallery={() => handleOpenGallery(proyecto.images)}
          />
        ))}
      </div>
      <ImageGallery show={showGallery} onClose={handleCloseGallery} images={selectedImages} />
    </div>
  );
};

export default ProyectoList;