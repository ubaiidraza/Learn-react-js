import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false); // Blog dropdown state
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Services dropdown state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#1b1464] text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Logo Section */}
        <div className="flex items-center justify-center ">
  <img
    src="src/assets/ma images/ma logo copy.png" // Replace with your logo path
    alt="Logo"
    className="h-20 md:h-20 lg:h-24 w-auto" // Improved responsive height
  />
</div>

        {/* Navbar Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-[#1b1464] p-4 md:static md:block md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
            <li>
              <Link to="/" className="text-white hover:text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-yellow-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/clients" className="text-white hover:text-yellow-300 transition">
                Clients
              </Link>
            </li>

            {/* Blog Dropdown */}
            <li className="relative">
              <span
                onClick={() => setIsBlogOpen(!isBlogOpen)}
                className="flex items-center cursor-pointer hover:text-yellow-300"
              >
                Blog <i className="ri-arrow-down-s-line ml-1 text-white"></i>
              </span>
              {isBlogOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-[#1b1464]">
                  <li>
                    <Link
                      to="/blog"
                      className="block px-4 py-2 hover:bg-yellow-300 hover:text-black transition"
                    >
                      Blog Details
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Services Dropdown */}
            <li className="relative">
              <span
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center cursor-pointer hover:text-yellow-300"
              >
                Services <i className="ri-arrow-down-s-line ml-1 text-white"></i>
              </span>
              {isServicesOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-[#1b1464]">
                  <li>
                    <Link
                      to="/service"
                      className="block px-4 py-2 hover:bg-yellow-300 hover:text-black transition"
                    >
                      Graphics Designing
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://personal-portfolio-zwww.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-yellow-300 hover:text-black transition"
                    >
                      Website Development
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/service"
                      className="block px-4 py-2 hover:bg-yellow-300 hover:text-black transition"
                    >
                      Panaflex Printing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service"
                      className="block px-4 py-2 hover:bg-yellow-300 hover:text-black transition"
                    >
                      Promotional Items
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service"
                      className="block px-4 py-2 hover:bg-yellow-300 hover:text-black transition"
                    >
                      Stationery Printing
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" className="text-white hover:text-yellow-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {menuOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
