import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className='qs'>
                <p className='fs-2'>Difference between authorization and authentication?</p>
                <p className='fs-4'><b>Ans:</b> Authentication is the act of confirming a person's identity, whereas authorisation is the process of confirming a user's access to certain apps, files, and data. Authentication and authorisation serve the same purpose in the digital age. Authentication is a technique for ensuring that people are who they say they are. After this has been verified, authorisation is used to provide the user authority to access various levels of information and execute certain duties, based on the rules defined for various sorts of users.</p>
            </div>
            <div className='qs mt-5'>
                <p className='fs-2'>What other services does firebase provide other than authentication?</p>
                <p className='fs-4'><b>Ans:</b> FireBase provides many other services which are given below:
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
            <div className='qs mt-5'>
                <p className=' fs-2'>Why are you using firebase? What other options do you have to implement authentication?</p>
                <p className='fs-4'><b>Ans:</b> Firebase Analytics is very powerful. You can use this knowledge to make informed decisions your sites marketing and increase sales. It also allows you to analyze the performance of your campaigns across organic and paid channels to understand which methods are most effective in regards to the specific users that you want to reach <br />

                    <b>Firebase Alternative</b> <br />
                    1) Back4App
                    <br />
                    2) AWS Amplify
                    <br />
                    3) Kuzzle
                    <br />
                    4) Couchbase</p>
            </div>
        </div>
    );
};

export default Blogs;