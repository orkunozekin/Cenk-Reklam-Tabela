import React from 'react'
import { Image } from 'react-bootstrap';
import STORE from '../../../STORE';
import './Hizmetlerimiz.css';

const ImageCard = (props) => {
    return (
        <>
            <div className="slide-container">
                {STORE.map((service, key) => {
                    return <section>
                        <h3>{service.name}</h3>
                        <Image id="img" src={props.imgSrc} alt={props.imgAlt} fluid />
                    </section>
                })}

            </div>
            <li key={props.name}>

            </li>
        </>
    )
}

export default ImageCard
