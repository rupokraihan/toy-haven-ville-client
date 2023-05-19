import React from 'react';
import banner from '../../../assets/banner/tbzz-polybags-shell-2.jpg'

const Banner = () => {
  return (
    <div className="hero lg:mt-0">
      <div className="bg-opacity-25">
      <img className="w-100%" src={banner} alt="" />
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mt-44">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;