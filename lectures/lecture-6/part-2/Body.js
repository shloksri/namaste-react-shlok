import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.js";
import * as test from "../utils/sample.js";
import { useState, useEffect } from "react";

import * as React from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [inputTxt, setInputTxt] = useState("");

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

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={inputTxt}
          onChange={(e) => setInputTxt(e.target.value)}
        />
        <button
          onClick={() => {
            const filterList = listofRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(inputTxt.toLowerCase())
            );
            setFilteredRestaurants(filterList);
          }}>
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
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

      <div>
        {filteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="res-container">
            {filteredRestaurants.map((res) => (
              <RestaurantCard
                key={res.info.id}
                resObj={res}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
