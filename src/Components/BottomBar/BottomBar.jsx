// import React from 'react'

// export const BottomBar = () => {
//   return (
//     <div className='bg-blue-600 text-white p-3 mt-10  text-center'>
//         <p></p>
//     </div>
//   )
// }

import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export const BottomBar = () => {
  return (
    <div className="bg-blue-600 text-white p-3 mt-10 text-center flex items-center justify-between ">
      <p className="mb-2">© {new Date().getFullYear()} EduMatch. All rights reserved.</p>
      <div className="flex justify-center gap-10 text-xl">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaInstagram />
        </a>
      </div>
    </div>
  )
}
