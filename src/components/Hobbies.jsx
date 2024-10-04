import React from 'react';
import cooking from '../assets/Hobbies/cooking.jpg';
import drawing from '../assets/Hobbies/drawing.jpg';
import singing from '../assets/Hobbies/listening.jpg';
import reading from '../assets/Hobbies/reading.jpg';

const Hobbies = () => {
  return (
    <div className='flex flex-col items-center p-4 mt-8 mb-8 z-0' id='hobbies'>
      <div className='text-center mb-6'>
        <p className='text-3xl'>My Hobbies</p>
        <p className='text-gray-400 md:text-xl mt-2'>
          Other than technical knowledge, <br />
          my hobbies include drawing, reading, singing, and cooking, which allow me to express creativity and relax outside of work!!
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        <img src={drawing} className='h-40 w-40 rounded-lg transform transition-transform hover:scale-105 duration-300' alt='drawing' />
        <img src={reading} className='h-40 w-40 rounded-lg transform transition-transform hover:scale-105 duration-300' alt='reading' />
        <img src={singing} className='h-40 w-40 rounded-lg transform transition-transform hover:scale-105 duration-300' alt='singing' />
        <img src={cooking} className='h-40 w-40 rounded-lg transform transition-transform hover:scale-105 duration-300' alt='cooking' />
      </div>
    </div>
  );
}

export default Hobbies;
