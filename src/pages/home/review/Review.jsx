import React from 'react';

const Review = () => {
  return (
    <div>
      <section className="my-container ">
        <div className="text-center">
          <h1 className="text-4xl tracking-wide font-bold  mb-6">
            Consumer Reviews by toyHaven Buyers
          </h1>
          <p className="tracking-widest font-medium mb-6">
            Discover valuable insights and opinions in our review section, where
            toy car buyers <br /> share their experiences and thoughts.
          </p>
        </div>
        <div className="flex gap-6">
          <div className="card w-96 bg-[#FFFEEB] shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;