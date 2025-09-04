import React from 'react'
import { Link } from 'react-router-dom'   // should be react-router-dom, not react-router

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md pt-2 bg-gray-50">
      <div className="text-2xl font-bold italic text-blue-600">
        EduMatch
      </div>

      <ul className="flex gap-20 text-gray-700 text-xl items-center">
        <li>
          <Link to="/" className="hover:text-blue-600">Home</Link>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-600">About</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </li>
        <li>
          <Link to="/profile">
            <img 
              src="src/assets/profile.webp" 
              alt="Profile" 
              className="h-12 w-12 rounded-full cursor-pointer hover:border-2 border-blue-600"
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
