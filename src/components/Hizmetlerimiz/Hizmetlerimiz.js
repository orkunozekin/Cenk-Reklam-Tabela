import React from 'react';
import './Hizmetlerimiz.css';
import { FaArrowCircleUp } from 'react-icons/fa';
import ZoomSlide from './ZoomSlide';

export default class Hizmetlerimiz extends React.Component {
    render() {
        return (
            <section className="hizmetlerimiz">
                <a href="#hizmet-listesi"><FaArrowCircleUp className="up"></FaArrowCircleUp></a>

                <ul id="hizmet-listesi">
                    <li><a href="#dijital-baski-list">Dijital Baskı</a></li>
                    <li><a href="#isikli-tabela-list">Işıklı Tabela</a></li>
                    <li><a href="#isiksiz-tabela-list">Işıksız Tabela</a></li>
                    <li><a href="#kutu-harf-list">Kutu Harf</a></li>
                    <li><a href="#krom-harf-list">Krom Harf</a></li>
                    <li><a href="#pleksi-harf-list">Pleksi Harf</a></li>
                    <li><a href="#light-box-list">Light Box</a></li>
                    <li><a href="#cam-giydirme-list">Cam Giydirme ve Kumlama</a></li>
                    <li><a href="#yelken-bayrak-list">Yelken-Bayrak</a></li>
                    <li><a href="#arac-kaplama-list">Araç Kaplama</a></li>
                    <li><a href="#duba-list">Duba</a></li>
                </ul>

                <div className="all-hizmetler">
                    <ZoomSlide />
                </div>
            </section>
        )
    }
}