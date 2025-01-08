// Modal.jsx
import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ show, onClose, logo, name, info }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={logo} alt={`${name} logo`} className="modal-logo" />
        <h2>{name}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Modal;