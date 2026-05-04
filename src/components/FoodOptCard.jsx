import React from "react";
import { Link } from "react-router-dom";

function FoodOptCard({ item }) {
  return (
    <>
      <Link to={item.link}>
        <div className=" border w-[25vw] lg:w-[18vw] h-30 md:h-48 flex flex-col items-center justify-evenly">
          <img src={item.image} />

          <h1 className=" text-xs md:text-sm lg:text-lg">{item.name}</h1>
        </div>
      </Link>
    </>
  );
}

export default FoodOptCard;
