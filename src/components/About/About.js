import React from 'react';
import './About.css'
import myImage from '../../images/myImage.jpg'

const About = () => {
    return (
        <div className='text-center mt-5 container'>
            <img className='myImage' src={myImage} alt="" />
            <p className='fs-4'>I'M A STUDENT. I WANT TO BECOME A PROFESSIONAL WEB DEVELOPER. MY GOAL IS TO BECOME A WEB DEVELOPER FOR WHICH I'M ALREADY LEARNING AND FULLY DEDICATED TO IT. I PRACTICE 8 HOURS PER DAY TO ACHIVE MY GOAL AND I'M CONFIDENT OF MY STRATEGY AND IN SHA ALLAH I'LL GET WHAT I WANT SOON.</p>
        </div>
    );
};

export default About;