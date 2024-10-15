import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import UserLayout from "./layouts/UserLayout";
import Homepage from "./pages/user/Homepage";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";

import { useAuth } from "./context/AuthContext";
import { useAdmins } from "./context/AdminContext";

import AdminLayout from "./layouts/AdminLayout";
import Adminpage from "./pages/admin/Adminpage";
import AdminLogin from "./pages/admin/AdminLogin";
import Products from "./pages/products/Products";

import { EditItem } from "./pages/products/EditItem";

const App = () => {
  const { userData } = useAuth();
  const { adminData } = useAdmins();

  return (
    <div>
      {/* User */}
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route
            index
            element={userData ? <Homepage /> : <Navigate to="/login" />}
          />
          <Route path="signup" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Admin */}
        <Route path="admin" element={<AdminLayout />}>
          <Route
            index
            element={adminData ? <Adminpage /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="login"
            // element={<AdminLogin />}
            element={!adminData ? <AdminLogin /> : <Navigate to="/admin" />}
          />
          <Route
            path="products"
            //element={<Products />}
            element={adminData ? <Products /> : <Navigate to="/admin/login" />}
          />
          <Route path="products/:id" element={<EditItem />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
