import { Route, Routes } from "react-router-dom";
import "./App.css";

import UserLayout from "./layouts/UserLayout";
import Homepage from "./pages/user/Homepage";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";

import { AuthContextProvider } from "./context/AuthContext";

import AdminLayout from "./layouts/AdminLayout";
import Adminpage from "./pages/admin/Adminpage";
import AdminLogin from "./pages/admin/AdminLogin";
import AddItem from "./pages/admin/AddItem";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        {/* User */}
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Homepage />} />
            <Route path="signup" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>

          {/* Admin */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Adminpage />} />
            <Route path="login" element={<AdminLogin />} />
            <Route path="additem" element={<AddItem />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
