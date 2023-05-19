import React from "react";
import banner from "../../../assets/banner/tbzz-polybags-shell-2.jpg";

const Banner = () => {
  return (
    <div className="hero lg:mt-0">
      <div className="bg-opacity-25">
        <img className="w-100%" src={banner} alt="" />
      </div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-2xl mt-72">
          <h1 className="mb-5 text-7xl font-bold tracking-widest">
            Journey into toyHaven
          </h1>
          <p className="mb-5 tracking-widest">
            Welcome to toyHaven Ville, where the world of toy cars comes to
            life! Explore a vast selection of sports cars, trucks, regular cars,
            mini fire trucks, mini police cars, and more. Fuel your imagination
            and embark on thrilling adventures with our high-quality toy car
            collection. Get ready fun in the ultimate toy car wonderland -
            toyHaven!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
