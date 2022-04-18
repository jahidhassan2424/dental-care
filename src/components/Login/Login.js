import React from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
            .then(result => {
                console.log("Login Successful");
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    if (user) {
        navigate("/")
    }
    if (error) {
        console.log(error);
    }

    return (
        <div className='login-body'>
            <Form onSubmit={handleLogin} className='container  '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h1 className='text-center'>Login</h1>
                    <Form.Label className='fs-4'>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-4'>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-danger fw-bold'>{error?.message}</p>
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