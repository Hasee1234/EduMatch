import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeers } from "../../Store/Slices/PeerSlice";
import { useNavigate } from "react-router-dom";

const PeersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { peers, loading, error } = useSelector((state) => state.peers);

  useEffect(() => {
    dispatch(fetchPeers());
  }, [dispatch]);

  if (loading) return <p className="text-center mt-6">Loading peers...</p>;
  if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Meet Your Peers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {peers.map((peer) => (
          <div
            key={peer.id}
            onClick={() => navigate(`/peer/${peer.id}`)}
            className="bg-white border rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition"
          >
            {/* Profile Image */}
            <img
              src={peer.photoURL || "src/assets/profile.webp"}
              alt={peer.name}
              className="w-24 h-24 rounded-full mx-auto"
            />

            {/* Name & Role */}
            <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
              {peer.name}
            </h3>
            <p className="text-gray-500 text-center">{peer.role}</p>

            {/* Match Now Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent card navigation
                alert(`Matching with ${peer.name}... 🚀`);
              }}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
            >
              Match Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeersList;
