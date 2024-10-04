import React from 'react';
import { FaEye } from 'react-icons/fa';

const Internships = () => {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'T-Machine Software Solutions',
      duration: '6 months',
      link: 'https://drive.google.com/file/d/1T6XySiZU3Vm9phIB__bRL-plGbTD5MeJ/view',
      description: "As an intern at T-Machine Software Solutions, I specialize in frontend development using React.js, focusing on creating impressive user interfaces for the 'Smart Agile' project. I excel in designing responsive UI components and integrating backend services, collaborating effectively with team members to deliver user-centric solutions that meet project objectives.",
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Innovate',
      duration: '4 months',
      link: 'https://drive.google.com/file/d/1HQYPlWVEpBzIV8jBsNkhmAjfqwbK8hIH/view?usp=sharing',
      description: "As a Full Stack Developer intern at Innovate, I worked on developing both frontend and backend applications, enhancing my skills in various technologies.",
    },
    {
      id: 3,
      title: 'Machine Learning Intern',
      company: 'Sri Shasha Prayathi',
      duration: '2 months',
      link: 'https://drive.google.com/file/d/1T6XySiZU3Vm9phIB__bRL-plGbTD5MeJ/view',
      description: "As a Machine Learning Intern at Sri Shasha Prayathi, I focused on developing algorithms to analyze data and make predictions, working closely with a team to improve model performance.",
    },
    {
      id: 4,
      title: 'Web Development Intern',
      company: 'Oasis Infobyte',
      duration: '2 months',
      link: 'https://drive.google.com/file/d/1T6XySiZU3Vm9phIB__bRL-plGbTD5MeJ/view',
      description: "During my internship at Oasis Infobyte, I developed several web applications, enhancing my knowledge of web technologies and best practices.",
    },
  ];

  return (
    <div className='md:p-10 md:m-16 sm:p-4 sm:m-4 bg-black'>
      <h2 className='text-4xl text-center py-6 font-bold text-white'>Internships</h2>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8'>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className='justify-center text-center border border-white rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'
          >
            <h3 className='text-3xl font-semibold text-white'>{experience.title}</h3>
            <p className='text-2xl font-medium text-white'><span className='text-xl'>at</span> {experience.company}</p>
            <p className='text-lg text-gray-400'>{experience.duration}</p>
                {experience.link && (
                  <a
                    href={experience.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center mt-2'
                  >
                    <span className='pr-4'>View Certificate:</span><FaEye size={30} />
                  </a>
                )}
            <p className='text-justify p-4 text-gray-300'>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
