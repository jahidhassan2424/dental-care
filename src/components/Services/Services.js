import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css'


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="text-center  fw-bold our-services">My Services</h1>
            <div className='services container mt-5' >

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
