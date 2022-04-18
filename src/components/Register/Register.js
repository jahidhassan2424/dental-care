import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from './../Shared/Toast';
import { async } from '@firebase/util';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const registeredToast = () => toast("Succesfully Registered");

    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result)
                registeredToast();
                console.log('Toast showed');

            })

        navigate("/");

    }

    if (error) {
        console.log(error);
    }
    return (
        <div className='login-body'>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <Form onSubmit={handleRegister} className='container  '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h1 className='text-center'>Register</h1>

                    <Form.Label className='fs-4'>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" />

                    <Form.Label className='fs-4 mt-3'>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-4'>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className='text-danger fw-bold' type="checkbox" label="Agree to Tearms and Condition" />
                </Form.Group>
                <p className='fs-5'>Already have an account? <Link className='text-decoration-none text-danger fw-bold' to={'/login'}>Login</Link></p>

                <div className='text-center mt-5 mb-3'>
                    {
                        agree ?
                            <Button className='submit-button' variant="primary" type="submit">
                                Register
                            </Button>
                            :
                            <Button className='submit-button' disabled variant="primary" type="submit">
                                Register
                            </Button>
                    }
                    <br />

                </div>
            </Form>
        </div>
    );
};

export default Register;