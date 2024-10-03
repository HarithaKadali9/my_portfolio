import React from 'react'
import Attendance from "../assets/Attendance.jpg";
import Python from "../assets/Python.png";
import Java from "../assets/Java.png";
import ChatApplication from "../assets/chatapplication.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold flex justify-center items-center'>Projects</p>
            <p className='text-gray-400 text-2xl'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={Attendance} layout="fill" objectfit="cover" alt="Project"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 dont-bold'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={Attendance} layout="fill" objectfit="cover" alt="Project"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 dont-bold'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={Attendance} layout="fill" objectfit="cover" alt="Project"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 dont-bold'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={Attendance} layout="fill" objectfit="cover" alt="Project"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 dont-bold'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={Attendance} layout="fill" objectfit="cover" alt="Project"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 dont-bold'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={Attendance} layout="fill" objectfit="cover" alt="Project"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 dont-bold'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
