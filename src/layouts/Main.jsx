import React, { useEffect } from 'react';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from 'aos';

const Main = () => {
  useEffect(() => {
    Aos.init()
  },[])
  return (
    <div>
      <Navbar />
      <div className='min-h-[calc(100vh-420px)]'>
        <Outlet />
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
};

export default Main;