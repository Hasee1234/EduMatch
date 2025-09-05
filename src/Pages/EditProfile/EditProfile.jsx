import React, { useState } from "react";

const EditProfilePage = () => {
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/150");
  const [skills, setSkills] = useState("React, Firebase, Redux");
  const [studies, setStudies] = useState("BS Computer Science - UAF");
  const [projects, setProjects] = useState("InstaView Clone, EduMatch Platform");

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    // later: send data to Firebase here
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Edit Profile
      </h1>

      <form
        onSubmit={handleSave}
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6"
      >
        {/* Profile Pic */}
        <div className="flex items-center gap-6">
          <img
            src={profilePic}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-100"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setProfilePic(URL.createObjectURL(e.target.files[0]))
            }
            className="text-sm"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Skills
          </label>
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full border rounded-lg p-3"
            rows="2"
          />
        </div>

        {/* Studies */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Studies
          </label>
          <textarea
            value={studies}
            onChange={(e) => setStudies(e.target.value)}
            className="w-full border rounded-lg p-3"
            rows="2"
          />
        </div>

        {/* Projects */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Projects
          </label>
          <textarea
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
            className="w-full border rounded-lg p-3"
            rows="3"
          />
        </div>

        {/* Save + Cancel */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePage;
