import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { NavLink } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import RestaurantMenueCard from "./RestaurantMenueCard";
import { MENUE_URL } from "../utils/constants";
import { useParams } from "react-router-dom";


function RestaurantMenue() {
  const [resInfo, setResInfo] = useState(null);
  const {resId}=useParams()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
       `${MENUE_URL+resId}` 
      );
      const json = await data.json();
      console.log("Swiggy Menu JSON:", json);
      setResInfo(json);
      console.log(resInfo);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    city,
    cloudinaryImageId,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    id
  } = resInfo?.data?.cards[2]?.card?.card?.info;
  const { cards } =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR || {};

  return (
    <>
      <div className="pt-5 pl-96 pr-96">
        <div className="p-3 ">
          <NavLink to="/">Home</NavLink>/{city}/{name}{" "}
        </div>
        <div className="text-3xl font-bold p-3">{name}</div>
        <div className="w-full p-3 flex h-96 overflow-hidden">
          <img
            className="w-full rounded-3xl h-full object-cover object-center block"
            alt={name}
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        <div className="font-bold p-1">
          <span>{avgRating}</span>
          <span> ({totalRatingsString})</span>
          <span> {costForTwoMessage}</span>
        </div>
        <div className="text-amber-600 font-bold">{cuisines.join(",")}</div>

       <div>
          {cards.map((cards) => {
            return <RestaurantMenueCard key={id} cards={cards} />;
          })}
          </div>
        
      </div>
    </>
  );
}

export default RestaurantMenue;
