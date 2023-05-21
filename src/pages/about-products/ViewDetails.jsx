import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import useTabTitle from '../../hooks/useTabTitle';

const ViewDetails = () => {

  const { id } = useParams();
  const [viewData, setViewData] = useState({});
  const [isLoading, setLoading] = useState(true);
  useTabTitle('Details')

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res)=> res.json())
      .then((data) => {
        const view = data.filter((product) => product._id === id)[0];
        setViewData(view);
        setLoading(false);

      });
  }, [id]);
  if (isLoading) {
    return<LoadingSpinner/>
  }

  return (
    <div>
      <section className="my-container">
        <img
          className="h-[350px] w-[450px] mx-auto rounded-xl"
          src={viewData.image}
          alt=""
        />

        <div>
          <h2 className="text-6xl text-center mt-16">{viewData.toy_name}</h2>
          <p className="text-xl font-bold text-gray-500 max-w-screen-md mx-auto text-center mt-8">
            Description: {viewData.detail_description}
          </p>
        </div>

        <div className="overflow-x-auto max-w-screen-sm mx-auto mt-16">
          <table className="table w-full">
            {/* head*/}
            <thead className="font-bold">
              <tr>
                <th className="text-lg font-mono">Name</th>
                <th className="text-lg font-mono">Favorite Color</th>
              </tr>
            </thead>
            <tbody className="mx-auto font-semibold">
              {/* row 1 */}
              <tr>
                <td className="text-lg">Seller Name</td>
                <td className="text-gray-500 font-serif text-xl">
                  {viewData.seller_name}
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <td className="text-lg">Seller Email</td>
                <td className="text-gray-500 font-serif text-xl">
                  {viewData.email}
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <td className="text-lg">Available Quantity</td>
                <td className="text-gray-500 font-serif text-xl">
                  {viewData.available_quantity}
                </td>
              </tr>
              {/* row 4 */}
              <tr>
                <td className="text-lg">Price</td>
                <td className="text-gray-500 font-serif text-xl">
                  ${viewData.price}
                </td>
              </tr>
              {/* row 5 */}
              <tr>
                <td className="text-lg">Rating</td>
                <td className="text-gray-500 font-serif text-xl">
                  {viewData.rating}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ViewDetails;