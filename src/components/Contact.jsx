import React from 'react';
import ReactPlayer from 'react-player';

const Contact = () => {
  return (
    <div className='relative max-w-[1200px] mx-auto sm:py-20 p-5 z-0' id='contact'>
      {/* Video should cover the entire screen */}
      <div className='absolute inset-0 z-0'>
        <ReactPlayer
          url='assets/globe.mp4'
          className='absolute top-0 left-0'
          width='100%'
          height='100%'
          playing
          loop
          muted
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Form overlay */}
      <div className='relative z-10 flex items-center justify-center min-h-screen'>
        <div className='bg-black bg-opacity-60 p-10 rounded-lg max-w-[800px] w-full text-center'>
          <h2 className='text-4xl font-bold text-white'>Contact Me</h2>
          <div className='mt-6'>
            <form action="https://getform.io/f/byvplyla" method="POST">
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                <div>
                  <div className='mt-2.5 relative'>
                    <input
                      type="text"
                      name='name'
                      placeholder='Your Name'
                      className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400
                      border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                    />
                  </div>
                </div>
                <div>
                  <div className='mt-2.5 relative'>
                    <input
                      type="email"
                      name='email'
                      placeholder='Your Email'
                      className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400
                      border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <div className='mt-2.5 relative'>
                    <textarea
                      name='message'
                      placeholder='Your Message'
                      className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400
                      border border-gray-700 rounded-md focus:outline-none focus:border-pink-600'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <button
                    type='submit'
                    className='text-xl w-full p-4 mt-2 font-semibold text-white bg-gray-700 hover:bg-black rounded-md'
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
