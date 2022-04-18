import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import './Appoinment.css'
import { Button } from 'react-bootstrap';

const Appoinment = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className='about-me container mt-5'>
            <h1>Name: {user.displayName}</h1>
            <h3>Email: {user.email}</h3>
            <div className='mt-5 pick-a-time mb-4'>
                
                <p className='fs-3 fw-bold'>Pick a time</p>
                <p>
                    <Button className='time-button' variant="primary">10.00</Button>{' '}
                    <Button className='time-button' variant="secondary">11:00</Button>{' '}
                    <Button className='time-button' variant="success">12:00</Button>{' '}
                    <Button className='time-button' variant="warning">14:00</Button>{' '}
                    <Button className='time-button' variant="danger">16:00</Button>
                    <Button className='time-button' variant="info">18:00</Button>{' '}
                </p>

            </div>
            <h3>Our location: Dhaka, Bangladesh</h3>
            <div className='text-center mt-5'><button className='btn px-5 py-3 book-now-btn ' type='submit'>BOOK NOW</button></div>
        </div>
    );
};

export default Appoinment;