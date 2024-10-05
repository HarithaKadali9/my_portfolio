import React from 'react'
import aboutImage from "../assets/aboutImage.png"
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <h2 className='text-4xl font-bold mb-4 text-center pt-10 mt-16 '>About Me</h2>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
          
          <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px] rounded-full overflow-hidden relative'>
            {/* Animated image with rotation and hover effects */}
            <img 
              src={aboutImage} 
              alt='My image' 
              className='w-full h-auto rounded-full animate-pulse transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-6 shadow-lg' 
            />
            {/* Optional animated border effect */}
            <div className='absolute inset-0 rounded-full border-4 border-dashed border-gray-500 animate-spin-slow'></div>
          </div>

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    
                    <p className='text-base text-justify lg:text-lg'>
                    I am Haritha Kadali, a recent graduate in Computer Science Engineering from Bapatla Engineering College.
                     During my academic journey, I gained a solid foundation in key subjects such as Operating Systems, 
                     Computer Networks, and Data Structures and Algorithms etc.. I developed a keen interest in software development,
                      which led me to create several projects throughout my B.Tech, showcasing my problem-solving skills and technical expertise.
                       I am passionate about continuously learning and exploring new technologies, and I am eager to contribute to innovative tech 
                       solutions.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About

