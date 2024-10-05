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
  const skills = [
      { name: 'Leadership Qualities', percentage: 90 },
      { name: 'Communication', percentage: 80 },
      { name: 'Teamwork', percentage: 95 },
      { name: 'Time Management', percentage: 90 },
  ];

  return (
    <div id="skills" className="container max-w-full mx-auto px-4 py-8 z-0 bg-black">
      <h2 className="text-4xl font-bold mb-4 flex justify-center items-center text-white">Skills</h2>

      <div className="flex justify-center mb-6 flex-wrap">
        {['frontend', 'backend', 'programming', 'tools', 'design'].map((tab) => (
          <button 
            key={tab}
            className={`px-4 py-2 font-semibold text-base sm:text-sm ${activeTab === tab ? 'bg-white text-black' : 'bg-slate-800 text-gray-400'} hover:bg-slate-600 rounded-lg mx-2 my-1`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className='flex justify-center'>
        <div className="border border-gray-700 rounded-lg w-full md:w-1/2 p-2">

          {activeTab === 'frontend' && (
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
              {[{src: Html, label: 'HTML'}, {src: react, label: 'React.js'}, {src: Css, label: 'CSS'}, {src: tailwindCss, label: 'Tailwind CSS'}].map(({ src, label }) => (
                <div key={label} className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                  <img src={src} alt={label} className='w-20 h-20 mx-auto mb-3 object-contain' /> 
                  <p className='text-white text-center font-semibold'>{label}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'backend' && (
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
              {[{src: Node, label: 'Node.js'}, {src: sql, label: 'SQL'}].map(({ src, label }) => (
                <div key={label} className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                  <img src={src} alt={label} className='w-20 h-20 mx-auto mb-3 object-contain' />
                  <p className='text-white text-center font-semibold'>{label}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'programming' && (
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
              {[{src: java, label: 'Java'}, {src: python, label: 'Python'}].map(({ src, label }) => (
                <div key={label} className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                  <img src={src} alt={label} className='w-20 h-20 mx-auto mb-3 object-contain' />
                  <p className='text-white text-center font-semibold'>{label}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
              {[{src: git, label: 'Git'}, {src: github, label: 'GitHub'}, {src: VisualStudio, label: 'Visual Studio'}].map(({ src, label }) => (
                <div key={label} className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                  <img src={src} alt={label} className='w-20 h-20 mx-auto mb-3 object-contain' />
                  <p className='text-white text-center font-semibold'>{label}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'design' && (
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
              {[{src: Figma, label: 'Figma'}, {src: Canva, label: 'Canva'}].map(({ src, label }) => (
                <div key={label} className='rounded-lg p-2 transform transition-transform duration-300 hover:scale-105 bg-gray-800 shadow-md'>
                  <img src={src} alt={label} className='w-20 h-20 mx-auto mb-3 object-contain' />
                  <p className='text-white text-center font-semibold'>{label}</p>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </div>

      <div className='flex justify-center mt-8 pt-8'>
        <div className='w-full md:w-1/2'>
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <span className='text-white'>{skill.name}</span>
                <span className='text-white'>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-1">
                <div
                  className={`bg-gray-800 h-full rounded-full`}
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
