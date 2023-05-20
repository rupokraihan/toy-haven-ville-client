import React from 'react';
import logo from "../../assets/logo/H__1_-removebg-preview.png";


const Footer = () => {
  return (
    <div className=" bg-gray-500 text-white">
      <footer className="footer py-12 px-14 lg:px-40 justify-between">
        <div>
          <div>
            <img className="h-[80px] w-[130px] mr-4" src={logo} alt="" />
          </div>

          <div>
            <p className="text-base font-semibold tracking-widest">
              toyHaven Ville
              <br />
              Providing reliable tech since 2004
            </p>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
          <a className="link link-hover">Video Production</a>
        </div>

        <div>
          <span className="footer-title">Explore</span>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Review</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Pricing</a>
        </div>

        <div>
          <span className="footer-title">Apps</span>
          <a className="link link-hover">Mac</a>
          <a className="link link-hover">Windows</a>
          <a className="link link-hover">iPhone</a>
          <a className="link link-hover">Android</a>
        </div>

        <div>
          <span className="footer-title">Social</span>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Github</a>
        </div>
      </footer>
      <div className="py-6 text-sm text-center text-white tracking-widest">
        © 2023 toyHaven Ville Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;