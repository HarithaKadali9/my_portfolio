import React from 'react'
import teenage from '../assets/teenage.jpg'
import graduation from '../assets/graduation.jpg'
import {FaArrowRight} from 'react-icons/fa'
const Education = () => {
    const studied = [
        {
            id: 1,
            board: 'Secondary School Certificate',
            institution: "Children's (EM) High School",
            branch: '',
            location: 'Sompalle, AP, India',
            year: '2017-2018',
            grade: 'CGPA: 9.5',
        },
        {
            id: 2,
            board: 'Intermediate',
            institution: "Sri Chaitanya Junior College",
            branch: 'MPC',
            location: 'Razole, AP, India',
            year: '2018-2020',
            grade: 'CGPA: 9.6',
        },
        {
            id: 3,
            board: "Bachelor's of Technology",
            institution: "Bapatla Engineering College",
            branch: 'Computer Science',
            location: 'Bapatla, AP, India',
            year: '2020-2024',
            grade: 'CGPA: 8.9 ',
        }
    ];

    return (
        <div id='education' className='z-0'>
            
            <p className='text-4xl  font-bold flex justify-center items-center py-8'>Education</p>

            <div className='flex justify-center items-center space-x-6'>
                <img src={teenage} className='h-20 w-20 rounded-lg' alt="Teenage" />
                <hr className="border-t-4 border-white my-4 w-1/2"></hr>
                <FaArrowRight size={30}/>
                <img src={graduation} className='h-20 w-20 rounded-lg' alt="Graduation" />
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center'>
                
                {studied.map((study, index) => (
                    <div key={study.id} className='p-4 rounded-lg hover:bg-white hover:text-black flex flex-col items-center'>
                        <p className='text-2xl sm:text-xl'>{study.board}</p>
                        <p className='text-2xl sm:text-xl font-semibold'>{study.institution}</p>
                        <p>{study.location}</p>
                        <p className='text-2xl sm:text-xl'>{study.branch}</p>
                        <p>{study.year}</p>
                        <p className='text-4xl sm:text-2xl font-bold'>{study.grade}</p>

                        {/* Down arrow and line */}
                       
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
