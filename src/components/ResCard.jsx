import React from "react";
import { CDN_URL } from "../utils/constants";

 function ResCard({ resList }) {
  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } =
    resList?.info || {};
  return (
    <div className=" w-60 p-5 h-80 m-4 rounded-lg shadow-lg shadow-neutral-500">
     
      <img className="w-full rounded-lg mb-4 h-40" alt={name} src={CDN_URL + cloudinaryImageId} />
   
      <h1 className="truncate">{name}</h1>
      <h4 className="truncate">{cuisines.join(",")}</h4>
      <div>{avgRating}</div>
      <div>{costForTwo}</div>
      <div>{sla.deliveryTime} min</div>
    </div>
  );
}

export default ResCard;
