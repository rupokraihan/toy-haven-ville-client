import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from '../../../assets/toy-car/img-1.jpg'
import img2 from '../../../assets/toy-car/img-2.jpg'
import img3 from '../../../assets/toy-car/img-3.jpg'
import img4 from '../../../assets/toy-car/img-4.jpg'
import img5 from '../../../assets/toy-car/img-5.jpg'
import img6 from '../../../assets/toy-car/img-6.jpg'
import img7 from '../../../assets/toy-car/img-7.jpg'
import img8 from '../../../assets/toy-car/img-8.jpg'
import img9 from '../../../assets/toy-car/img-9.jpg'
import img10 from '../../../assets/toy-car/img-10.jpg'
import img11 from '../../../assets/toy-car/img-11.jpg'
import img12 from '../../../assets/toy-car/img-12.jpg'
import img13 from '../../../assets/toy-car/img-13.jpg'
import img14 from '../../../assets/toy-car/img-14.jpg'
import img15 from '../../../assets/toy-car/img-15.jpg'
import img16 from '../../../assets/toy-car/img-16.jpg'
import img17 from '../../../assets/toy-car/img-17.jpg'
import img18 from '../../../assets/toy-car/img-18.jpg'
import img19 from '../../../assets/toy-car/img-19.jpg'
import img20 from '../../../assets/toy-car/img-20.jpg'
import img21 from '../../../assets/toy-car/img-21.jpg'

const Gallery = () => {
  return (
    <div>
      <section className="my-container">
        <div className="">
          <h2 className="text-4xl tracking-widest font-bold text-center mb-6">
            toyHaven's Gallery!
          </h2>
          <p className="tracking-widest font-medium text-center mb-6">
            Step into our captivating toy car gallery and immerse yourself in a
            world of miniature marvels. <br /> Discover a stunning collection of
            sports cars, trucks, regular cars, mini fire trucks, mini police
            cars, and more.
          </p>
          <Tabs className="text-center  shadow-2xl shadow-gray-500 px-8 py-4">
            <TabList className="font-bold text-xl">
              <Tab>Popular</Tab>
              <Tab>New Collection</Tab>
              <Tab>Most Sell</Tab>
              <hr className="border-2 bg-gray-700" />
            </TabList>
            <TabPanel className="mt-10">
              <div className="grid  gap-4 grid-cols-2 lg:grid-cols-5">
                <img className="w-72 h-44 rounded-md" src={img1} alt="" />
                <img className="w-72 h-44 rounded-md" src={img18} alt="" />
                <img className="w-72 h-44 rounded-md" src={img6} alt="" />
                <img className="w-72 h-44 rounded-md" src={img4} alt="" />
                <img className="w-72 h-44 rounded-md" src={img19} alt="" />
                <img className="w-72 h-44 rounded-md" src={img9} alt="" />
                <img className="w-72 h-44 rounded-md" src={img20} alt="" />
                <img className="w-72 h-44 rounded-md" src={img7} alt="" />
                <img className="w-72 h-44 rounded-md" src={img12} alt="" />
                <img className="w-72 h-44 rounded-md" src={img11} alt="" />
                <img className="w-72 h-44 rounded-md" src={img8} alt="" />
                <img className="w-72 h-44 rounded-md" src={img17} alt="" />
                <img className="w-72 h-44 rounded-md" src={img10} alt="" />
                <img className="w-72 h-44 rounded-md" src={img21} alt="" />
                <img className="w-72 h-44 rounded-md" src={img5} alt="" />
              </div>
            </TabPanel>
            <TabPanel className="mt-10">
              <div className="grid  gap-4 grid-cols-2 lg:grid-cols-5">
                <img className="w-72 h-44 rounded-md" src={img19} alt="" />
                <img className="w-72 h-44 rounded-md" src={img10} alt="" />
                <img className="w-72 h-44 rounded-md" src={img13} alt="" />
                <img className="w-72 h-44 rounded-md" src={img18} alt="" />
                <img className="w-72 h-44 rounded-md" src={img7} alt="" />
                <img className="w-72 h-44 rounded-md" src={img9} alt="" />
                <img className="w-72 h-44 rounded-md" src={img5} alt="" />
                <img className="w-72 h-44 rounded-md" src={img14} alt="" />
                <img className="w-72 h-44 rounded-md" src={img10} alt="" />
                <img className="w-72 h-44 rounded-md" src={img11} alt="" />
                <img className="w-72 h-44 rounded-md" src={img12} alt="" />
                <img className="w-72 h-44 rounded-md" src={img15} alt="" />
                <img className="w-72 h-44 rounded-md" src={img3} alt="" />
                <img className="w-72 h-44 rounded-md" src={img17} alt="" />
                <img className="w-72 h-44 rounded-md" src={img2} alt="" />
              </div>
            </TabPanel>
            <TabPanel className="mt-10">
              <div className="grid  gap-4 grid-cols-2 lg:grid-cols-5">
                <img className="w-72 h-44 rounded-md" src={img3} alt="" />
                <img className="w-72 h-44 rounded-md" src={img4} alt="" />
                <img className="w-72 h-44 rounded-md" src={img20} alt="" />
                <img className="w-72 h-44 rounded-md" src={img1} alt="" />
                <img className="w-72 h-44 rounded-md" src={img9} alt="" />
                <img className="w-72 h-44 rounded-md" src={img10} alt="" />
                <img className="w-72 h-44 rounded-md" src={img11} alt="" />
                <img className="w-72 h-44 rounded-md" src={img12} alt="" />
                <img className="w-72 h-44 rounded-md" src={img8} alt="" />
                <img className="w-72 h-44 rounded-md" src={img15} alt="" />
                <img className="w-72 h-44 rounded-md" src={img17} alt="" />
                <img className="w-72 h-44 rounded-md" src={img18} alt="" />
                <img className="w-72 h-44 rounded-md" src={img19} alt="" />
                <img className="w-72 h-44 rounded-md" src={img7} alt="" />
                <img className="w-72 h-44 rounded-md" src={img21} alt="" />
              </div>
            </TabPanel>
          </Tabs>
          <p className="tracking-widest font-medium text-center mb-6 mt-10">
            Visit our shop and wonderful journey into the realm of toy cars.
          </p>
          <div className="text-center">
            <button className="my-btn ">All toys</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;