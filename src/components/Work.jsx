import React, { useState } from 'react';
import { FaGithub, FaEye, FaArrowRight } from 'react-icons/fa';
import Attendance from "../assets/Attendance.jpg";
import EatEase from "../assets/Projects/EatEase.png";
import Translator from "../assets/Projects/Translator.jpg";
import Calculator from "../assets/Projects/Calculator.jpg";
import todolist from "../assets/Projects/Todolist.jpg";
import chatapplication from "../assets/Projects/chatapplication.jpg";
import { AiOutlineClose } from 'react-icons/ai';

const Work = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const handleOpen = (project) => {
        setCurrentProject(project);
        setIsOpen(true);
        document.body.classList.add('overflow-hidden'); // Disable scrolling on the body
    };

    const handleClose = () => {
        setIsOpen(false);
        setCurrentProject(null);
        document.body.classList.remove('overflow-hidden'); // Re-enable scrolling on the body
    };

    const projects = [
        {
            title: 'Face Recognition Attendance System',
            image: Attendance,
            description: 'The Face Recognition Attendance System is an automated application that revolutionizes attendance tracking by capturing the presence of an entire class in a single snapshot. By employing advanced face recognition algorithms and leveraging high-resolution cameras, this system significantly enhances the efficiency and accuracy of attendance management. Unlike traditional paper-and-pen methods, which are prone to proxy attendance, this innovative solution minimizes time complexity and ensures that attendance is recorded securely and reliably. Built using Python, Flask, and TensorFlow, the system not only streamlines the attendance process but also provides a modern alternative to outdated practices, making it a valuable tool for educational institutions.',
            skills: 'Python, Face Recognition Algorithms, Selenium, Flask, TensorFlow',
            githubLink: 'https://github.com/HarithaKadali9/face-recognition-attendance-system',
            liveLink: 'https://face-recognition-attendance-system.netlify.app/', // Update with the live link if available
        },
        {
            title: 'EatEase',
            image: EatEase,
            description: 'EatEase is a food application that is beautifully responsive across various screens, providing users with a seamless experience whether on mobile, tablet, or desktop. It allows users to effortlessly browse through a wide selection of food items from local restaurants and cuisines, making it easy to satisfy their cravings anytime, anywhere. With an intuitive interface, users can quickly search for specific dishes, view detailed descriptions, and place orders with just a few taps. The application also features personalized recommendations based on individual tastes, enhancing the overall dining experience. By integrating real-time order tracking, EatEase ensures that users stay informed about their deliveries, making it the perfect companion for food enthusiasts.',
            skills:'React.js, TailwindCss',
            githubLink: 'https://github.com/HarithaKadali9/EatEase', // Update with the GitHub link if available
            liveLink: 'https://react-eatease.netlify.app/', // Update with the live link if available
        },
        {
            title: 'Text Translator',
            image: Translator,
            description: 'This is a simple Text Translator web application built using HTML, JavaScript, and CSS, which utilizes the MyMemory API to translate text into various languages. The application features a user-friendly interface where users can input text, select a target language, and instantly receive the translation. In addition to translating, it provides a copy-to-clipboard feature for easy access to the translated text and a text-to-speech functionality that reads out the translated result aloud, enhancing user experience. This translator is ideal for anyone looking to translate text quickly and efficiently with just a few clicks.',
            skills: 'Html, Javascript, Css',
            githubLink: 'https://github.com/HarithaKadali9/Translator', // Update with the GitHub link if available
            liveLink: 'https://text-translator-js.netlify.app/', // Update with the live link if available
        },
        {
            title: 'Calculator',
            image: Calculator,
            description: 'The Calculator App is an intuitive and visually appealing web application built with HTML, CSS, and JavaScript, designed for seamless arithmetic calculations. It features a user-friendly interface that allows users to perform basic operations like addition, subtraction, multiplication, and division with just a click. The app includes a display area that shows the current input and results, providing real-time feedback for an efficient calculation experience. Additionally, users can quickly clear their input or start a new calculation with a dedicated reset button. With its responsive design, the Calculator App is accessible on various devices, making it a convenient tool for quick math tasks at home, school, or work.',
            skills: 'Html, Javascript, Css',
            githubLink: 'https://github.com/HarithaKadali9/OIBSIP_Taskno1', // Update with the GitHub link if available
            liveLink: 'https://harithacalculator.netlify.app/', // Update with the live link if available
        },
        {
            title: 'To do List',
            image: todolist,
            description: 'The Todo List Project is a simple yet effective web application created using HTML, CSS, and JavaScript, designed to help users organize and manage their daily tasks efficiently. With a clean and intuitive interface, users can easily add, edit, and delete tasks, allowing for seamless task management. The app features a responsive design that ensures a smooth experience across different devices, making it accessible whether on a desktop or mobile. Users can mark tasks as complete, providing a visual representation of their progress and enhancing productivity. This project not only demonstrates the practical application of core web technologies but also offers a valuable tool for individuals seeking to streamline their daily routines.',
            skills: 'Html, Javascript, Css',
            githubLink: 'https://github.com/HarithaKadali9/OIBSIP_Taskno3', // Update with the GitHub link if available
            liveLink: 'https://haritha-to-do-list.netlify.app/', // Update with the live link if available
        },
        {
            title: 'Chat Application',
            image: chatapplication,
            description: 'The Console Chat Application is a robust Java-based communication platform that allows multiple clients to connect and interact in real-time. Utilizing socket programming, the server efficiently manages client connections using threads, enabling seamless message broadcasting to all participants. Users can join the chat by providing a username, and their messages are displayed to everyone in the chat room. The application features a straightforward command-line interface, making it accessible for users to engage in discussions without the need for complex setups. By leveraging Java’s networking capabilities, this project exemplifies fundamental concepts of concurrent programming and network communication, providing a practical solution for online chatting.',
            skills: 'Java',
            githubLink: 'https://github.com/HarithaKadali9/ChatApplication', // Update with the GitHub link if available
            liveLink: '#', // Update with the live link if available
        },
        // Add more project objects as needed...
    ];

    return (
        <div className='max-w-[1200px] mx-auto p-5' id='work'>
            <div className='pb-8'>
                <p className='text-4xl mb-3 font-bold flex justify-center items-center'>Projects</p>
                <p className='text-gray-400 text-2xl'>Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {projects.map((project, index) => (
                    <div key={index} className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        mx-auto content-div h-[200px] bg-cover relative'
                    >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>{project.title}</span>
                            
                            <div className='pt-8 flex justify-center items-center space-x-4'>
                                <a href={project.githubLink} target='_blank' rel="noopener noreferrer">
                                    <FaGithub size={30} />
                                </a>
                                <a href={project.liveLink} target='_blank' rel="noopener noreferrer">
                                    <FaEye size={30} />
                                </a>
                                <div onClick={() => handleOpen(project)} className='mr-6 z-20'>
                                    <FaArrowRight size={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for project details */}
            {isOpen && currentProject && (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80'>
        <div className='bg-black p-4 sm:p-6 md:p-8 rounded-lg relative w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3'>
            <AiOutlineClose 
                size={30} 
                className='absolute top-4 right-4 cursor-pointer' 
                onClick={handleClose} 
            />
            <h2 className='text-xl sm:text-2xl font-bold mb-2'>{currentProject.title}</h2>
            <p className='text-lg sm:text-xl font-bold mb-2'>Skills Used:</p>
            <p className='text-base sm:text-lg mb-4'>{currentProject.skills}</p>
            <p className='mb-4 text-justify text-base sm:text-lg'>{currentProject.description}</p>
            <div className='flex flex-col sm:flex-row'>
                <a href={currentProject.githubLink} target='_blank' rel="noopener noreferrer">
                    <button className='border border-white hover:bg-white hover:text-black text-white rounded-lg px-4 py-2 mb-2 sm:mr-2 sm:mb-0'>GitHub</button>
                </a>
                <a href={currentProject.liveLink} target='_blank' rel="noopener noreferrer">
                    <button className='border border-white hover:bg-white hover:text-black text-white rounded-lg px-4 py-2'>Live</button>
                </a>
            </div>
        </div>
    </div>
)}


        </div>
    )
}

export default Work;
