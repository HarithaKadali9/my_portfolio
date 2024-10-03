import React from 'react'
import leetcode from '../assets/codingProfiles/leetcode.png'
import gfg from '../assets/codingProfiles/gfg.jpg'
import Hackerrank from '../assets/codingProfiles/hackerrank.png'

const Coding = () => {
  return (
    <div className='bg-black flex justify-center items-center space-x-8' id='codingprofiles'>
      <a href='https://leetcode.com/explore/' target='_blank' rel='noopener noreferrer'>
        <img src={leetcode} alt='Leetcode' className='rounded-full' />
      </a>
      <a href='https://www.geeksforgeeks.org/user/kadaliharitha23/' target='_blank' rel='noopener noreferrer'>
        <img src={gfg} alt='Gfg' className='rounded-full' />
      </a>
      <a href='https://www.hackerrank.com/profile/kadaliharitha23' target='_blank' rel='noopener noreferrer'>
        <img src={Hackerrank} alt='Hackerrank' className='rounded-full' />
      </a>
    </div>
  )
}

export default Coding
