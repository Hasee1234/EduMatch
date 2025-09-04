import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Store/Slices/AuthSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-700">
          Please <span className="text-blue-600 font-semibold">Login</span> to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Profile Image */}
        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-md"
        />

        {/* Buttons */}
        <div className="flex md:flex-col gap-4 mt-6 md:mt-0 md:ml-6">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Edit Profile
          </button>
          <button
            onClick={() => dispatch(logoutUser())}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-10 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-600">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>React.js</li>
            <li>Firebase</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-600">Studies</h2>
          <p className="text-gray-700">B.Sc. Computer Science, University XYZ</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-600">Projects</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Peer Learning Hub (EduMatch)</li>
            <li>Todo App with Firebase</li>
            <li>Portfolio Website</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
