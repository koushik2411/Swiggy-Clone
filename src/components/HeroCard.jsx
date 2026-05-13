import React from "react";
import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";

function HeroCard({ card }) {
  return (
    <div>
      <Link to={card.link}>
        <div className=" md:w-[30vw] lg:w-[22vw] h-75 md:h-90 px-3.5 py-5 md:p-6 bg-orange-50 rounded-4xl flex flex-col gap-1 relative overflow-hidden">
          <h1 className=" text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-700/96 z-10">
            {card.title}
          </h1>

          <h2 className=" md:text-lg lg:text-xl font-bold text-gray-500 z-10">{card.category}</h2>

          <p className=" w-fit py-1 px-2 bg-linear-to-r from-orange-100 to-orange-50 text-orange-500 font-bold text-xs lg:text-sm rounded-full z-10">
            {card.offer}
          </p>

          <div className=" w-54 mt-5 flex items-center justify-between">
            <button className=" cursor-pointer hidden md:flex absolute bottom-8 left-5 z-10">
              <FaCircleArrowRight className=" text-orange-500 text-[44px]" />
            </button>

            <img 
              src={card.image}
               className=" w-55 absolute right-0 bottom-0"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HeroCard;
