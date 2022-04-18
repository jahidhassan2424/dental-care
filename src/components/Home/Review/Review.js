import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Review.css'

const Review = ({ review }) => {
    const { name, img, comment, rating } = review;
    return (
        <div>
            <CardGroup   >
                <Card className='card-review'>
                    <div className='text-center'>
                        <Card.Img className='p-3 ' src={img} />
                        <p className=' fs-4'>{rating} out of 5</p>
                    </div>
                    <Card.Body>
                        <Card.Title className='fw-bold fs-2'> {name}</Card.Title>
                        <Card.Text>
                            {comment}
                        </Card.Text>

                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
};

export default Review;
