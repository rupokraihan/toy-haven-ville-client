import React, { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProviders";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [searchToy, setSearchToy] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleViewDetails = () => {
    if (!user) {
      toast("You have to log in first to view details", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // Implement search system on All toy page, based on the Toy name and Limit to maximum 20 toys
  
  const displayedToys = toys
    .filter((toy) =>
      toy.toy_name.toLowerCase().includes(searchToy.toLowerCase())
    )
    .slice(0, 20);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="overflow-x-auto my-container">
          <div className="">
            <div className="form-control mb-10">
              <div className="input-group flex justify-center  ">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered w-2/5"
                  value={searchToy}
                  onChange={(event) => setSearchToy(event.target.value)}
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
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
              {displayedToys.length === 0 ? (
                <tr>
                  <td colSpan="7">No results found.</td>
                </tr>
              ) : (
                displayedToys.map((toy, index) => (
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
                    <td className="flex justify-center">
                      <Link
                        to={`/details/${toy._id}`}
                        onClick={handleViewDetails}
                        className="card-actions justify-start mt-8"
                      >
                        <button className="my-btn">View Details</button>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllToys;

