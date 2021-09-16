import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import "../../sass/app.scss";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header__navbar">
            <Container>
                <Navbar.Brand href="#home">Logo de Empresa</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#features">Inicio</Nav.Link>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Bebés</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Niños</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Dama</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><FontAwesomeIcon icon={faWhatsapp} className="header__redes"/></Nav.Link>
                        <Nav.Link href="#deets"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                        <Nav.Link href="#deets"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;