import React from 'react'
import STORE from '../../../STORE';
import { Zoom } from 'react-slideshow-image'
import '../../Hizmetlerimiz.css'
import './ZoomSlide.css'

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
                return <section key={key} className="zoom-slide-wrapper">
                    <h3 className="h3">{service.name}</h3>
                    {service.images.length > 1 ?
                        <Zoom className='zoom-slide' {...zoomOutProperties}>
                            {
                                service.images.map((each, index) => <img id={service.id} className="img" key={index} style={{ width: "100%" }} src={each.img} />)
                            }
                        </Zoom>
                        : <img className="img" key={key} style={{ width: "100%" }} src={service.images[0].img} />
                    }

                </section>
            })}

        </div>
    );
};


export default ZoomSlide
