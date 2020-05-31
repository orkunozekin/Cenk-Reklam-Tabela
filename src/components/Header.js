import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png';

export default function Header(props) {
    return (
        <header>
            <NavLink to="/" className="logo-navlink">
                <img className="logo" src={logo} alt="cenk-reklam-tabela-logo"></img>
            </NavLink>
        </header>
    )
}