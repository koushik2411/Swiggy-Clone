import React from "react";
import Hero from "../components/Hero";
import FoodOptCard from "../components/FoodOptCard";

function Home() {
  const foodOpts = [
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683679/north_indian_dkf5lf.png",
      name: "North Indian",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683676/south_indian_fbhxwj.png",
      name: "South Indian",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683677/biryani_heafbj.png",
      name: "Biryani",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683674/cake_gz60aw.png",
      name: "Cake",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683678/rolls_jfxvvv.png",
      name: "Rolls",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683674/noodles_brpw4h.png",
      name: "Noodles",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683678/paratha_nmguwf.png",
      name: "Paratha",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683676/ice_creams_lm4eko.png",
      name: "Ice Cream",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683677/deserts_phcu24.png",
      name: "Deserts",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683674/momo_a8kwqr.png",
      name: "Momo",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683676/chinese_k4nvbz.png",
      name: "Chinese",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683673/pizza_o6dqy2.png",
      name: "Pizza",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683675/burger_hgxaum.png",
      name: "Burger",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683673/salad_ezi54k.png",
      name: "Salad",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683676/dosa_vf5fru.png",
      name: "Dosa",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683673/chhole_bhature_p9b4ka.png",
      name: "Chhole Bhature",
    },
  ];

  {
    /*
    {
      image: "",
      name: "",
    },
  */
  }
  //--------------------------------------------------------------------------

  const groceries =[
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683767/vegetables_vbofgy.png",
      name: "Vegetables",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683766/fruits_jboyuu.png",
      name: "Fruits",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683762/dairy_and_bread_bs0hoi.png",
      name: "Dairy & Bread",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683761/oats_g3du3z.png",
      name: "Oats",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683765/snacks_smagwk.png",
      name: "Snacks",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683764/drinks_vmcazd.png",
      name: "Cold Drinks",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683761/cookies_sh1drk.png",
      name: "Cookies",
    },
    {
      image: "https://res.cloudinary.com/dcfjexbss/image/upload/v1778683763/chocolates_dsrfxq.png",
      name: "Chocolates",
    },
  ]


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

        <div className=" w-full p-2 grid grid-rows-2 grid-flow-col gap-3 justify-items-center overflow-x-auto scrollbar-hide">
          {foodOpts.map((item, id) => (
            <FoodOptCard key={id} item={item} />
          ))}
        </div>
      </div>

      {/* Groceries */}
      <div className=" mt-3 p-3 lg:p-10">
        <div>
          <h1 className=" font-bold text-xl">Shop groceries on Instamart</h1>

          <div>
            <button></button>
            <button></button>
          </div>

          <div className=" w-full p-2 grid grid-rows-1 grid-flow-col gap-3 justify-items-center overflow-x-auto scrollbar-hide">
          {groceries.map((item, id) => (
            <FoodOptCard key={id} item={item} />
          ))}
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
      <div className=" p-3 lg:p-15">
        <h1 className=" font-bold text-xl">Cities with food delivery</h1>

        <div className=" p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className=" border p-3 flex items-center justify-center text-sm text-center rounded-xl"
            >
              Order food online in {city}
            </div>
          ))}
        </div>
      </div>

      {/* Cities with grocery delivery */}
      <div className=" p-3 lg:p-15">
        <h1 className=" font-bold text-xl">Cities with grocery delivery</h1>

        <div className=" p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className=" border p-3 flex items-center justify-center text-sm text-center rounded-xl"
            >
              Order grocery online in {city}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;
