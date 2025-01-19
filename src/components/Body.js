import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData.js";
import * as test from "../utils/sample.js";
import { useState, useEffect } from "react";

import * as React from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [inputTxt, setInputTxt] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4358411&lng=78.3467857&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // console.log(
    //   "JSON = ",
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (onlineStatus === false) return <h1>Sorry, it seems you are offline</h1>;
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={inputTxt}
            onChange={(e) => setInputTxt(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg border border-green-500"
            onClick={() => {
              const filterList = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(inputTxt.toLowerCase())
              );
              setFilteredRestaurants(filterList);
            }}>
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-50 rounded-lg"
            onClick={() => {
              const filterList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListofRestaurants(filterList);
              console.log("button clicked");
            }}>
            Top rated Restaurants
          </button>
        </div>
      </div>

      <div>
        {listofRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="flex flex-wrap">
            {listofRestaurants.map((res) => (
              <Link
                to={"/restaurants/" + res.info.id}
                key={res.info.id}>
                {res.info.veg ? (
                  <RestaurantCardPromoted resObj={res} />
                ) : (
                  <RestaurantCard resObj={res} />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
