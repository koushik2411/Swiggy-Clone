import React from "react";
import { Link } from "react-router-dom";

function FoodOptCard({ item }) {
  return (
    <>
      <Link to={item.link}>
        <div className=" w-[25vw] lg:w-[16vw] flex flex-col items-center justify-evenly gap-2">
          <img src={item.image} className=" rounded-t-xl"/>

          <h1 className=" mb-3 text-sm md:text-md lg:text-lg">{item.name}</h1>
        </div>
      </Link>
    </>
  );
}

export default FoodOptCard;
