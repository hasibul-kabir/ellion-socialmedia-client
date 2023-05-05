import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


function App() {
  return (
    <Routes>
      <Route path="/feed" element={<Home />} />
      <Route path="/profile/:Id" element={<Profile />} />
    </Routes>

  );
}

export default App;
