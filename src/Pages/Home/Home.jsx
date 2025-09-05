// import React from 'react'

// export const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-gray-50 shadow-md">
//         {/* Left Text */}
//         <div className="max-w-xl">
//           <h1 className="text-5xl font-bold text-blue-600 leading-tight">
//             Connect. <br /> Learn. <br /> Grow. Together.
//           </h1>
//           <p className="text-gray-600 mt-6 text-lg">
//             EduMatch helps you find peers who can teach what you want to learn —
//             and learn what you can teach. Build study circles, exchange skills,
//             and grow faster with peer learning.
//           </p>
//           <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
//             Get Started
//           </button>
//         </div>

//         {/* Right Illustration */}
//         <div className="mt-8 md:mt-0">
//           <img 
//             src="src/assets/study2.jpg" 
//             alt="Learning Illustration" 
//             className="w-[400px] h-auto "
//           />
//         </div>
//       </div>

//   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
//         {/* Left Sidebar */}
//         <div className="bg-gray-50 border-1 border-blue-200 p-6 rounded-lg shadow-sm  flex items-center flex-col">
//             <img src="src/assets/signup.jpg" className='w-[100px] h-auto' />
//           <h2 className="text-xl font-semibold mb-4 text-blue-600">Profile</h2>
//           <p className="text-gray-600 mb-2">
//   🚀 <span className="font-semibold">Boost </span>your profile to stand out.
// </p>
// <p className="text-gray-600 mb-2">
//   🌍 <span className="font-semibold">Share</span> your story and discover your skills.
// </p>
// <p className="text-gray-600 mb-2">
//   🤝 <span className="font-semibold">Engage </span> with peers and start collaborations.
// </p>
// <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
//   Profile
// </button>

//         </div>

//         {/* Center Content */}
//         <div className="bg-gray-50 border-1 border-blue-200 p-6 rounded-lg shadow-md text-center flex items-center flex-col">
//                         <img src="src/assets/find.png" className='w-[100px] h-auto ' />

//           <h2 className="text-2xl font-bold text-blue-600 mb-4">Find Peers</h2>
//           <div className="space-y-4 text-gray-700">
//   <p>1️⃣ <span className="font-semibold">Get matched</span> with peers based on skills.</p>
//   <p>2️⃣ <span className="font-semibold">Connect</span> and build your profile together.</p>
//   <p>3️⃣ <span className="font-semibold">Collaborate</span> to learn, teach, and grow.</p>
// </div>

//           <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
//             Match Now
//           </button>
//         </div>

//         {/* Right Sidebar */}
//         <div className="bg-gray-50 border-1 border-blue-200 p-6 rounded-lg shadow-sm flex items-center flex-col">
//                                     <img src="src/assets/connect.png" className='w-[100px] h-auto ' />

//          <h2 className="text-xl font-semibold mb-4 text-blue-600">Connect</h2>
// <ul className="space-y-3 text-gray-700">
//   <li>🤝 <span className="font-semibold">Find</span> peers who share your learning goals.</li>
//   <li>💬 <span className="font-semibold">Start</span> conversations and exchange knowledge.</li>
//   <li>🌐 <span className="font-semibold">Build</span> meaningful connections.</li>
// </ul>
//      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
//             Message
//           </button>
//         </div>
        
//       </div>
//     </div>
//   )
// }


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openLogin } from '../../Store/Slices/UiSlice'
import { Link } from 'react-router-dom'

export const Home = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-gray-50 shadow-md">
        {/* Left Text */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-blue-600 leading-tight">
            Connect. <br /> Learn. <br /> Grow. Together.
          </h1>
          <p className="text-gray-600 mt-6 text-lg">
            EduMatch helps you find peers who can teach what you want to learn —
            and learn what you can teach. Build study circles, exchange skills,
            and grow faster with peer learning.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Illustration */}
        <div className="mt-8 md:mt-0">
          <img 
            src="src/assets/study2.jpg" 
            alt="Learning Illustration" 
            className="w-[400px] h-auto"
          />
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Left Sidebar (Profile Card) */}
        <div className="bg-gray-50 border-1 border-blue-200 p-6 rounded-lg shadow-sm flex items-center flex-col">
          <img src="src/assets/signup.jpg" className="w-[100px] h-auto" />
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Profile</h2>
          <p className="text-gray-600 mb-2">
            🚀 <span className="font-semibold">Boost </span>your profile to stand out.
          </p>
          <p className="text-gray-600 mb-2">
            🌍 <span className="font-semibold">Share</span> your story and discover your skills.
          </p>
          <p className="text-gray-600 mb-2">
            🤝 <span className="font-semibold">Engage </span> with peers and start collaborations.
          </p>

          {user ? (
            <Link to="/profile">
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Profile
              </button>
            </Link>
          ) : (
            <button 
              onClick={() => dispatch(openLogin())} 
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Profile
            </button>
          )}
        </div>

        {/* Center Content */}
        <div className="bg-gray-50 border-1 border-blue-200 p-6 rounded-lg shadow-md text-center flex items-center flex-col">
          <img src="src/assets/find.png" className="w-[100px] h-auto" />
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Find Peers</h2>
          <div className="space-y-4 text-gray-700">
            <p>1️⃣ <span className="font-semibold">Get matched</span> with peers based on skills.</p>
            <p>2️⃣ <span className="font-semibold">Connect</span> and build your profile together.</p>
            <p>3️⃣ <span className="font-semibold">Collaborate</span> to learn, teach, and grow.</p>
          </div>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Match Now
          </button>
        </div>

        {/* Right Sidebar */}
        <div className="bg-gray-50 border-1 border-blue-200 p-6 rounded-lg shadow-sm flex items-center flex-col">
          <img src="src/assets/connect.png" className="w-[100px] h-auto" />
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Connect</h2>
          <ul className="space-y-3 text-gray-700">
            <li>🤝 <span className="font-semibold">Find</span> peers who share your learning goals.</li>
            <li>💬 <span className="font-semibold">Start</span> conversations and exchange knowledge.</li>
            <li>🌐 <span className="font-semibold">Build</span> meaningful connections.</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Message
          </button>
        </div>
      </div>
    </div>
  )
}
