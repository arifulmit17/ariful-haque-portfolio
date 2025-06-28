import React from 'react';
import { FaReact } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <section className='w-11/12 mx-auto border border-black'>
                <div className='shadow-sm flex'>
                     <div className='flex-1' >
                        <div>
                             <h1>Md. Ariful Haque</h1>
                             <h1>Junior frontend developer</h1>
                        </div>
                        <div>
                            social media icons
                        </div>
                        <button className='btn'>Resume</button>
                    </div>
                    <div className='flex-1'>
                       <img src="" alt="Md. Ariful Haque" /> 
                    </div>   
                </div>
            </section>
            <section className='w-11/12 mx-auto border border-black'>
                <h1 className='text-3xl font-bold text-center my-10'>About Me</h1>
                <p className=''>I am a tech enthusiast who likes to learn different technologies like web technologies, AI and machine learning. This enthusiasm has developed during my bachelor and master's education. I have noticed that the technology that we learn and use is changing rapidly and so to be relevant in the current job sector we need to learn new technologies regardless of their domain. I also enjoy reading books and gardening. </p>
            </section>
            <section className='w-11/12 mx-auto border border-black'>
                <h1 className='text-3xl font-bold text-center my-10'>Skills</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                    <div>
                       <img width="100" height="100" src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/100/external-react-a-javascript-library-for-building-user-interfaces-logo-tritone-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-tritone-tal-revivo"/>
                    </div>
                    <div>
                       <img width="100" height="100" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo"/>
                    </div>
                    <div>
                       <img width="100" height="100" src="https://img.icons8.com/ios/100/express-js.png" alt="express-js"/>
                    </div>
                    <div>
                       <img width="100" height="100" src="https://img.icons8.com/color/100/firebase.png" alt="firebase"/>
                    </div>
                    <div>
                       <img width="100" height="100" src="https://img.icons8.com/color/100/tailwindcss.png" alt="tailwindcss"/>
                    </div>
                    <div className='size-[100px]'>
                      <img src="https://i.postimg.cc/BvRjK6FM/b28165db-1eed-4f6a-9027-8f3317357e55-cover.png" alt="" />
                    </div>
                </div>
            </section>
            <section className='w-11/12 mx-auto border border-black'>
                <h1 className='text-3xl font-bold text-center my-10'>Education</h1>
                <div>
                    <div>
                        <h1>Master in IT (2019) </h1>
                        <h2>Institute of information technology</h2>
                        <h2>Dhaka University</h2>
                    </div>
                    <div>
                        <h1>Bachelor of Science and Engineering (2015)</h1>
                        <h2>Electronics and Communication Engineering </h2>
                        <h2>KUET</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;