import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTabTitle from "../../hooks/useTabTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  useTabTitle("My Toys")
  const [toys, setToys] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://toy-haven-ville-server.vercel.app/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-haven-ville-server.vercel.app/mytoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setToys(toys.filter((toy) => toy._id !== id));
            }
          })
          .catch((error) => console.error(error));
      }
    });
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
