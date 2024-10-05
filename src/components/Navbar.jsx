import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Effect to close the navbar when in desktop mode
  useEffect(() => {
    const handleResize = () => {
      // Check if the viewport width is greater than the md breakpoint (768px)
      if (window.innerWidth >= 768) {
        setNav(false); // Close the navbar
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center px-4'>
      {/* Logo */}
      <h1 className='text-3xl font-bold text-gray-700'>Haritha Kadali</h1>

      {/* Desktop Menu */}
      <ul className='hidden md:flex text-xl'>
        <li className='p-5'><a href='#about'>About</a></li>
        <li className='p-5'><a href='#skills'>Skills</a></li>
        <li className='p-5'><a href='#work'>Projects</a></li>
        <li className='p-5'><a href='#contact'>Contact</a></li>
      </ul>

      {/* Mobile Menu Icon (Hamburger) */}
      <div onClick={handleNav} className='block md:hidden fixed top-4 right-6 z-30'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      {/* Mobile Menu */}
      <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 z-20' : 'fixed left-[-100%] top-0'}>
        <h1 className='text-3xl text-white m-4'>Haritha Kadali</h1>
        <ul className='p-8 text-2xl'>
          <li className='p-2'><a href='#home'>Home</a></li>
          <li className='p-2'><a href='#about'>About</a></li>
          <li className='p-2'><a href='#education'>Education</a></li>
          <li className='p-2'><a href='#internships'>Internships</a></li>
          <li className='p-2'><a href='#skills'>Skills</a></li>
          <li className='p-2'><a href='#work'>Projects</a></li>
          <li className='p-2'><a href='#hobbies'>Hobbies</a></li>
          <li className='p-2'><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
