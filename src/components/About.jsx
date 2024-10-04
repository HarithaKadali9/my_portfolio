import React from 'react'
import aboutImage from "../assets/aboutImage.png"
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImage} width={400} height={400}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 '>About Me</h2>
                    <p className='text-base text-justify lg:text-lg'>
                    I am Haritha Kadali, a recent graduate in Computer Science Engineering from Bapatla Engineering College.
                     During my academic journey, I gained a solid foundation in key subjects such as Operating Systems, Linux, 
                     Computer Networks, and Data Structures and Algorithms. I developed a keen interest in software development,
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

