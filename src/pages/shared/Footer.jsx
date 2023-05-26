import React from "react";
import logo from "../../assets/logo/H__1_-removebg-preview.png";

const Footer = () => {
  return (
    <div className=" bg-gray-500 text-white">
      <footer className=" py-4 lg:py-12 px-6 lg:px-40 ">
        <div className="grid  grid-cols-2  lg:grid-cols-5 justify-between gap-x-[6rem] lg:gap-x-[12rem]">
          <div className="mt-8">
            <div>
              <img className="h-[80px] w-[130px] mr-4" src={logo} alt="" />
            </div>
            <div>
              <p className="text-base font-semibold tracking-widest">
                toyHaven Ville
              </p>
            </div>
          </div>

          <div className="mt-6">
            <span className="footer-title">Services</span> <br />
            <a className="link link-hover">Branding</a>
            <br />
            <a className="link link-hover">Marketing</a>
            <br />
            <a className="link link-hover">Advertisement</a>
            <br />
            <a className="link link-hover">Video Production</a>
            <br />
          </div>

          <div className="mt-6">
            <span className="footer-title">Explore</span> <br />
            <a className="link link-hover">Features</a> <br />
            <a className="link link-hover">Security</a>
            <a className="link link-hover">Review</a> <br />
            <br />
            <a className="link link-hover">Pricing</a> <br />
          </div>

          <div className="mt-6">
            <span className="footer-title">Apps</span> <br />
            <a className="link link-hover">Mac</a>
            <br />
            <a className="link link-hover">Windows</a> <br />
            <a className="link link-hover">iPhone</a> <br />
            <a className="link link-hover">Android</a> <br />
          </div>

          <div className="mt-6">
            <span className="footer-title">Social</span> <br />
            <a className="link link-hover">Twitter</a> <br />
            <a className="link link-hover">Instagram</a> <br />
            <a className="link link-hover">Facebook</a> <br />
            <a className="link link-hover">Github</a> <br />
          </div>
        </div>
      </footer>
      <div className="py-6 text-sm text-center text-white tracking-widest">
        © 2023 toyHaven Ville Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
