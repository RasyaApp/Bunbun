import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";



const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Birthday", link: "/awal" },
  { id: 3, name: "Marriage", link: "/marriage" },
  { id: 4, name: "Graduation", link: "/graduation" },
];





const DropdownLinks = [
  { id: 1, name: "Option A", link: "/option-a" },
  { id: 2, name: "Option B", link: "/option-b" },
  { id: 3, name: "Option C", link: "/option-c" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-[#F68A7D] py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            <h1 className="inspiration-regular">Bunbun GifT</h1>
          </Link>

          {/* Search, Order, and DarkMode */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="hidden group-hover:block transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm" />
            </button>

            {/* Dark Mode */}
            <DarkMode />

            {/* Hamburger Menu */}
            <button
              className="sm:hidden text-xl text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div
        className={`sm:flex justify-center items-center ${
          isMenuOpen ? "block" : "hidden"
        } bg-white dark:bg-gray-900 sm:bg-transparent sm:dark:bg-transparent`}
      >
<ul className="flex flex-col sm:flex-row items-center gap-4 py-4 sm:py-0">
  {Menu.map((data) => (
    <li key={data.id}>
      <Link
        to={data.link}
        className="inline-block px-4 py-2 hover:text-primary duration-200"
        onClick={() => setIsMenuOpen(false)} // Tutup menu setelah navigasi
      >
        {data.name}
      </Link>
    </li>
  ))}
  {/* Dropdown untuk mobile */}
  <li className="relative inline-block">
    <button
      onClick={toggleDropdown}
      className="inline-block px-4 py-2 hover:text-primary duration-200"
    >
      Event
    </button>
    {isDropdownOpen && (
      <ul className="absolute bg-white shadow-lg rounded-md">
        {DropdownLinks.map((link) => (
          <li key={link.id}>
            <Link
              to={link.link}
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => {
                setIsDropdownOpen(false); // Tutup dropdown
                setIsMenuOpen(false); // Tutup hamburger
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
</ul>

      </div>
    </div>
  );
};

export default Navbar;
