import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_URL + resId);
    const result = await data.json();
    setResInfo(result);
    // console.log("Result from custom hook= ", result);
  };
  return resInfo;
};

export default useRestaurantMenu;
