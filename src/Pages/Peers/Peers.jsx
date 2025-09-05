import React from "react";
import { useNavigate } from "react-router-dom";

const peers = [
  { id: 1, name: "Haseeb Mirza", role: "Frontend Developer", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Ayesha Khan", role: "UI/UX Designer", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Ali Raza", role: "Machine Learning Enthusiast", img: "https://via.placeholder.com/150" },
  { id: 4, name: "Sara Ahmed", role: "Backend Developer", img: "https://via.placeholder.com/150" },
  { id: 5, name: "Bilal Sheikh", role: "Mobile App Developer", img: "https://via.placeholder.com/150" },
  { id: 6, name: "Fatima Noor", role: "Data Scientist", img: "https://via.placeholder.com/150" },
];

const PeersPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/peer/${id}`); // navigate to peer profile
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Meet Your Peers</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {peers.map((peer) => (
          <div
            key={peer.id}
            onClick={() => handleCardClick(peer.id)}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition relative"
          >
            <img
              src={peer.img}
              alt={peer.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-blue-100"
            />
            <h2 className="text-xl font-semibold text-center mt-4">{peer.name}</h2>
            <p className="text-gray-600 text-center">{peer.role}</p>

            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent card click
                alert(`Request Sent to ${peer.name}!`);
              }}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Match Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeersPage;
