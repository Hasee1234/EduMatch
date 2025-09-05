import React from "react";

const MyProfile = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Top Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 relative">
        {/* Profile Picture */}
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-md"
        />

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
          <p className="text-gray-500 mt-2">Web Developer | Learner | Mentor</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 absolute right-6 top-6 md:static">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition">
            Edit
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-md transition">
            Logout
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Skills */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Skills</h2>
          <ul className="space-y-2 text-gray-700">
            <li>⚡ JavaScript, React, Node.js</li>
            <li>⚡ TailwindCSS, UI/UX</li>
            <li>⚡ Firebase & MongoDB</li>
          </ul>
        </div>

        {/* Expertise */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Expertise</h2>
          <p className="text-gray-700">
            Passionate about building scalable web applications and
            creating impactful user experiences through clean and modern
            UI designs.
          </p>
        </div>

        {/* Projects */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Projects</h2>
          <ul className="space-y-2 text-gray-700">
            <li>🚀 EduMatch – Peer learning platform</li>
            <li>📱 InstaView – Social media clone</li>
            <li>🌐 Portfolio Website</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
