import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
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
                            <Nav.Link as={Link} className='text-white hover-effect' to="/">HOME</Nav.Link>
                            <Nav.Link as={Link} className='text-white hover-effect' to="services">SERVICES</Nav.Link>
                            <Nav.Link as={Link} className='text-white hover-effect' to="about">ABOUT</Nav.Link>
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} className='text-white hover-effect' to="appoinment">APPOINMENT</Nav.Link>
                                        <Nav.Link as={Link} className='text-white hover-effect' to="/">{
                                            user.displayName ?
                                                `HELLO ${user.displayName}`
                                                :
                                                ""
                                        }</Nav.Link>
                                        <Nav.Link onClick={handleSignOut} as={Link} className='text-white hover-effect' to="login">SIGN OUT</Nav.Link>

                                    </>
                                    :
                                    <Nav.Link as={Link} className='text-white hover-effect' to="login">LOGIN</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;