import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import useCheckAuth from "./hooks/useCheckAuth";
import PrivateRoute from "./routeAccess/PrivateRoute";
import PublicRoute from "./routeAccess/PublicRoute";


function App() {
  const checkAuthentication = useCheckAuth();
  return checkAuthentication ? (
    <Routes>
      <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/registration" element={<PublicRoute><Registration /></PublicRoute>} />
      <Route path="/feed" element={<PrivateRoute> <Home /> </PrivateRoute>} />
      <Route path="/profile/:Id" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/profile/:Id/edit" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
    </Routes>

  ) :
    <div className="text-center py-5 text-xl font-bold">Checking Authentication...</div>
}

export default App;
