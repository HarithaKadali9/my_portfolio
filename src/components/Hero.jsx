import React from 'react'
import studying from "../assets/studying.jpg"
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaInstagram, FaGithub, FaCode } from 'react-icons/fa'

const Hero = () => {
  const openCodingProfiles = () => {
    window.open('/codingprofiles', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black h-full w-full'>
      <div className='col-span-2 px-5 my-auto'>
        <h1 className='text-white text-2xl sm:text-4xl lg:text-8xl '>
          <span className='text-gray-400'>
            I'm Haritha
          </span><br />
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "Java Developer",
              1000,
              "Software Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className='text-xl sm:text-4xl lg:text-6xl'
          />
        </h1>

        <p className='text-white md:text-2xl sm:text-xl my-6'>
          Passionate about developing applications and exploring new technologies!!
        </p>

        <div className='my-8 flex flex-row space-x-8'>
          <a href='https://www.linkedin.com/in/your-linkedin-profile' target='_blank' rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href='https://github.com/HarithaKadali9' target='_blank' rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href='https://linktr.ee/harithakadali' target='_blank' rel="noopener noreferrer">
            <FaCode size={30} />
          </a>          
          <a href='https://www.instagram.com/haritha.kadali' target='_blank' rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>

        <div className='my-8'>
          <a href="https://drive.google.com/file/d/1PtLPxY53ZuEvlD_-0OSvnj9A5gRjJUBM/view?usp=drive_link" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-white hover:text-black text-white'>Download CV</a>
          <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-white hover:text-black text-white hover:border-none'>Contact</a>
        </div>
      </div>

      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px] rounded-full overflow-hidden'>
        <img src={studying} alt='My image' className='w-full h-auto rounded-full' />
      </div>
    </div>
  );
};

export default Hero;
