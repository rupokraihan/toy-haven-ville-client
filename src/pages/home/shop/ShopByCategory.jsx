import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [allData, setAllData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <section className="my-container">
        <h2 className="text-4xl tracking-widest font-bold text-center mb-6">
          Shop Toys by Category
        </h2>
        <p className="tracking-widest font-medium text-center mb-10">
          Experience the joy of shopping by category, where you can effortlessly
          find the perfect toy to <br /> bring smiles and laughter to your
          child's face.
        </p>
        {allData.length > 0 && (
          <Tabs
            selectedIndex={activeTab}
            onSelect={(index) => setActiveTab(index)}
          >
            <TabList className="font-bold text-xl text-center">
              <Tab>Sports Car</Tab>
              <Tab>Jeep</Tab>
              <Tab>Regular Car</Tab>
            </TabList>
            <hr className="border-2 bg-gray-700" />

            <TabPanel>
              <div className="flex">
                {allData
                  .filter((data) => data.subCategory === "Sports Car")
                  .map((data) => (
                    <div key={data._id} className="w-1/2 p-4">
                      <div className="card h-80 card-side bg-blue-50 shadow-xl">
                        <figure>
                          <img
                            src={data.image}
                            alt=""
                            className="rounded-lg h-full object-cover w-full"
                          />
                        </figure>
                        <div className="card-body w-1/2 flex justify-center">
                          <h2 className="font-bold text-2xl">
                            {data.toy_name}
                          </h2>
                          <div className="text-lg mt-4 font-semibold text-gray-500 tracking-widest">
                            <p>Price: {data.price}</p>
                            <p>Rating: {data.rating}</p>
                          </div>
                          <Link
                            to={"/details"}
                            className="card-actions justify-start mt-8"
                          >
                            <button className="my-btn">View Details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex">
                {allData
                  .filter((data) => data.subCategory === "Jeep")
                  .map((data) => (
                    <div key={data._id} className="w-1/2 p-4">
                      <div className="card h-80 card-side bg-blue-50 shadow-xl">
                        <figure>
                          <img
                            src={data.image}
                            alt=""
                            className="rounded-lg h-full object-cover w-full"
                          />
                        </figure>
                        <div className="card-body w-1/2 flex justify-center">
                          <h2 className="font-bold text-2xl tracking-widest">
                            {data.toy_name}
                          </h2>
                          <div className="text-lg mt-4 font-semibold text-gray-500 tracking-widest">
                            <p>Price: {data.price}</p>
                            <p>Rating: {data.rating}</p>
                          </div>
                          <Link
                            to={"/details"}
                            className="card-actions justify-start mt-8"
                          >
                            <button className="my-btn">View Details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex">
                {allData
                  .filter((data) => data.subCategory === "Regular Car")
                  .map((data) => (
                    <div key={data._id} className="w-1/2 p-4">
                      <div className="card h-80 card-side bg-blue-50 shadow-xl">
                        <figure>
                          <img
                            src={data.image}
                            alt=""
                            className="rounded-lg h-full object-cover w-full"
                          />
                        </figure>
                        <div className="card-body w-1/2 flex justify-center">
                          <h2 className="font-bold text-2xl">
                            {data.toy_name}
                          </h2>
                          <div className="text-lg mt-4 font-semibold text-gray-500 tracking-widest">
                            <p>Price: {data.price}</p>
                            <p>Rating: {data.rating}</p>
                          </div>
                          <Link
                            to={"/details"}
                            className="card-actions justify-start mt-8"
                          >
                            <button className="my-btn">View Details</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
          </Tabs>
        )}
      </section>
    </div>
  );
};

export default ShopByCategory;
