import React from "react";
import { motion } from "framer-motion";
 import { Typewriter } from "react-simple-typewriter";
import { SiGithub, SiLinkedin } from "react-icons/si";

const fileId = "1S9V9TZWAvF6Mt1KPYUj7LKUa_9yEUs1i";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
  link.download = "document.pdf";
  link.click();
};

const Intro = () => {
  return (
    
    <motion.section
      className="w-11/12 mx-auto shadow-sm p-5 rounded-2xl flex flex-col lg:flex-row items-center gap-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <motion.div
        className="lg:w-1/2 ml-10 w-full md:ml-50 lg:ml-0"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <figure className="mx-auto lg:ml-30">
          <motion.img
            className="w-[200px] rounded-full"
            src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1756194900/Ariful_Haque_3_fz055t.jpg"
            alt="Md. Ariful Haque"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </figure>
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex flex-col items-center lg:items-start mt-5"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="text-center lg:text-left">
          <motion.h1
            className="text-3xl my-2 font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Md. Ariful Haque
          </motion.h1>

         

<motion.h2
  className="text-2xl my-2 font-bold"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
>
  <Typewriter
    words={["Frontend Developer", "React Enthusiast", "MERN Stack Learner"]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</motion.h2>

        </div>

        <div className="flex gap-4">
  <a
    href="https://www.linkedin.com/in/md-ariful-haque-sunny-803b12b0/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="p-2 rounded-full hover:bg-primary/10 transition"
  >
    <SiLinkedin className="w-8 h-8 " />
  </a>

  <a
    href="https://github.com/arifulmit17"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="p-2 rounded-full hover:bg-primary/10 transition"
  >
    <SiGithub className="w-8 h-8 " />
  </a>
</div>

        {/* Resume Button */}
        <motion.button
          onClick={handleDownload}
          className="btn btn-soft mx-20 lg:m-0 btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          Resume
        </motion.button>
      </motion.div>
    </motion.section>
    
  );
};


export default Intro;
