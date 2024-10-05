import React from 'react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div className='bg-black max-w-[1200px] sm:h-[150px] flex justify-between text-white flex-col items-center p-10 mx-auto space-y-4'>
      <div className='flex justify-center space-x-4'>
        <a href="https://github.com/HarithaKadali9">
          <FaGithub size={30}/>
        </a>
        <a href="https://www.instagram.com/haritha.kadali">
          <FaInstagram size={30}/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089723662522">
          <FaFacebook size={30}/>
        </a>
      </div>
      <p>copyright @{currentYear} All rights reserved</p> {/* Use the dynamic year here */}
    </div>
  );
}

export default Footer;
