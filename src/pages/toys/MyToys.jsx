import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  const [toys, setToys] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="overflow-x-auto my-container">
            <table className="table table-compact w-full">
              <thead>
                <tr className="font-bold font-mono">
                  <th>#</th>
                  <th>Toy Name</th>
                  <th>Seller</th>
                  <th>Sub-category</th>
                  <th>Price</th>
                  <th className="text-center">Available Quantity</th>
                  <th>Update/Delete</th>
                </tr>
              </thead>
              <tbody>
                {toys.map((toy, index) => (
                  <tr
                    key={toy._id}
                    className="font-bold font-serif text-gray-500"
                  >
                    <td>{index + 1}</td>
                    <td>{toy.toy_name}</td>
                    <td>{toy.seller_name}</td>
                    <td>{toy.subCategory}</td>
                    <td>${toy.price}</td>
                    <td className="text-center">{toy.available_quantity}</td>
                    <div className="flex gap-4">
                      <td className="flex justify-center">
                        <button className="my-btn">Update</button>
                      </td>
                      <td className="flex justify-center">
                        <button className="my-btn">Delete</button>
                      </td>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyToys;
