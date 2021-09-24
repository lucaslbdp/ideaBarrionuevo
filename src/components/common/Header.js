import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import CartWidget from './CartWidget';
import "./common.css";

const Header = () => {
    return <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                        <Nav.Link href="#deets"><FontAwesomeIcon icon={faWhatsapp} /></Nav.Link>
                        <Nav.Link href="#deets"><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
                        <Nav.Link href="#deets"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                    </Nav>
                <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>

};

export default Header;