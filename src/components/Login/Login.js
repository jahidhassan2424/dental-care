import React from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
    
    return (
        <div className='login-body'>
            <Form className='container  '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h1 className='text-center'>Login</h1>
                    <Form.Label className='fs-4'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-4'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <p className='fs-5'>New to Dental Care? <Link className='text-decoration-none text-danger fw-bold' to={'/register'}>Register</Link></p>

                <div className='text-center mt-5 mb-3'>
                    <Button className='submit-button' variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;