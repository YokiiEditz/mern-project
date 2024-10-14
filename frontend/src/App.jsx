import { Route, Routes } from "react-router-dom";
import "./App.css";

import UserLayout from "./layouts/UserLayout";
import Homepage from "./pages/user/Homepage";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";

import { AuthContextProvider } from "./context/AuthContext";
import { AdminContextProvider } from "./context/AdminContext";

import AdminLayout from "./layouts/AdminLayout";
import Adminpage from "./pages/admin/Adminpage";
import AdminLogin from "./pages/admin/AdminLogin";
import Products from "./pages/admin/Products";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AdminContextProvider>
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
              <Route path="products" element={<Products />} />
            </Route>
          </Routes>
        </AdminContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
