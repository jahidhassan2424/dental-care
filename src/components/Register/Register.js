import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='login-body'>
            <Form className='container  '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h1 className='text-center'>Register</h1>
                    <Form.Label className='fs-4'>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />

                    <Form.Label className='fs-4 mt-3'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-4'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <p className='fs-5'>Already have an account? <Link className='text-decoration-none text-danger fw-bold' to={'/login'}>Login</Link></p>

                <div className='text-center mt-5 mb-3'>
                    <Button className='submit-button' variant="primary" type="submit">
                        Register
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Register;