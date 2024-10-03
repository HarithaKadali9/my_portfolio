import React, { useState, useEffect } from 'react';
import image from "../assets/studying.jpg";

const FirstPage = () => {
    const roles = ['Web Developer', 'Java Developer', 'Software Engineer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [speed, setSpeed] = useState(100); // Adjust typing speed here

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const type = () => {
      if (!isDeleting) {
        const nextText = currentRole.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);

        if (nextText === currentRole) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000); // Wait 1 second before deleting
        }
      } else {
        const prevText = currentRole.substring(0, displayedText.length - 1);
        setDisplayedText(prevText);

        if (prevText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to the next role
        }
      }
      // Toggle cursor visibility
      setCursorVisible((prev) => !prev);
    };

    const timer = setTimeout(type, speed);

    return () => clearTimeout(timer); // Clear timer on cleanup
  }, [displayedText, isDeleting, currentRoleIndex, roles, speed]);

  return (
    <div className='h-screen flex items-center justify-center bg-slate-950'>
      <div className='flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8'>
        <div className='p-10'>
          <div>
            <p className='text-5xl md:text-6xl font-bold mb-4 font-courier new text-center md:text-left'>
              Hello, I am Haritha,
            </p>
          </div>
          <div className="flex items-center justify-center h-screen">
      <p className="relative text-4xl">
        {displayedText}
        {cursorVisible && (
          <span
            className="bg-white w-[2px] h-[40px] inline-block"
            style={{ marginLeft: '4px' }} // Adjusts spacing between text and cursor
          />
        )}
      </p>
    </div>
          <div className='flex flex-col md:flex-row md:space-y-0 md:space-x-4 items-center pt-8'>
            <button className='border-2 border-red-600 bg-slate-900 text-white rounded-full p-4 mx-4'>
              Get my resume
            </button>
            <button className='border-2 border-red-600 bg-slate-900 text-white rounded-full p-4 mx-4'>
              Hire me
            </button>
          </div>
        </div>
        <div>
          <img src={image} className='animate-pulse w-40 h-40 md:w-80 md:h-80 rounded-full' alt="studying" />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
