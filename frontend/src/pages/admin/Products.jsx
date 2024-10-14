import { useState } from "react";
import { MdAddShoppingCart, MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { API_URL, useAdmins } from "../../context/AdminContext";

const Products = () => {
  const [addPopup, setAddPopup] = useState(false);
  const { products } = useAdmins();

  return (
    <div>
      <div className="max-w-[850px] mx-auto my-8">
        <h2 className="text-4xl">Products Page</h2>

        <div className="p-2  flex justify-between items-center border">
          <h2> List of all Products</h2>

          <button className="button" onClick={() => setAddPopup(!addPopup)}>
            Add Product
          </button>
        </div>

        <div>
          {addPopup && (
            <AddItem addPopup={addPopup} setAddPopup={setAddPopup} />
          )}
        </div>

        <table className="table-fixed border border-blue-500 w-full">
          <thead className="text-center">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              {/* <th>Title</th> */}
              <th>Brand</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {products ? (
              products.map((item, idx) => (
                <tr key={`product-${idx}`}>
                  <td className="py-4">{idx + 1}</td>
                  <td>{item.pname}</td>
                  <td>{item.brand}</td>
                  <td>{item.description}</td>
                  <td>
                    <button>
                      <FiEdit />
                      Edit
                    </button>
                  </td>
                  <td>
                    <button>
                      <MdDeleteForever />
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;

export const AddItem = ({ addPopup, setAddPopup }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");

  const { dataChanged, setDataChanged } = useAdmins();

  const handleCreate = async (e) => {
    e.preventDefault();

    if (name !== "" && brand !== "" && description !== "") {
      const data = {
        pname: name,
        brand: brand,
        description: description,
      };

      const response = await fetch(API_URL + "/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Product is added");
        setDataChanged(!dataChanged);
        setAddPopup(!addPopup);
      }
    }
  };

  return (
    <>
      <div className="bg-overlay"></div>
      <div className="bg-data">
        <section className="border w-[450px] mx-auto bg-white text-black rounded-lg overflow-hidden z-10 opacity-100">
          <div className="px-3 py-4 flex justify-between items-center gap-3 border-2 border-slate-300">
            <h2 className="text-3xl font-medium">Add Product</h2>

            <MdAddShoppingCart size={30} color="#4759FF" />
          </div>

          <form className="p-2">
            <table className="max-w-[500px] mx-auto">
              <tbody>
                <tr>
                  <td className="py-3 pr-2 text-right">Name:</td>
                  <td>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter name"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="py-3 pr-2 text-right">Brand:</td>
                  <td>
                    <input
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="Enter brand"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="py-3 pr-2 text-right">description:</td>
                  <td>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter description"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="px-1 py-1 flex items-center gap-3">
              <button onClick={handleCreate} className="button">
                Create Product
              </button>

              <button onClick={() => setAddPopup(!addPopup)} className="button">
                Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
