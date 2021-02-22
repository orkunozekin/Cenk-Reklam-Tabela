import React from 'react';
import logo from '../../images/favicon.ico';
import './Header.css';

export default function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Cenk Reklam</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Ana Sayfa</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/hizmetlerimiz">Hizmetlerimiz</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/iletisim">Iletisim</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/hakkimizda">Hakkimizda</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}