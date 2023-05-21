import React from 'react';

const Comment = () => {
  return (
    <div>
      <section className="my-container ">
        <div className="text-center">
          <h1 className="text-4xl tracking-wide font-bold mb-6">
            Share Your Thoughts on Toy Cars
          </h1>
          <p className="tracking-widest font-medium mb-6">
            Welcome to our vibrant comment section, where toy car enthusiasts
            gather <br /> to share their thoughts, experiences, and excitement.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-[#0D223A] shadow-lg rounded-lg p-6 lg:p-20">
          <h1 className="text-2xl text-white mb-4">Add a Comment</h1>
          <div className="flex gap-8 mb-4">
            <input
              type="text"
              className="w-full bg-[#314054] text-white px-4 py-2 rounded-md border border-[#314054] focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-full bg-[#314054] text-white px-4 py-2 rounded-md border border-[#314054] focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full bg-[#314054] text-white px-4 py-2 rounded-md border border-[#314054]  focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full bg-[#314054] text-white h-56 px-4 py-2 rounded-md border border-[#314054] focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-300"
              placeholder="Enter your comments"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button className="my-btn">Add Comment</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comment;