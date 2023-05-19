import React from 'react';
import client1 from '../../../assets/client/client1.png'
import client2 from '../../../assets/client/client2.png'
import client3 from '../../../assets/client/client3.png'
import client4 from '../../../assets/client/client4.png'

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
          <div className="card w-80 h-96 bg-[#FFFEEB] shadow-xl">
            <div className="card-body">
              <div className="flex gap-6 items-center">
                <div>
                  <img src={client1} alt="" />
                </div>

                <div>
                  <h2 className="card-title">Takuya Nakamura</h2>
                  <p className="mt-2 text-gray-500 text-medium">
                    789 Hikari Street, Kyoto, Japan
                  </p>
                </div>
              </div>
              <div className=" mt-8 relative ">
                <p>
                  "Thrilling Speed and Endless Fun! My kids absolutely love
                  these toy cars. They're durable, easy to maneuver, and provide
                  hours of imaginative playtime. Highly recommended!"
                </p>
              </div>
              <div className="card-actions">
                <p className="absolute bottom-0 mb-6">22 june 2022</p>
              </div>
            </div>
          </div>
          <div className="card w-80 h-96 bg-[#FFFEEB] shadow-xl">
            <div className="card-body">
              <div className="flex gap-6 items-center">
                <div>
                  <img src={client3} alt="" />
                </div>

                <div>
                  <h2 className="card-title">Mark Kazuki</h2>
                  <p className="mt-2 text-gray-500 text-medium">
                    654 Asuka Lane, Tokyo, Japan
                  </p>
                </div>
              </div>
              <div className=" mt-8 relative ">
                <p>
                  "Great Gift Choice! I bought these toy cars as a gift for my
                  nephew's birthday, and he absolutely loved them. The smile on
                  his face was priceless, and he hasn't stopped playing with
                  them since. It was a hit!"
                </p>
              </div>
              <div className="card-actions">
                <p className="absolute bottom-0 mb-6">22 june 2022</p>
              </div>
            </div>
          </div>
          <div className="card w-80 h-96 bg-[#FFFEEB] shadow-xl">
            <div className="card-body">
              <div className="flex gap-6 items-center">
                <div>
                  <img src={client4} alt="" />
                </div>

                <div>
                  <h2 className="card-title">Aiko Tanaka</h2>
                  <p className="mt-2 text-gray-500 text-medium">
                    987 Haruka Plaza, Yokohama, Japan
                  </p>
                </div>
              </div>
              <div className=" mt-8 relative ">
                <p>
                  "Highly Engaging! These toy cars have provided my kids with
                  hours of entertainment. They are easy to operate, and the
                  interactive features make playtime even more engaging. A
                  fantastic choice for little car enthusiasts!"
                </p>
              </div>
              <div className="card-actions">
                <p className="absolute bottom-0 mb-6">22 june 2022</p>
              </div>
            </div>
          </div>
          <div className="card w-80 h-96 bg-[#FFFEEB] shadow-xl">
            <div className="card-body">
              <div className="flex gap-6 items-center">
                <div>
                  <img src={client2} alt="" />
                </div>

                <div>
                  <h2 className="card-title">N Takuya Ito</h2>
                  <p className="mt-2 text-gray-500 text-medium">
                    321 Sakura Road, Sapporo, Japan
                  </p>
                </div>
              </div>
              <div className=" mt-8 relative ">
                <p>
                  "Impressive Realism! These toy cars look so realistic; you can
                  almost imagine them on a real racetrack. The level of detail
                  is incredible, and they have quickly become the favorites in
                  our household."
                </p>
              </div>
              <div className="card-actions">
                <p className="absolute bottom-0 mb-6">22 june 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;