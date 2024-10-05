import React, { useState } from 'react';
import github from "../assets/Git.png";
import Attendance from "../assets/Attendance.jpg"
import ChatApplication from "../assets/chatapplication.png"
import TextTranslator from "../assets/texttranslator.jpg"
// Sample data for projects
const projects = [
  {
    id: 1,
    title: 'Face recognition Attendance System',
    technologies: 'ML, Python',
    description: "I developed a face recognition attendance system using a combination of Python libraries and frameworks to automate and streamline the attendance marking process. The system integrates computer vision techniques for face detection and recognition, web development tools for user interface, and email notifications for alerts and reports. It's designed to enhance accuracy, efficiency, and user convenience in attendance management.",
    image: Attendance, // Replace with your project image URL
    githublink: "https://github.com/HarithaKadali9/face-recognition-attendance-system",
    watch: "https://github.com/HarithaKadali9/face-recognition-attendance-system",
  },
  {
    id: 2,
    title: 'Chat Application',
    technologies: 'ML, Python',
    description: "In my project, I developed a multi-threaded chat application using Java, which facilitates real-time communication between multiple clients and a server. This application leverages socket programming to establish connections, manages client-server interactions using input/output streams, and ensures thread safety for concurrent operations. The system enhances user engagement by supporting interactive messaging and dynamic updates across connected clients.",
    image: ChatApplication, // Replace with your project image URL
    githublink: "https://github.com/HarithaKadali9/ChatApplication",
    watch: "https://github.com/HarithaKadali9/ChatApplication",
  },
  {
    id: 3,
    title: 'Text Translator',
    technologies: 'ML, Python',
    description: "The Text Translator project leverages the MyMemory Text Translator API to offer seamless translation between multiple languages. By integrating this API, the project provides accurate and real-time translations for text input, facilitating global communication and language learning. Users can input text and receive instant translations in their desired language, making it an invaluable tool for both personal and professional use. The project emphasizes ease of use and accessibility, aiming to bridge language barriers efficiently and effectively.",
    image: TextTranslator, // Replace with your project image URL
    githublink: "https://github.com/HarithaKadali9/Translator",
    watch: "https://github.com/HarithaKadali9/Translator",
  },
  // Add more projects here
];

function ProjectMapping({ project }) {
  return (
    <div className="container mx-auto p-6 bg-slate-950 text-white">
  <h2 className="text-3xl font-bold mb-6 text-center">{project.title}</h2>
  <div className="flex flex-col lg:flex-row items-center lg:items-start">
    <div className="lg:w-1/2 p-4 lg:p-6">
      <h3 className="text-2xl font-semibold mb-4">Technologies used: {project.technologies}</h3>
      <p className="text-lg text-justify">{project.description}</p>
      <button
        className='border-2 border-red-600 bg-slate-900 hover:bg-green-700 rounded-full p-2'
        onClick={() => window.open(project.githublink, '_blank')}
      >
        Github-Link
      </button>
      <button
        className='border-2 border-red-600 bg-slate-900 hover:bg-green-700 rounded-full p-2'
        onClick={() => window.open(project.watch, '_blank')}
      >
        Watch here
      </button>
    </div>
    <div className="lg:w-1/2 p-4">
      <img 
        src={project.image} 
        className="w-full h-auto max-w-xs lg:max-w-sm object-cover justify-center items-center"
      />
    </div>
  </div>
</div>

  );
}


function Projects() {
  const [activeTab, setActiveTab] = useState('project1');

  // Determine which project to display based on the active tab
  const activeProject = projects.find(project => `project${project.id}` === activeTab);

  return (
    <div id="projects" className="container mx-auto px-4 py-8 bg-slate-950 h-full">
      <h2 className="text-2xl font-bold text-white mb-4">Projects</h2>
      <div className="flex justify-center mb-6">
        {projects.map(project => (
          <button 
            key={project.id}
            className={`px-4 py-2 font-semibold text-sm ${activeTab === `project${project.id}` ? 'bg-green-800 text-white' : 'bg-slate-800 text-gray-400'}hover:bg-slate-600 rounded-t-lg hover:rounded-lg mx-2`}
            onClick={() => setActiveTab(`project${project.id}`)}
          >
            Project {project.id}
          </button>
        ))}
      </div>

      <div className="border border-green-800 rounded-lg p-4">
        {activeProject && (
          <ProjectMapping project={activeProject} />
        )}
      </div>
    </div>
  );
}

export default Projects;