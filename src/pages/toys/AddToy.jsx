import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toy_name = form.toy_name.value;
    const seller_name = form.seller_name.value;
    const email = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const subCategory = form.subCategory.value;
    const available_quantity = form.available_quantity.value;
    const detail_description = form.detail_description.value;
    const image = form.image.value;

    const toyData = {
      toy_name,
      seller_name,
      email,
      price,
      rating,
      subCategory,
      available_quantity,
      detail_description,
      image,
    };
    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleAdd = () => {
    toast("Added toy Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  

  return (
    <div>
      <section className="my-container">
        <form onSubmit={handleAddToy}>
          <div className="max-w-screen-lg mx-auto bg-blue-50 p-10 rounded-lg">
            <h2 className="text-4xl tracking-widest font-bold text-center mb-10">
              Add a New Toy
            </h2>
            <div className="flex gap-8 mb-4">
              <input
                type="text"
                name="toy_name"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500 "
                placeholder="Toy Name"
              />
              <input
                type="text"
                name="seller_name"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                defaultValue={user?.displayName}
                placeholder="Seller Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                defaultValue={user?.email}
                placeholder="Seller Email"
              />
            </div>
            <div className="flex gap-8 mb-4">
              <input
                type="number"
                name="price"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl  rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                placeholder="$Price"
              />
              <input
                type="Number"
                name="rating"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                placeholder="Rating"
              />
            </div>
            <div className="flex gap-8 mb-4">
              <input
                type="text"
                name="subCategory"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                placeholder="Sub-Category"
              />
              <input
                type="Number"
                name="available_quantity"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                placeholder="Available Quantity"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="detail_description"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                defaultValue={
                  "Experience the thrill of speed with this sleek and speedy sports car toy. Perfect for racing enthusiasts!"
                }
                placeholder="Description"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="image"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                defaultValue={"https://i.ibb.co/jh1pgnK/img-20.jpg"}
                placeholder="Image URL"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={handleAdd} className="my-btn">Add Toy</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddToy;
