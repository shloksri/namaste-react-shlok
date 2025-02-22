import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // console.log("Header rendered");
  // console.log(`Button text = ${btn}`);
  const { loggedinUser } = useContext(UserContext);

  //subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("CartItems: ", cartItems);

  return (
    <div className="flex bg-pink-100 justify-between shadow-lg my-2 sm:bg-yellow-200">
      <div className="logo-container">
        <img
          className="w-32"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="px-4">{loggedinUser}</li>
          <li className="px-4">
            <button
              onClick={() => {
                btn === "Login" ? setBtn("Logout") : setBtn("Login");
              }}>
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
