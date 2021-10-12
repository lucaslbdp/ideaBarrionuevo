import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import CartWidget from './CartWidget';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import ItemListContainer from '../items/ItemListContainer';
import ItemDetailContainer from "../items/Item";
import slider1 from "../../img/slider1.jpg";
import "./common.css";

const NavBar = () => {

    return (
        <Router>
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Logo de Empresa</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="/ItemListContainer">Inicio</Nav.Link>
                                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/Category/:categoriaId">Bebés</NavDropdown.Item>
                                    <NavDropdown.Item href="/Category/:categoriaId">Niños</NavDropdown.Item>
                                    <NavDropdown.Item href="/Category/:categoriaId">Dama</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/">Contacto</Nav.Link>
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

            <Switch>
                <Route exact path="/">
                    <Home />
                    <ItemListContainer />
                </Route>
                <Route path="/ItemListContainer">
                    <ItemListContainer />
                </Route>
                <Route path="/category/:CategoryId">
                    <Category />
                </Route>
                <Route exact path="/item/:id">
                    <ItemDetailContainer />
                </Route>
            </Switch>
        </Router>
    )
}
const Home = () => {
    return (
        <>
            <img
                className="d-block w-100"
                src={slider1}
                alt="First slide"
            />
        </>
    )
}

const Category = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <ul>
                <li>
                    <Link to={`${url}/Bebés`}>Bebés</Link>
                </li>
                <li>
                    <Link to={`${url}/Niños`}>Niños</Link>
                </li>
                <li>
                    <Link to={`${url}/Dama`}>Dama</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Seleccione una categoria</h3>
                </Route>
                <Route path={`${path}/:categoriaId`}>
                    <Ropa />
                </Route>
            </Switch>
        </>
    )
}


const Ropa = () => {
    let { categoriaId } = useParams();

    return (
        <div>
            <h3>{categoriaId}</h3>
        </div>
    )
}



export default NavBar;