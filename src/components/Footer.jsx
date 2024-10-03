import React from 'react'
import NavIcon1 from "../assets/nav-icon1.svg"
import NavIcon2 from "../assets/nav-icon2.svg"
import NavIcon3 from "../assets/nav-icon3.svg"

function Footer() {
  return (
    <div className='bg-black max-w-[1200px] sm:h-[150px] flex justify-between text-white flex-col items-center p-10 mx-auto space-y-4'>
      <div className='flex justify-center space-x-4'>
        <a href="https://github.com/HarithaKadali9"><img src={NavIcon1} alt="Linkedin" height={20} width={20}/></a>
        <a href="https://www.instagram.com/haritha.kadali" ><img src={NavIcon2} alt="Instagram" height={20} width={20}/></a>
        <a href="#"><img src={NavIcon3} alt="Facebook" height={20} width={20}/></a>
      </div>
      <p>copyright @2024 All rights reserved</p>
    </div>
  )
}

export default Footer
