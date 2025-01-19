import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, RESTAURANT_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // console.log("URL for Restaurant: ", RESTAURANT_URL + resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  // console.log("Checking Result", resInfo);

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
  // console.log("Array of recommended dishes = ", arr[0].card.info.name);

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("All headers: ", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        Cuisines - {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={
            index === showIndex
              ? () => setShowIndex(null)
              : () => setShowIndex(index)
          } //this code checks if the same Category is clicked or not.
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
