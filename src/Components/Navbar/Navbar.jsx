
// import React from 'react'
// import { Link } from 'react-router'

// export const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center p-4 shadow-md pt-2 bg-gray-50">
//       <div className="text-2xl font-bold italic text-blue-600">
//         EduMatch
//       </div>

//       <ul className="flex gap-20 text-gray-700 text-xl  items-center">
//         <Link to='/' className="hover:text-blue-600">
//         <li>
//           <a href="#home" className="hover:text-blue-600">Home</a>
//         </li>
//         </Link>
//         <li>
//           <a href="#about" className="hover:text-blue-600">About</a>
//         </li>
//         <li>
//           <a href="#contact" className="hover:text-blue-600">Contact</a>
//         </li>
//         <li>
       
//         <img 
//           src="src/assets/profile.webp" 
//           alt="Profile" 
//           className="h-12 w-12 rounded-full cursor-pointer hover:border-2 border-blue-600"
//         />
      
            
//         </li>
//       </ul>

//     </nav>
//   )
// }



import React from "react";
import { Link } from "react-router-dom"; // ✅ use react-router-dom
import { useDispatch, useSelector } from "react-redux";
import { openLogin } from "../../Store/Slices/UiSlice"; // adjust path as per your folder

export const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleProfileClick = () => {
    if (user) {
      // ✅ Redirect to Profile page
      window.location.href = "/profile";
    } else {
      // ✅ Open login dialog
      dispatch(openLogin());
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md pt-2 bg-gray-50">
      <div className="text-2xl font-bold italic text-blue-600">EduMatch</div>

      <ul className="flex gap-20 text-gray-700 text-xl items-center">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
        <li>
          <button onClick={handleProfileClick}>
            <img
              src={user?.photoURL || "src/assets/profile.webp"}
              alt="Profile"
              className="h-12 w-12 rounded-full cursor-pointer hover:border-2 border-blue-600"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};
