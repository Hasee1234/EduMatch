import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "../Components/Home/Home";
import Profile from "../Pages/Profile/Profile";
import LoginForm from "../Components/LoginForm/LoginForm";
function Routing() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Profile route with auth check */}
      <Route
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/login" />}
      />

      {/* Login Page */}
      <Route path="/login" element={<LoginForm/>} />
    </Routes>
  );
}

export default Routing;
