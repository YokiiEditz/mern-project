import { Link, useNavigate } from "react-router-dom";
import { API_URL, API_URL2, useAuth } from "../context/AuthContext";

const Header = ({ role }) => {
  const { userData, setUserData, adminData, setAdminData } = useAuth();

  const navigate = useNavigate();

  const logout = async (e) => {
    e.preventDefault();

    const response = await fetch(API_URL + "/logout", {
      method: "POST",
      credentials: "include",
    });

    if (response) {
      setUserData(null);
      navigate("/");
      console.log("User is logout");
    }
  };

  const adminLogout = async (e) => {
    e.preventDefault();

    const response = await fetch(API_URL2 + "/logout", {
      method: "POST",
      credentials: "include",
    });

    if (response) {
      setAdminData(null);
      navigate("/admin");
      console.log("Admin is logout");
    }
  };

  return (
    <>
      {role === "user" ? (
        <>
          <nav
            className={`h-[50px] border p-2 flex justify-between items-center text-white bg-gray-500`}
          >
            <h1 className="text-2xl">
              <Link to="/">Shopify</Link>
              <Link to="/admin">
                <span className="pl-10 text-black">AdminPage</span>
              </Link>
            </h1>

            <ul className="flex gap-4 items-center">
              {userData ? (
                <>
                  <Link to="/">Home</Link>
                  <Link to="/logout">
                    <button onClick={logout}>Logout</button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signup">Signup</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
            </ul>
          </nav>
        </>
      ) : (
        <>
          <nav
            className={`h-[50px] border p-2 flex justify-between items-center text-white bg-black opacity-80`}
          >
            <h1 className="text-2xl">
              <Link to="/">Admin</Link>
            </h1>

            <ul className="flex gap-4 items-center">
              {/* <Link to="/signup">Signup</Link> */}
              {adminData ? (
                <>
                  <Link to="/admin/additem">AddItem</Link>
                  <Link to="/admin">
                    <button onClick={adminLogout}>Logout</button>
                  </Link>
                </>
              ) : (
                <Link to="/admin/login">Login</Link>
              )}
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;
