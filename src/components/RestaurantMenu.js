import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, RESTAURANT_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(RESTAURANT_URL + resId);

  if (resInfo === null) return <Shimmer />;

  console.log("Checking Result", resInfo);

  const {
    id,
    name,
    costForTwoMessage,
    cuisines,
    avgRating,
    cloudinaryImageId,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const arr =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;
  console.log("Array of recommended dishes = ", arr[0].card.info.name);

  return (
    <div className="menu">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h2>Cuisines - {cuisines.join(", ")}</h2>
      <h2>Rating - {avgRating}</h2>
      <h2>Menu</h2>
      <ul>
        {arr.map((res) => {
          return (
            <li key={res.card.info.id}>
              {res.card.info.name} - Rs.{" "}
              {res.card.info.finalPrice / 100 || res.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
