import { FaceFrownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from '../../src/assets/error-img/image-asset-removebg-preview.png'


const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className=" h-screen mx-auto p-16 text-gray-900">
      <div className="">
        <div className="lg:flex lg:mt-40 items-center justify-evenly">
          <div>
            <img src={errorImg} alt="" />
          </div>
          <div className="text-center">
            <h2 className="text-6xl tracking-widest	font-bold">
              AWWW...DON’T CRY.
            </h2>
            <h2 className="text-3xl tracking-widest mt-12">
              It's just a 404 Error!
            </h2>
            <h2 className="text-xl tracking-widest mt-4">
              What you’re looking for may have been misplaced in Long Term
              Memory.
            </h2>
            <Link
              to="/"
              className="inline-flex items-center h-14 px-6 mb-3 text-xl text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-500 hover:bg-gray-500 mt-16"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
