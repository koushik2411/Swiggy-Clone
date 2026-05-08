import React from "react";
import Hero from "../components/Hero";
import FoodOptCard from "../components/FoodOptCard";
import Footer from "../components/Footer";

function Home() {
  const foodOpts = [
    {
      image: "",
      name: "North Indian",
      link: "",
    },
    {
      image: "",
      name: "South Indian",
      link: "",
    },
    {
      image: "",
      name: "Biryani",
      link: "",
    },
    {
      image: "",
      name: "Cake",
      link: "",
    },
    {
      image: "",
      name: "Rolls",
      link: "",
    },
    {
      image: "",
      name: "Noodles",
      link: "",
    },
    {
      image: "",
      name: "Paratha",
      link: "",
    },
    {
      image: "",
      name: "Ice Cream",
      link: "",
    },
    {
      image: "",
      name: "Deserts",
      link: "",
    },
    {
      image: "",
      name: "Momo",
      link: "",
    },
    {
      image: "",
      name: "Chinese",
      link: "",
    },
    {
      image: "",
      name: "Pizza",
      link: "",
    },
    {
      image: "",
      name: "Burger",
      link: "",
    },
    {
      image: "",
      name: "Salad",
      link: "",
    },
    {
      image: "",
      name: "Dosa",
      link: "",
    },
    {
      image: "",
      name: "Chhole Bhature",
      link: "",
    },
  ];

  {
    /*
    {
      image: "",
      name: "",
      link: "",
    },
  */
  }
  //--------------------------------------------------------------------------

  const cities = [
    "Mumbai",
    "Pune",
    "New Delhi",
    "Chennai",
    "Kolkata",
    "Ranchi",
    "Puri",
    "Indore",
    "Guwahati",
    "Vizag",
    "Bengaluru",
    "Goa",
  ];

  return (
    <div className=" w-full h-full">
      <Hero />

      {/* Best Food Options */}
      <div className=" mt-5 p-3 lg:p-10">
        <div>
          <h1 className=" font-bold text-xl">Order our best food options</h1>

          <div>
            <button></button>
            <button></button>
          </div>
        </div>

        <div className=" w-full p-2 grid grid-rows-2 grid-flow-col gap-1 overflow-x-auto scrollbar-hide">
          {foodOpts.map((item, id) => (
            <FoodOptCard key={id} item={item} />
          ))}
        </div>
      </div>

      {/* Groceries */}
      <div className=" p-3 lg:p-10">
        <div>
          <h1 className=" font-bold text-xl">Shop groceries on Instamart</h1>

          <div>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>

      {/* Discover restaurants */}
      <div></div>

      <div className=" p-3">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
        />
      </div>

      {/* Cities with food delivery */}
      <div className=" p-3 lg:p-10">
        <h1 className=" font-bold text-xl">Cities with food delivery</h1>

        <div className=" p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className=" border p-3 flex items-center justify-center text-xs text-center rounded-xl"
            >
              Order food online in {city}
            </div>
          ))}
        </div>
      </div>

      {/* Cities with grocery delivery */}
      <div className=" p-3 lg:p-10">
        <h1 className=" font-bold text-xl">Cities with grocery delivery</h1>

        <div className=" p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className=" border p-3 flex items-center justify-center text-xs text-center rounded-xl"
            >
              Order grocery online in {city}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
