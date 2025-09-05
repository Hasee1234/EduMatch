import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeerById } from "../../Store/Slices/peerSlice";
import { useParams } from "react-router-dom";

const PeerProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedPeer, loading } = useSelector((state) => state.peers);

  useEffect(() => {
    dispatch(fetchPeerById(id));
  }, [dispatch, id]);

  if (loading) return <p className="text-center mt-6">Loading profile...</p>;
  if (!selectedPeer) return <p className="text-center mt-6">Peer not found</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-6">
        <img
          src={selectedPeer.photoURL || "src/assets/profile.webp"}
          alt={selectedPeer.name}
          className="w-32 h-32 rounded-full border"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-600">{selectedPeer.name}</h2>
          <p className="text-gray-600">{selectedPeer.role}</p>
          <p className="text-gray-700 mt-2">{selectedPeer.bio}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
        <ul className="flex flex-wrap gap-2 mt-2">
          {selectedPeer.skills?.map((skill, i) => (
            <li key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Projects</h3>
        <ul className="list-disc ml-6 mt-2">
          {selectedPeer.projects?.map((proj, i) => (
            <li key={i}>
              <strong>{proj.title}</strong>: {proj.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PeerProfile;
