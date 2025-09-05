import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import MyProfile from '../Pages/MyProfile/MyProfile';
import Peers from '../Pages/Peers/Peers';
import EditProfilePage from '../Pages/EditProfile/EditProfile';
import PeerProfile from '../Pages/PeerProfile/PeerProfile';

function Routing() {
  return (
      <Routes>
        <Route path="/" 
        element={<Home/>} />

      <Route path='/Profile'
      element={<MyProfile/>}/>

      <Route path='/Peers'
      element={<Peers/>}/>

      <Route path='/EditProfile'
      element={<EditProfilePage/>}/>

       
      <Route path="/peer/:id" element={<PeerProfile />} />
      </Routes>
  );
}

export default Routing;