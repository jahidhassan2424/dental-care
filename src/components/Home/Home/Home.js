import React from 'react';
import './home.css'
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/image1.jpg';
import image2 from '../../../images/iamge2.jpg';
import iamge3 from '../../../images/iamge3.jpg';
import Services from './../../Services/Services';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div className='home-body'>

            {/* Slider Starts */}

            <Carousel className='container '>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 dark-overlay"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='slide-title '>
                        <h3 >Always Ready for Service</h3>
                        <p>Jahid Hassan. DDS (Doctor of Dental Surgery) and DMD from Dhanka Dental university</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='slide-title '>
                        <h3>High Quality Equipments</h3>
                        <p>We have the equipments of very high quality</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={iamge3}
                    />
                    <Carousel.Caption className='slide-title '>
                        <h3>Good Service Guaranteed</h3>
                        <p>We are very much commited to provide you the best service possible.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Slider End */}


            {/*********************************** 
                       Service Section 
             ********************************/}
            <Services></Services>

            {/*********************************** 
                       Review Section 
             ********************************/}
            <Reviews></Reviews>
        </div>
    );
};

export default Home;