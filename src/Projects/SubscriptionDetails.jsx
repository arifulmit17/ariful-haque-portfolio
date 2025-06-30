import React from 'react';

const SubscriptionDetails = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='font-bold text-2xl text-center text-blue-500'>Subscription Box</h1>
            <div className='my-5 bg-blue-50 p-5 rounded-2xl'>
                <h1 className='font-bold ml-10'>Technology stack used</h1>
                <ul className='list-disc ml-20'>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
            </div>
            <div className='my-5 bg-blue-50 p-5 rounded-2xl'>
                <p>This project focuses to facilitate users to avail diverse subscription packages on monthly basis</p>
            </div>
           <div className='my-5 bg-blue-50 p-5 rounded-2xl'>
            <h1 ><span className='font-bold'>Live link:</span> <span className='text-blue-500'>https://batch11a09subscriptionbox.netlify.app/</span> </h1>
           </div>
           <div className='my-5 bg-blue-50 p-5 rounded-2xl'>
            <h1 ><span className='font-bold'>Github Link:</span> <span className='text-blue-500'> https://github.com/arifulmit17/subscription-box</span> </h1>
            
           </div>
           <div className='my-5 bg-blue-50 p-5 rounded-2xl'>
            <h1 className='font-bold'>Challenges faced :</h1>
            <ul className='list-disc ml-10'>
                <li>faced problem in time of installing react helmet</li>
            </ul>
           </div>
           <div className='my-5 bg-blue-50 p-5 rounded-2xl'>
            <h1 className='font-bold'>Potential improvements and future plan for the project :</h1>
            <ul className='list-disc ml-10'>
                <li>Implementing the dashboard for both client and admin</li>
                <li>Implementing the database for different streaming services using mongodb</li>
                <li>Add server function using express.js</li>
                <li>Use jwt for security measures</li>
                <li>Using tanstack query for fetching data from database</li>
                <li>Using axios for fetching data from database</li>
                <li>Using role based authentication for fetching data from database</li>
                <li>Improving color scheme and design related functions</li>
            </ul>
           </div>
        </div>
    );
};

export default SubscriptionDetails;