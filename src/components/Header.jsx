import React from "react";
import Navbar from "./Navbar";
import { MdArrowOutward } from "react-icons/md";
import { FaChevronDown, FaHome, FaUser } from "react-icons/fa";

function Header() {
  return (
    <div>
      <header className=" w-screen lg:w-full p-6 flex items-center justify-between lg:gap-[28vw]">
        <div className=" flex gap-3 items-center">
          {/* Logo */}
          <div>
            <img
              src="https://res.cloudinary.com/dcfjexbss/image/upload/v1777822201/swiggy_logo_white_yvjxtd.avif"
              className=" h-12 hidden md:flex"
            />

            <FaHome className=" text-2xl md:hidden" />
          </div>

          {/* Location on phone */}
          {/* Dropdown button */}
          <button className=" text-gray-200 flex items-center gap-1 font-semibold md:hidden">
            Location <FaChevronDown />
          </button>
        </div>

        <div className=" flex items-center gap-8">
          {/* Navbar */}
          <Navbar />

          {/* Buttons */}
          <div className=" flex gap-8">
            <button className=" p-4 cursor-pointer font-bold border rounded-2xl hidden md:flex items-center gap-1">
              Get the App <MdArrowOutward className=" text-2xl" />
            </button>

            <button className=" p-3 md:py-4 md:px-10 cursor-pointer font-bold rounded-[50%] md:rounded-2xl bg-linear-to-b from-gray-800 to-black text-gray-50">
              <span className=" hidden md:flex">Sign In</span>
              <FaUser className=" md:hidden" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
