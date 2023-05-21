import React from "react";
import banner from "../../../assets/banner/tbzz-polybags-shell-2.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="lg:hero lg:mt-0">
      <div className="bg-opacity-25">
        {/* banner image */}
        <img className="w-full" src={banner} alt="" />
      </div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-2xl lg:mt-72">
          <h1 className="mb-5 lg:text-7xl text-5xl text-gray-900 lg:text-white font-bold tracking-widest">
            Journey into toyHaven
          </h1>
          <p className="mb-5 tracking-widest text-gray-800 lg:text-white">
            Welcome to toyHaven Ville, where the world of toy cars comes to
            life! Explore a vast selection of sports cars, trucks, regular cars,
            mini fire trucks, mini police cars, and more. Fuel your imagination
            and embark on thrilling adventures with our high-quality toy car
            collection. Get ready fun in the ultimate toy car wonderland -
            toyHaven!
          </p>
          <Link to={"/alltoys"} className="flex justify-center lg:justify-start">
            <button className="my-btn">All Toys</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
