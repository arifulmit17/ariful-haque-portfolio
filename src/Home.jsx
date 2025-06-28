import React from 'react';
import { FaReact } from "react-icons/fa";
import { Link } from 'react-router';

const Home = () => {
    return (
        <div>
            <section className='w-11/12 mx-auto shadow-sm p-5 rounded-2xl'>
                <div className=' flex flex-col lg:flex-row'>
                    <div className='flex-1'>
                        <figure className='ml-10' >
                            <img className='ml-20 w-[200px] rounded-3xl' src="https://i.postimg.cc/P53Yj50K/Arif.png" alt="Md. Ariful Haque" /> 
                        </figure>
                       
                    </div> 
                     <div className='flex-1 ml-10 mt-5' >
                        <div>
                             <h1 className='text-3xl my-2 font-bold'>Md. Ariful Haque</h1>
                             <h1 className='text-2xl my-2 font-bold'>Junior frontend developer</h1>
                        </div>
                        <div className='flex my-2 gap-3'>
                            <a target='_blank' href="https://www.linkedin.com/in/md-ariful-haque-sunny-803b12b0/"><img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a>
                            
                            <a target='_blank' href="https://github.com/arifulmit17"><img width="48" height="48" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></a>
                        </div>
                        <button className='btn btn-soft btn-accent'>Resume</button>
                    </div>
                      
                </div>
            </section>
            <section id='about' className='w-11/12 my-10 mx-auto shadow-sm p-5 rounded-2xl'>
                <h1 className='text-3xl font-bold text-center my-10'>About Me</h1>
                <p className='bg-blue-50 m-5 p-5 rounded-2xl text-justify'>I am a tech enthusiast who likes to learn different technologies like web technologies, AI and machine learning. This enthusiasm has developed during my bachelor and master's education. I have noticed that the technology that we learn and use is changing rapidly and so to be relevant in the current job sector we need to learn new technologies regardless of their domain. I also enjoy reading books and gardening. </p>
            </section>
            <section id='skill' className='w-11/12 my-10 mx-auto shadow-sm p-5 rounded-2xl'>
                <h1 className='text-3xl font-bold text-center my-10'>Skills</h1>
                <div className='bg-blue-50 m-5 p-5 rounded-2xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                    <div>
                       <img width="70" height="70" src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/100/external-react-a-javascript-library-for-building-user-interfaces-logo-tritone-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-tritone-tal-revivo"/>
                    </div>
                    <div>
                       <img width="70" height="70" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo"/>
                    </div>
                    <div>
                       <img width="70" height="70" src="https://img.icons8.com/ios/100/express-js.png" alt="express-js"/>
                    </div>
                    <div>
                       <img width="70" height="70" src="https://img.icons8.com/color/100/firebase.png" alt="firebase"/>
                    </div>
                    <div>
                       <img width="70" height="70" src="https://img.icons8.com/color/100/tailwindcss.png" alt="tailwindcss"/>
                    </div>
                    <div className='size-[100px]'>
                      <img width="70" height="70" src="https://img.icons8.com/glyph-neue/100/github.png" alt="github"/>
                    </div>
                    <div className='size-[100px]'>
                      <img width="70" height="70" src="https://img.icons8.com/fluency/100/vite.png" alt="vite"/>
                    </div>
                    <div className='size-[100px]'>
                      <img width="70" height="70" src="https://img.icons8.com/color/100/visual-studio--v2.png" alt="visual-studio--v2"/>
                    </div>
                    <div className='size-[100px]'>
                      <img width="70" height="70" src="https://img.icons8.com/color/96/java-web-token.png" alt="java-web-token"/>
                    </div>
                    <div className='size-[100px]'>
                      <img src="https://i.postimg.cc/BvRjK6FM/b28165db-1eed-4f6a-9027-8f3317357e55-cover.png" alt="" />
                    </div>
                </div>
            </section>
            <section id='education' className='w-11/12 my-10 mx-auto shadow-sm p-5 rounded-2xl'>
                <h1 className='text-3xl font-bold text-center my-10'>Education</h1>
                <div>
                    <div className='bg-blue-50 m-5 p-5 rounded-2xl'>
                        <h1>Master in IT (2019) </h1>
                        <h2>Institute of information technology</h2>
                        <h2>Dhaka University</h2>
                    </div>
                    <div className='bg-blue-50 m-5 p-5 rounded-2xl'>
                        <h1>Bachelor of Science and Engineering (2015)</h1>
                        <h2>Electronics and Communication Engineering </h2>
                        <h2>KUET</h2>
                    </div>
                </div>
            </section>
            <section id='projects' className='w-11/12 my-10 mx-auto shadow-sm p-5 rounded-2xl'>
                <h1 className='text-3xl font-bold text-center my-10'>Projects</h1>
                <div className='bg-blue-50 m-5 p-5 rounded-2xl'>
                    <h1>Garden Community</h1>
                    <img src="" alt="garden community" />
                    <Link to={'garden'}>
                    <button className='btn btn-soft btn-accent'>Details</button>
                    </Link>
                    
                </div>
                <div className='bg-blue-50 m-5 p-5 rounded-2xl'>
                    <h1>Tutor Hire</h1>
                    <img src="" alt="Tutor Hire" />
                    <Link to={'tutor'}>
                    <button className='btn btn-soft btn-accent'>Details</button>
                    </Link>
                    
                </div>
                <div className='bg-blue-50 m-5 p-5 rounded-2xl'>
                    <h1>Subscription Box</h1>
                    <img src="" alt="Subscription Box" />
                    <Link to={'subscribe'}>
                    <button className='btn btn-soft btn-accent'>Details</button>
                    </Link>
                    
                </div>
            </section>
            <section id='contacts' className='w-11/12 my-10 mx-auto shadow-sm p-5 rounded-2xl'>
            <h1 className='text-3xl font-bold text-center my-10'>Contacts</h1>
                <div className='bg-blue-50 m-5 p-5 rounded-2xl'>
                    <h1>Email: ariful.haque1510@gmail.com</h1>
                    <h2>Phone: 01757173149</h2>
                </div>
            </section>
        </div>
    );
};

export default Home;