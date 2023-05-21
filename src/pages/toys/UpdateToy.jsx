import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import useTabTitle from "../../hooks/useTabTitle";



const UpdateToy = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [updateData, setUpdateData] = useState({});
  useTabTitle("update Toy")

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const update = data.filter((product) => product._id === id)[0];
        setUpdateData(update);
      });
  }, [id]);

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const available_quantity = form.available_quantity.value;
    const detail_description = form.detail_description.value;
    const toyUpdateData = {
      price,
      available_quantity,
      detail_description,
    };
    fetch(`http://localhost:5000/updatetoy/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyUpdateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleUpdateData = () => {
   Swal.fire({
     position: "top-center",
     icon: "success",
     title: "Update your data",
     showConfirmButton: false,
     timer: 1500,
   });
  };

  return (
    <div>
      <section className="my-container">
        <form onSubmit={handleUpdateToy}>
          <div className="max-w-screen-lg mx-auto bg-blue-50 p-10 rounded-lg">
            <h2 className="text-4xl tracking-widest font-bold text-center mb-10">
              Hey
              <span className="text-blue-700 font-serif ">
                {user?.displayName}
              </span>
              Update Your Toy
            </h2>

            {/* price */}
            <div className="mb-4">
              <label htmlFor="price" className="text-xl font-bold mb-2 ml-1">
                Update Price:
              </label>
              <input
                type="number"
                name="price"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl  rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                defaultValue={updateData.price}
                placeholder="$Update Price"
              />
            </div>

            {/* Available Quantity */}
            <div className="mb-4">
              <label htmlFor="price" className="text-xl font-bold mb-2 ml-1">
                Update Quantity:
              </label>
              <input
                type="Number"
                name="available_quantity"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                defaultValue={updateData.available_quantity}
                placeholder="Update Quantityy"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="text-xl font-bold mb-2 ml-1">
                Update Description:
              </label>
              <input
                type="text"
                name="detail_description"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                defaultValue={updateData.detail_description}
                placeholder="Update Description"
              />
            </div>

            <div className="flex justify-center mt-6">
              <button onClick={handleUpdateData} className="my-btn">
                Update
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateToy;
