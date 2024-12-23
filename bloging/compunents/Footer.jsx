import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-[#140B5C] text-white w-full bottom-0 left-0">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex flex-wrap items-center justify-between mb-12">
          <div className="text-2xl font-bold">MA Graphics</div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-[#4267B2] flex items-center justify-center hover:bg-white hover:text-[#4267B2]"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-[#E1306C] flex items-center justify-center hover:bg-white hover:text-[#E1306C]"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full bg-[#0077B5] flex items-center justify-center hover:bg-white hover:text-[#0077B5]"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <hr className="border-gray-500 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">MA Graphics</h2>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:underline">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <ul>
              <li className="mb-2">
                <Link to="/service" className="hover:underline">
                  Graphics design
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/service" className="hover:underline">
                  Poster design
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/service" className="hover:underline">
                  Logo design
                </Link>
              </li>
              <li>
                <Link to="/service" className="hover:underline">
                  Banner design
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Software</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Adobe Photoshop
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Adobe Illustrator
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Dreamweaver
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Adobe XD
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#0F0844] py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between text-sm">
          <span className="opacity-80">
            Copyright © 2021 All rights reserved
          </span>
          <div>
            <Link to="/privacy" className="hover:underline mr-4">
              Privacy policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms & condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
