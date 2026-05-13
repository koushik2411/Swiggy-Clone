import React from "react";
import Header from "./Header";
import { FaLocationDot, FaMagnifyingGlass } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import HeroCard from "./HeroCard";

function Hero({ foodOpts }) {

  // CARDS ARRAY
  const cardData = [
    {
      title: "FOOD DELIVERY",
      category: "FROM RESTAURANTS",
      offer: "UPTO 60% OFF",
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683617/c1_nmssxd.png",
      link: "/restaurants",
    },
    {
      title: "INSTAMART",
      category: "INSTANT GROCERY",
      offer: "UPTO 60% OFF",
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683617/c2_dixd2o.png",
      link: "/grocery",
    },
    {
      title: "DINEOUT",
      category: "EAT OUT & SAVE MORE",
      offer: "UPTO 50% OFF",
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683617/c3_dedusj.png",
      link: "/restaurants",
    },
  ];

  {
    /*
            {
                title: "",
                category: "",
                offer: "",
                image: "",
                link: "",
            },
        */
  }

  return (
    <div>
      <div className=" h-full lg:min-h-screen w-full px-2 pb-6 bg-orange-600/95 text-gray-50 relative flex flex-col items-center justify-evenly">
        <Header />

        <div className=" mt-3 flex flex-col-reverse md:flex-col">
          {/* Hero Text */}
          <div className=" lg:mt-16 my-10">
            <h1 className=" text-center text-2xl md:text-5xl font-bold">
              Order food. Discover best
              <br />
              restaurants. Swiggy it!
            </h1>
          </div>

          {/* Location and Search bar */}
          <div className=" flex gap-4 z-10">
            {/* Location */}
            <div className=" w-fit py-2 px-3 md:flex items-center gap-1 bg-gray-50 rounded-2xl hidden">
              <FaLocationDot className=" text-2xl text-orange-500" />

              <input
                type="text"
                placeholder="Enter your delivery location"
                className=" w-58 p-2 outline-none text-gray-900 placeholder:text-gray-400 placeholder:font-semibold"
              />

              {/* Dropdown button */}
              <button className=" text-gray-800">
                <FaChevronDown className=" text-2xl" />
              </button>
            </div>

            {/* Search Bar */}
            <div className=" w-fit py-2 px-3 flex items-center gap-1 bg-gray-50 rounded-2xl">
              <input
                type="text"
                placeholder="Search for restaurants, item or more"
                className=" w-[80vw] md:w-80 lg:w-110 p-2 outline-none text-gray-900 placeholder:text-gray-400 placeholder:font-semibold"
              />

              <FaMagnifyingGlass className=" text-gray-400 text-xl" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className=" mt-10 p-2 lg:p-5 grid grid-cols-2 md:grid md:grid-cols-3 gap-5 md:gap-6 md:justify-items-center lg:gap-12 z-10">
          {cardData.map((card, id) => (
            <div
              key={id}
              className={id === 0 ? "col-span-2 md:col-span-1" : ""}
            >
              <HeroCard card={card} />
            </div>
          ))}
        </div>

        <img 
          src="https://res.cloudinary.com/dcfjexbss/image/upload/v1777822202/Veggies_new_c31sj2.avif"
          className=" lg:h-125 md:h-80 hidden md:flex absolute bottom-52 left-0"
        />

        <img 
          src="https://res.cloudinary.com/dcfjexbss/image/upload/v1777822201/Sushi_replace_jduntt.avif"
          className=" lg:h-125 md:h-80 hidden md:flex absolute bottom-52 right-0"
        />
      </div>
    </div>
  );
}

export default Hero;
