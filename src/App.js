import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";


function App() {
  return (
    <Routes>
      <Route path="/feed" element={<Home />} />
      <Route path="/profile/:Id" element={<Profile />} />
      <Route path="/profile/:Id/edit" element={<EditProfile />} />
    </Routes>

  );
}

export default App;
