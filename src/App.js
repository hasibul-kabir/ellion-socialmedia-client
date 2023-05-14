import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import useCheckAuth from "./hooks/useCheckAuth";


function App() {
  const checkAuthentication = useCheckAuth();
  return checkAuthentication ? (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/feed" element={<Home />} />
      <Route path="/profile/:Id" element={<Profile />} />
      <Route path="/profile/:Id/edit" element={<EditProfile />} />
    </Routes>

  ) :
    <div className="text-center py-5 text-xl font-bold">Checking Authentication...</div>
}

export default App;
