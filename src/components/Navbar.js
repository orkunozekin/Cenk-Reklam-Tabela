import React from 'react';
import { NavLink } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'


export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                    <i className="fa fa-bars">
                        <NavDropdown title=""  >
                            <NavDropdown.Item href="/">Ana Sayfa</NavDropdown.Item>
                            <NavDropdown.Item href="/hakkimizda">Hakkımızda</NavDropdown.Item>
                            <NavDropdown.Item href="/hizmetlerimiz">Hizmetlerimiz</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/iletisim">Iletişim</NavDropdown.Item>
                        </NavDropdown>
                    </i>
                {/* <ul id="myLinks">
                        <li>
                            <NavLink className="nav-a" to="/">Ana Sayfa</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-a" to="hakkimizda">Hakkımızda</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-a" to="/hizmetlerimiz">Hizmetlerimiz</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-a" to="/iletisim">İletişim</NavLink>
                        </li>
                    </ul> */}
            </nav>
        )
    }
}