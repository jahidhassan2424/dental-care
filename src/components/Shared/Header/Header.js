import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand className='fs-1' as={Link} to="home">Dental Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} className='text-white' to="/">HOME</Nav.Link>
                            <Nav.Link as={Link} className='text-white' to="service">SERVICES</Nav.Link>
                            <Nav.Link as={Link} className='text-white' to="about">ABOUT</Nav.Link>
                            <Nav.Link as={Link} className='text-white' to="login">LOGIN</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;