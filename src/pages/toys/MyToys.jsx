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

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`http://localhost:5000/mytoys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            setToys(toys.filter((toy) => toy._id !== id));
          }
        })
        .catch((error) => console.error(error));
    }
  };

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
                  <th>hi</th>
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

                    <td className="flex gap-6">
                      <Link to={`/updatetoy/${toy._id}`}>
                        <button className="my-btn">Update</button>
                      </Link>
                      <button
                        onClick={() => handleDelete(toy._id)}
                        className="my-btn"
                      >
                        Delete
                      </button>
                    </td>
                    
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
