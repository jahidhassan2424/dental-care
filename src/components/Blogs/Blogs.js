import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className='qs'>
                <p className='fs-2'>Difference between authorization and authentication?</p>
                <p className='fs-4'>Ans:Authentication is the act of confirming a person's identity, whereas authorisation is the process of confirming a user's access to certain apps, files, and data. Authentication and authorisation serve the same purpose in the digital age. Authentication is a technique for ensuring that people are who they say they are. After this has been verified, authorisation is used to provide the user authority to access various levels of information and execute certain duties, based on the rules defined for various sorts of users.</p>
            </div>
            <div className='qs'>
                <p className='fs-2'>What other services does firebase provide other than authentication?</p>
                <p className='fs-4'>Ans: FireBase provides many other services which are given below:
                    <br />
                    1) Realtime database
                    <br />
                    2) Remote Config
                    <br />
                    3)Firebase Ml
                    <br />
                    4) Cloud functions
                    <br />
                    5) Authenticaion
                    <br />
                    6) Cloud Messaging
                    <br />
                    7) Hosting
                    <br />
                    8) Cloud Storage
                </p>
            </div>
        </div>
    );
};

export default Blogs;