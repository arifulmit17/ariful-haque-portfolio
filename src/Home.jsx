import React from 'react';
import { FaReact } from "react-icons/fa";
import { Link } from 'react-router';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "motion/react"
import { MdEmail, MdPhone } from "react-icons/md";
const Home = () => {
    const fileId = '1S9V9TZWAvF6Mt1KPYUj7LKUa_9yEUs1i';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    link.download = 'document.pdf'; 
    link.click();
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cmgkkbp',   // Replace with your EmailJS Service ID
        'template_q2t3vb4',  // Replace with your EmailJS Template ID
        form.current,
        'qIMKBOXacFHSNWKpa'    // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        () => {
          alert('❌ Failed to send message. Please try again.');
        }
      );
  };
    return (
        <div>
            <section className='w-11/12 mx-auto dark:text-white shadow-sm p-5 rounded-2xl'>
                <motion.div initial={{ opacity: 0, y: 50 }}  // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing

        // Hover effect
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} data-theme="light" className=' flex flex-col lg:flex-row bg-blue-50 m-5 p-5 rounded-2xl'>
                    <div  className='lg:w-1/2 ml-10 w-full md:ml-50 lg:ml-0 '>
                        <figure className='mx-auto lg:ml-10 ' >
                            <img className=' w-[200px] rounded-4xl' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754243654/Arif_vtijxe.png" alt="Md. Ariful Haque" /> 
                        </figure>
                       
                    </div> 
                     <div className='flex flex-col items-center lg:items-start mt-5' >
                        <div className='text-center lg:text-left'>
                             <h1 className='text-3xl my-2 font-bold'>Md. Ariful Haque</h1>
                             <h1 className='text-2xl my-2 font-bold'> Frontend developer</h1>
                        </div>
                        <div className='flex mx-20 lg:m-0 my-2 gap-3'>
                            <a target='_blank' href="https://www.linkedin.com/in/md-ariful-haque-sunny-803b12b0/"><img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a>
                            
                            <a target='_blank' href="https://github.com/arifulmit17"><img width="48" height="48" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></a>
                        </div>
                        <button onClick={handleDownload} className='btn btn-soft mx-20 lg:m-0 btn-accent'>Resume</button>
                    </div>
                      
                </motion.div>
            </section>
            <section id='about'  className='w-11/12 my-10 mx-auto shadow-sm p-5 rounded-2xl'>
            <h1 className='text-3xl font-bold text-center my-10'>About Me</h1>
            <motion.div className='bg-blue-50 m-5 p-5 rounded-2xl text-justify' initial={{ opacity: 0, y: 50 }}  // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing

        // Hover effect
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} >
                
                <p data-theme="light" className='bg-blue-50' >I am a tech enthusiast who likes to learn different technologies like web technologies, AI and machine learning. This enthusiasm developed during my bachelor's education. At the time of my first job I felt an urge to learn programming. So I attended a master's program to enhance my programming skills. I have noticed that the technology that we learn and use is changing rapidly and so to be relevant in the current job sector we need to learn new technologies regardless of their domain. I also enjoy reading books and gardening. </p>
            </motion.div>
                
            </section>
            <section id='skill' className='w-11/12 my-10 mx-auto shadow-sm p-5 rounded-2xl'>
                <h1 className='text-3xl font-bold text-center my-10'>Skills</h1>
                <motion.div  initial={{ opacity: 0, y: 50 }}  // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing

        // Hover effect
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} className='bg-blue-50 m-5 p-5 rounded-2xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5'>
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
                      <img src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754312864/b28165db-1eed-4f6a-9027-8f3317357e55-cover_yniflb.png" alt="" />
                    </div>
                </motion.div>
            </section>
            <section id='education' className='w-11/12 my-10 mx-auto shadow-sm p-5 rounded-2xl'>
                <h1 className='text-3xl font-bold text-center my-10'>Education</h1>
                <div>
                    <motion.div initial={{ opacity: 0, y: 50 }}  // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing

        // Hover effect
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} data-theme="light" className='bg-blue-50 m-5 p-5 text-center lg:text-left rounded-2xl'>
                        <h1 className='font-bold'>Master in IT (2019) </h1>
                        <h2>Institute of information technology</h2>
                        <h2>Dhaka University</h2>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 50 }}  // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing

        // Hover effect
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} data-theme="light" className='bg-blue-50 m-5 p-5  text-center lg:text-left rounded-2xl'>
                        <h1 className='font-bold'>Bachelor of Science and Engineering (2015)</h1>
                        <h2>Electronics and Communication Engineering </h2>
                        <h2>Khulna University of Engineering and Technology</h2>
                    </motion.div>
                </div>
            </section>
            <section id='experience' className='w-11/12 my-10 mx-auto shadow-sm p-5 rounded-2xl'>
                <h1 className='text-3xl font-bold text-center my-10'>Experience</h1>
                <div>
                    <motion.div initial={{ opacity: 0, y: 50 }}  // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing

        // Hover effect
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} data-theme="light" className='bg-blue-50 m-5 p-5 text-center lg:text-left rounded-2xl'>
                        <h1 className='font-bold text-xl'>Assistant Programmer (19-05-2019 to 31-10-2021) </h1>
                        <h2 className='font-bold'>Rajshahi City Corporation</h2>
                        <ul className="list-disc pl-5">
                            <li>Supervised progress of different software development projects under ict division and
                                gathered requirements as per company policy.</li>
                            <li>Communicated to different ministry for different company purposes related to ict
                                department by preparing reports and attending meetings.</li>
                            <li>Monitored and troubleshooted different ict projects after reception by the company.</li>
                        </ul>
                        
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 50 }}  // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing

        // Hover effect
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} data-theme="light" className='bg-blue-50 m-5 p-5  text-center lg:text-left rounded-2xl'>
                        <h1 className='font-bold text-xl'>Software Engineer (15-03-2016 to 31-07-2018)</h1>
                        <h2 className='font-bold'>IPvision Soft Ltd. </h2>
                        <ul className="list-disc pl-5">
                            <li>
                                Designed, deployed, monitored and troubleshooted NoSQL database management system
                                cluster (Cassandra) and SQL database management system cluster (MariaDB) and
                                MySQL NDB Cluster.
                            </li>
                            <li>
                                Designed, deployed, monitored and troubleshooted database indexing cluster (Solr),
                                Zookeeper., monitoring systems (Zabbix, Nagios), Elastic search.
                            </li>
                            <li>
                                Created and administered virtual machines using KVM, Virtual box and VMware with
                                operating system of Ubuntu, Centos 7.
                            </li>
                            <li>Configured router, Nat-server, ntp-server etc.
                            </li>
                        </ul>
                    </motion.div>
                    <div>
                    </div>
                </div>
            </section>
            <section id='projects' className='w-11/12 my-10 mx-auto shadow-sm p-5 rounded-2xl'>
                <h1 className='text-3xl font-bold text-center my-10'>Projects</h1>
    <motion.div initial={{ opacity: 0, y: 50 }}  // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing

        // Hover effect
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} data-theme="light" className='bg-blue-50 m-5 p-5 flex lg:flex-row flex-col gap-5 lg:items-start rounded-2xl'>
                    <div className='lg:w-1/2 w-full'>
                    <img className='  w-full ' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754312947/Capturegarden_std2jq.png" alt="garden community" />
                    </div>
                    
                    <div className='lg:w-1/2 lg:mt-0 mt-5 w-full flex flex-col gap-5'>
                    <h1 className=' font-bold'>Garden Community</h1>
                    <p>This is a platform for gardening enthusiasts for many benefits such as weekly discussions, forums, group meetings, one to one session etc</p>
                    <h2>Features</h2>
                    <ul className="list-disc pl-5">
                        <li>Featured tips and gardeners on home page</li>
                        <li>Browse tips based on filtered difficulty of easy,medium or hard.</li>
                        <li>Like on favorite tips</li>
                    </ul>
                    <div className='lg:flex-row  flex-col  gap-3'>
                        <div className="badge badge-outline  badge-accent">React.js</div>
                        <div className="badge badge-outline  badge-accent">Express.js</div>
                        <div className="badge badge-outline  badge-accent">Javascript</div>
                        <div className="badge badge-outline  badge-accent">TailwindCss</div>
                        <div className="badge badge-outline  badge-accent">MongoDB</div>
                        <div className="badge badge-outline  badge-accent">Firebase</div>
                    </div>
                    <div className='flex justify-end'>
                        <Link to={'garden'}>
                        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="btn btn-soft btn-accent px-6 py-3 rounded-lg shadow-lg"
      >
        Details
      </motion.button>
                    {/* <button className='btn btn-soft btn-accent '>Details</button> */}
                    </Link>
                    </div>
                    
                    </div>
                    
                    
                </motion.div>
    <motion.div initial={{ opacity: 0, y: 50 }}  // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing

        // Hover effect
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} data-theme="light" className='bg-blue-50 m-5 p-5 flex lg:flex-row flex-col gap-5 lg:items-start rounded-2xl'>
                    <div className='lg:w-1/2 w-full'>
                    <img className='w-full' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754313041/Capturetutor_xgtnbo.png" alt="Tutor Hire" />
                    </div>
                    
                    <div className='lg:w-1/2 lg:mt-0 mt-5 w-full flex flex-col gap-5'>
                    <h1 className=' font-bold'>Tutor Hire</h1>
                    <p>This site focuses on a platform for teaching enthusiasts and students for many benefits</p>
                    <h2>Features</h2>
                    <ul className="list-disc pl-5">
                        <li>Stats and languages on home page</li>
                        <li>Browse tutors based on languages.</li>
                        <li>Like on booked tutors</li>
                        


                    </ul>
                    <div className='lg:flex-row  flex-col  gap-3'>
                        <div className="badge badge-outline  badge-accent">React.js</div>
                        <div className="badge badge-outline  badge-accent">Express.js</div>
                        <div className="badge badge-outline  badge-accent">Javascript</div>
                        <div className="badge badge-outline  badge-accent">TailwindCss</div>
                        <div className="badge badge-outline  badge-accent">MongoDB</div>
                        <div className="badge badge-outline  badge-accent">Firebase</div>
                        <div className="badge badge-outline  badge-accent">JWT</div>
                    </div>
                    <div className='flex justify-end'>
                        <Link to={'tutor'}>
                        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="btn btn-soft btn-accent px-6 py-3 rounded-lg shadow-lg"
      >
        Details
      </motion.button>
                    {/* <button className='btn btn-soft btn-accent '>Details</button> */}
                    </Link>
                    </div>
                    
                    </div>
                    
                    
                </motion.div>
    <motion.div initial={{ opacity: 0, y: 50 }}  // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing

        // Hover effect
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} data-theme="light" className='bg-blue-50 m-5 p-5 flex lg:flex-row flex-col gap-5 lg:items-start rounded-2xl'>
                    <div className='lg:w-1/2 w-full'>
                    <img className=' w-full' src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1754313017/Capture_sub_hlzbiu.png" alt="Subscription Box" />
                    </div>
                    
                    <div className='lg:w-1/2 lg:mt-0 mt-5 w-full flex flex-col gap-5'>
                    <h1 className=' font-bold'>Subscription Box</h1>
                    <p>Our site focuses to facilitate users to avail diverse subscription packages on monthly basis</p>
                    <h2>Features</h2>
                    <ul className="list-disc pl-5">
                        <li>For users there is opportunity to choose from 6 different streaming platforms.</li>
                        <li>Users can give their reviews at the subscriptionDetails page</li>
                        <li>Users can change their name and profile picture at the profile page.</li>
                    </ul>
                    <div className='lg:flex-row  flex-col  gap-3'>
                        <div className="badge badge-outline  badge-accent">React.js</div>
                        <div className="badge badge-outline  badge-accent">Javascript</div>
                        <div className="badge badge-outline  badge-accent">TailwindCss</div>
                        <div className="badge badge-outline  badge-accent">Firebase</div>
                    </div>
                    <div className='flex justify-end'>
                        <Link to={'subscribe'}>
                        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="btn btn-soft btn-accent px-6 py-3 rounded-lg shadow-lg"
      >
        Details
      </motion.button>
                    {/* <button className='btn btn-soft btn-accent '>Details</button> */}
                    </Link>
                    </div>
                    
                    </div>
                    
                    
                </motion.div>
                
                
            </section>
            <section id="contacts" className="w-11/12 my-10 mx-auto shadow-sm p-5 rounded-2xl"
    >
      <h1 className="text-3xl font-bold text-center my-10">Contacts</h1>
        <div className='w-11/12 lg:w-full flex lg:flex-row flex-col'>
            <motion.div
        data-theme="light"
        className="bg-blue-50 m-5 p-5 flex flex-col items-start lg:items-start rounded-2xl w-full"
        
        // Animation on mount
        initial={{ opacity: 0, y: 50 }}  // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing

        // Hover effect
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      >
        <h1 className='mb-4'>Let's connect</h1>
        <div className="flex items-start mb-4 space-x-3">
        <MdEmail className="text-accent text-3xl" />
        <h1 className="text-lg font-semibold">
          <span className="font-bold">Email:</span> ariful.haque1510@gmail.com
        </h1>
      </div>

      <div className="flex items-start space-x-3">
        <MdPhone className="text-accent text-3xl" />
        <h2 className="text-lg font-semibold">
          <span className="font-bold">Phone:</span> +8801757173149
        </h2>
      </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }}  // Start hidden and pushed down
        animate={{ opacity: 1, y: 0 }}   // Fade in and slide up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing

        // Hover effect
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} data-theme="light" className="bg-blue-50 m-5 p-5 rounded-2xl w-full">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-2 bg-white rounded"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-2 bg-white rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-2 bg-white rounded"
            rows="4"
          />
          <button
            type="submit"
            className="btn btn-outline btn-accent py-2 px-4 rounded hover:bg-accent"
          >
            Send Email
          </button>
        </form>
      </motion.div>

        </div>
      

      {/* EmailJS Form */}
      
    </section>
        </div>
    );
};

export default Home;