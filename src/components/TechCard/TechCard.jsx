// TechCard.js
import React, { useState } from 'react';
import './TechCard.css';
import Modal from '../Modal/Modal';

const TechCard = ({ logo, name, info }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="tech-card" onClick={handleOpenModal}>
        <img src={logo} alt={`${name} logo`} className="tech-logo" />
        <h3>{name}</h3>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} logo={logo} name={name} info={info} />
    </div>
  );
};

export default TechCard;