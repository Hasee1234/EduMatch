import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../Store/Slices/AuthSlice";
import { uploadImageToCloudinary } from "../../utils/cloudinary";

const SignupDialog = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    let photoURL = "";
    if (photo) {
      photoURL = await uploadImageToCloudinary(photo); // Upload to Cloudinary
    }

    dispatch(
      signupUser({
        email,
        password,
        name,
        role,
        skills: skills.split(","), // convert to array
        photoURL,
      })
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Role (e.g. Web Developer)"
            className="w-full border p-2 rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Skills (comma separated)"
            className="w-full border p-2 rounded"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="w-full"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupDialog;
