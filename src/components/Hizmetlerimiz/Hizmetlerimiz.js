import React from 'react';
import './Hizmetlerimiz.css';
import { FaArrowCircleUp } from 'react-icons/fa';
import ZoomSlide from './components/zoom-slide/ZoomSlide';
import STORE from '../STORE';

export default class Hizmetlerimiz extends React.Component {
    render() {
        return (
            <section className="hizmetlerimiz">
                <a href="#hizmet-listesi"><FaArrowCircleUp className="up"></FaArrowCircleUp></a>

                <ul id="hizmet-listesi">
                    {STORE.map((service, index) => {
                        return <li><a href={`#${service.id}`}>{service.name}</a></li>
                    })}
                </ul>
                <ZoomSlide />
            </section>
        )
    }
}