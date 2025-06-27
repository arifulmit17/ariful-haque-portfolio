import React from 'react';

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
        </div>
    );
};

export default Home;