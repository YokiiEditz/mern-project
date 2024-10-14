import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const AdminDashBoard = () => {
  return (
    <>
      <div className="max-w-[850px] mx-auto p-5 flex justify-between items-center">
        <section className="py-2 px-5 border-2 rounded-md">
          <div className="py-2 flex items-center gap-3">
            <FiShoppingCart
              size={40}
              color="#6366F1"
              className="border py-1 px-2 bg-[#F4F5F7] rounded-md"
            />
            <h2 className="text-3xl capitalize">Products</h2>
          </div>

          <div className="my-3">
            <p>
              <span className="text-xl font-bold pr-1">Count:</span>
              15
            </p>

            <button className="button">
              <Link to="/admin/additem">Add Product</Link>
            </button>
          </div>
        </section>

        <section className="py-2 px-5 border-2 rounded-md">
          <div className="py-2 flex items-center gap-3">
            <FaUsers
              size={40}
              color="#6366F1"
              className="border py-1 px-2 bg-[#F4F5F7] rounded-md"
            />
            <h2 className="text-3xl capitalize">User lists</h2>
          </div>

          <div className="my-3">
            <p>User list:</p>
          </div>
        </section>

        <section className="py-2 px-5 border-2 rounded-md">
          <div className="py-2 flex items-center gap-3">
            <TbTruckDelivery
              size={40}
              color="#6366F1"
              className="border py-1 px-2 bg-[#F4F5F7] rounded-md"
            />
            <h2 className="text-3xl capitalize">Orders</h2>
          </div>

          <div className="my-3">
            <p>Orders list:</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminDashBoard;

export const ProductsList = () => {
  return <div>ProductsList</div>;
};

export const UsersList = () => {
  return <div>UsersList</div>;
};
