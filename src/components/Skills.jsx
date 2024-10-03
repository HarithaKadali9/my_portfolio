import React, { useState } from 'react';
import java from "../assets/Java.png";
import python from "../assets/Python.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import tailwindCss from "../assets/Tailwind.png";
import react from "../assets/React.png";
import git from "../assets/GitSkill.png";
import github from "../assets/Git.png";
import VisualStudio from "../assets/VisualStudio.png";
import Figma from "../assets/Figma.png";
import Canva from "../assets/Canva.png";
import sql from "../assets/SQL.png";
import Node from "../assets/Node.png";

function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <div id="skills" className="container max-w-[1200px] mx-auto px-4 py-8 bg-black">
      <h2 className="text-4xl font-bold mb-4 flex justify-center items-center">Skills</h2>
      <div className="flex justify-center mb-6">
        <button 
          className={`px-4 py-2 font-semibold text-sm ${activeTab === 'frontend' ? 'bg-slate-900 text-white' : 'bg-slate-800 text-gray-400'} hover:bg-slate-600 rounded-t-lg hover:rounded-lg mx-2`}
          onClick={() => setActiveTab('frontend')}
        >
          Frontend
        </button>
        <button 
          className={`px-4 py-2 font-semibold text-sm ${activeTab === 'backend' ? 'bg-green-800 text-white' : 'bg-slate-800 text-gray-400'} hover:bg-slate-600 rounded-t-lg hover:rounded-lg mx-2`}
          onClick={() => setActiveTab('backend')}
        >
          Backend
        </button>
        <button 
          className={`px-4 py-2 font-semibold text-sm ${activeTab === 'programming' ? 'bg-green-800 text-white' : 'bg-slate-800 text-gray-400'} hover:bg-slate-600 rounded-t-lg hover:rounded-lg mx-2`}
          onClick={() => setActiveTab('programming')}
        >
          Programming
        </button>
        <button 
          className={`px-4 py-2 font-semibold text-sm ${activeTab === 'tools' ? 'bg-green-800 text-white' : 'bg-slate-800 text-gray-400'} hover:bg-slate-600 rounded-t-lg hover:rounded-lg mx-2`}
          onClick={() => setActiveTab('tools')}
        >
          Tools
        </button>
        <button 
          className={`px-4 py-2 font-semibold text-sm ${activeTab === 'design' ? 'bg-green-800 text-white' : 'bg-slate-800 text-gray-400'} hover:bg-slate-600 rounded-t-lg hover:rounded-lg mx-2`}
          onClick={() => setActiveTab('design')}
        >
          Design
        </button>
      </div>

      <div className="border border-gray-700 rounded-lg p-4">
        {activeTab === 'frontend' && (
          <div className="flex flex-wrap justify-center">
            <img src={Html} alt="Html" className='w-16 h-16 mx-3 mb-3' />
            <img src={Css} alt="Css" className='w-16 h-16 mx-3 mb-3' />
            <img src={react} alt="ReactJs" className='w-16 h-16 mx-3 mb-3' />
            <img src={tailwindCss} alt="TailwindCss" className='w-16 h-16 mx-3 mb-3' />
          </div>
        )}
        {activeTab === 'backend' && (
          <div className="flex flex-wrap justify-center">
            <img src={Node} alt="Node" className='w-16 h-16 mx-3 mb-3' />
            <img src={sql} alt="Sql" className='w-16 h-16 mx-3 mb-3' />
          </div>
        )}
        {activeTab === 'programming' && (
          <div className="flex flex-wrap justify-center">
            <img src={java} alt="Java" className='w-16 h-16 mx-3 mb-3' />
            <img src={python} alt="Python" className='w-16 h-16 mx-3 mb-3' />
          </div>
        )}
        {activeTab === 'tools' && (
          <div className="flex flex-wrap justify-center">
            <img src={git} alt="Git" className='w-16 h-16 mx-3 mb-3' />
            <img src={github} alt="GitHub" className='w-16 h-16 mx-3 mb-3' />
            <img src={VisualStudio} alt="Visual Studio" className='w-16 h-16 mx-3 mb-3' />
          </div>
        )}
        {activeTab === 'design' && (
          <div className="flex flex-wrap justify-center">
            <img src={Figma} alt="Figma" className='w-16 h-16 mx-3 mb-3' />
            <img src={Canva} alt="Canva" className='w-16 h-16 mx-3 mb-3' />
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
