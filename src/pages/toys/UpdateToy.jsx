import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateToy = () => {

  const { id } = useParams();
  const [updateData, setUpdateData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const update = data.filter((product) => product._id === id)[0];
        setUpdateData(update);
        setLoading(false);
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
  

  return (
    <div>
      <section className="my-container">
        <form onSubmit={handleUpdateToy}>
          <div className="max-w-screen-lg mx-auto bg-blue-50 p-10 rounded-lg">
            <h2 className="text-4xl tracking-widest font-bold text-center mb-10">
              Update a Toy
            </h2>

            {/* price */}
            <div className="mb-4">
              <input
                type="number"
                name="price"
                className="w-full bg-[#9ac5f8]  px-6 py-3 font-bold font-mono text-xl  rounded-md border border-white focus:outline-none focus:ring-blue-900 focus:border-blue-900 placeholder-gray-500"
                placeholder="$Price"
              />
            </div>

            {/* Available Quantity */}
            <div className="mb-4">
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
            
            <div className="flex justify-center mt-6">
              <button className="my-btn">
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