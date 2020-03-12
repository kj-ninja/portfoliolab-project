import React from 'react';
import {Link as ScrollLink} from "react-scroll";
import {Link} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import './Menu.scss';


const Menu= () => {
    return (
        <Container style={{maxWidth: '1500px'}}>
            <Navbar fixed="top" bg="light" expand="lg" className="navbar__mobile">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="navbar__buttons--mobile">
                    <Link to="/logowanie"><Button variant="outline-primary">Zaloguj</Button></Link>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <ScrollLink className="nav-link" to="start" spy={true} smooth={true} offset={-45} duration={500}>Start</ScrollLink>
                        <ScrollLink className="nav-link" to="steps" spy={true} smooth={true} offset={-100} duration={500}>O co chodzi?</ScrollLink>
                        <ScrollLink className="nav-link" to="about" spy={true} smooth={true} offset={-55} duration={500}>O nas</ScrollLink>
                        <Nav.Link href="#link">Fundacja i organizacje</Nav.Link>
                        <Nav.Link href="#link">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="navbar__buttons--desktop">
                <Link to="/logowanie"><Button variant="outline-secondary">Zaloguj</Button></Link>
                <Link to="/rejestracja"><Button variant="outline-secondary">Załóż konto</Button></Link>
            </div>
            <Nav className="justify-content-end navbar__desktop">
                <Nav.Item>
                    <Nav.Link href="/">Start</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <ScrollLink className="nav-link" to="steps" spy={true} smooth={true} offset={-30} duration={500}>O co chodzi?</ScrollLink>
                </Nav.Item>
                <Nav.Item>
                    <ScrollLink className="nav-link" to="about" spy={true} smooth={true} duration={500}>O nas</ScrollLink>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Fundacja i organizacje</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Kontakt</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default Menu;