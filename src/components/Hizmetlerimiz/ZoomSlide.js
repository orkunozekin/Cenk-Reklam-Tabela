import React, { useEffect, useState } from 'react'
import STORE from '../STORE';
import { Zoom } from 'react-slideshow-image';
import './Hizmetlerimiz.css';

const zoomOutProperties = {
    duration: 60000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
};



const ZoomSlide = () => {
    return (
        <div className="slide-container">
            {STORE.map((service, key) => {
                return <section key={key} className="zoom-slide">
                    <h3 className="h3">{service.name}</h3>
                    <Zoom {...zoomOutProperties}>
                        {
                            service.images.map((each, index) => <img className="img" key={index} style={{ width: "100%" }} src={each.img} />)
                        }
                    </Zoom>
                </section>
            })}

        </div>
    );
};


export default ZoomSlide
