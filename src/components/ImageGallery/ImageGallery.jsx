import React, { useEffect } from 'react';
import './ImageGallery.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const ImageGallery = ({ show, onClose, images }) => {
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
        <div className="gallery-overlay">
            <div className="gallery-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <Splide aria-label="My Favorite Images">
                    <SplideSlide>
                        <img src={images[0]} alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={images[1]} alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={images[2]} alt="Image 2" />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
};

export default ImageGallery;