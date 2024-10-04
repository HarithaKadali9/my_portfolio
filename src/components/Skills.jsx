import React, { useState } from 'react';
import java from "../assets/Skills/Java.png";
import python from "../assets/Skills/Python.png";
import Html from "../assets/Skills/Html.png";
import Css from "../assets/Skills/CSS.png";
import tailwindCss from "../assets/Skills/Tailwind.png";
import react from "../assets/Skills/React.png";
import git from "../assets/Skills/GitSkill.png";
import github from "../assets/Skills/Git.png";
import VisualStudio from "../assets/Skills/VisualStudio.png";
import Figma from "../assets/Skills/Figma.png";
import Canva from "../assets/Skills/Canva.png";
import sql from "../assets/Skills/SQL.png";
import Node from "../assets/Skills/Node.png";

function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <div id="skills" className="container max-w-[1200px] mx-auto px-4 py-8 z-0 bg-black">
      <h2 className="text-4xl font-bold mb-4 flex justify-center items-center text-white">Skills</h2>
      <div className="flex justify-center mb-6">
        <button 
          className={`px-4 py-2 font-semibold text-sm ${activeTab === 'frontend' ? 'bg-slate-900 text-white' : 'bg-slate-800 text-gray-400'} hover:bg-slate-600 rounded-t-lg hover:rounded-lg mx-2`}
          onClick={() => setActiveTab('frontend')}
        >
          Frontend
        </button>
        <button 
          className={`px-4 py-2 font-semibold text-sm ${activeTab === 'backend' ? 'bg-white text-black ' : 'bg-slate-800 text-gray-400'} rounded-lg  hover:bg-slate-600 `}
          onClick={() => setActiveTab('backend')}
        >
          Backend
        </button>
        <button 
          className={`px-4 py-2 font-semibold text-sm ${activeTab === 'programming' ? 'bg-white text-black ' : 'bg-slate-800 text-gray-400'} hover:bg-slate-600 rounded-t-lg hover:rounded-lg mx-2`}
          onClick={() => setActiveTab('programming')}
        >
          Programming
        </button>
        <button 
          className={`px-4 py-2 font-semibold text-sm ${activeTab === 'tools' ? 'bg-white text-black ' : 'bg-slate-800 text-gray-400'} hover:bg-slate-600 rounded-t-lg hover:rounded-lg mx-2`}
          onClick={() => setActiveTab('tools')}
        >
          Tools
        </button>
        <button 
          className={`px-4 py-2 font-semibold text-sm ${activeTab === 'design' ? 'bg-white text-black ' : 'bg-slate-800 text-gray-400'} hover:bg-slate-600 rounded-t-lg hover:rounded-lg mx-2`}
          onClick={() => setActiveTab('design')}
        >
          Design
        </button>
      </div>

      <div className='flex justify-center'>
        <div className="border border-gray-700 rounded-lg md:w-1/2 p-2">
          {activeTab === 'frontend' && (
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={Html} alt="HTML" className='w-20 h-20 mx-auto mb-3 object-contain' /> 
                <p className='text-white text-center font-semibold'>HTML</p>
              </div>
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={Css} alt="CSS" className='w-20 h-20 mx-auto mb-3 object-contain' /> 
                <p className='text-white text-center font-semibold'>CSS</p>
              </div>
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={react} alt="React.js" className='w-20 h-20 mx-auto mb-3 object-contain' /> 
                <p className='text-white text-center font-semibold'>React.js</p>
              </div>
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={tailwindCss} alt="Tailwind CSS" className='w-20 h-20 mx-auto mb-3 object-contain' /> 
                <p className='text-white text-center font-semibold'>Tailwind CSS</p>
              </div>
            </div>
          )}
          {activeTab === 'backend' && (
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={Node} alt="Node.js" className='w-20 h-20 mx-auto mb-3 object-contain' />
                <p className='text-white text-center font-semibold'>Node.js</p>
              </div>
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={sql} alt="SQL" className='w-20 h-20 mx-auto mb-3 object-contain' />
                <p className='text-white text-center font-semibold'>SQL</p>
              </div>
            </div>
          )}
          {activeTab === 'programming' && (
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={java} alt="Java" className='w-20 h-20 mx-auto mb-3 object-contain' />
                <p className='text-white text-center font-semibold'>Java</p>
              </div>
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={python} alt="Python" className='w-20 h-20 mx-auto mb-3 object-contain' />
                <p className='text-white text-center font-semibold'>Python</p>
              </div>
            </div>
          )}
          {activeTab === 'tools' && (
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={git} alt="Git" className='w-20 h-20 mx-auto mb-3 object-contain' />
                <p className='text-white text-center font-semibold'>Git</p>
              </div>
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={github} alt="GitHub" className='w-20 h-20 mx-auto mb-3 object-contain' />
                <p className='text-white text-center font-semibold'>GitHub</p>
              </div>
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={VisualStudio} alt="Visual Studio" className='w-20 h-20 mx-auto mb-3 object-contain' />
                <p className='text-white text-center font-semibold'>Visual Studio</p>
              </div>
            </div>
          )}
          {activeTab === 'design' && (
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={Figma} alt="Figma" className='w-20 h-20 mx-auto mb-3 object-contain' />
                <p className='text-white text-center font-semibold'>Figma</p>
              </div>
              <div className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                <img src={Canva} alt="Canva" className='w-20 h-20 mx-auto mb-3 object-contain' />
                <p className='text-white text-center font-semibold'>Canva</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Skills
