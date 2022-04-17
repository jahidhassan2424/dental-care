import React from 'react';
import './Service.css'
import { Card, CardGroup } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div >
            <CardGroup   >
                <Card className='card1'>
                    <Card.Img className='w-100' src={img} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-2'> {name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 150)}
                        </Card.Text>
                        <button className='btn d-block mx-auto my-2 mt-5 px-3 py-2 roundedManual '>Book Appoinment</button>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;