const styleCard = {
  backgroundColor: "#f0f0f0",
};

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;

  const { name, cuisines, avgRating, costForTwo, sla } = resObj?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + resObj.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
