import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const displayedToys = toys.slice(0, 20); // Limit to maximum 20 toys

  return (
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
                <th className="text-center">Details</th>
              </tr>
            </thead>
            <tbody>
              {displayedToys.map((toy, index) => (
                <tr key={toy._id} className="font-bold font-serif text-gray-500">
                  <td>{index + 1}</td>
                  <td>{toy.toy_name}</td>
                  <td>{toy.seller_name}</td>
                  <td>{toy.subCategory}</td>
                  <td>{toy.price}</td>
                  <td className="text-center">{toy.available_quantity}</td>
                  <td className="flex justify-center">
                    <Link
                      to={`/details/${toy._id}`}
                      className="card-actions justify-start mt-8 "
                    >
                      <button className="my-btn">View Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllToys;
