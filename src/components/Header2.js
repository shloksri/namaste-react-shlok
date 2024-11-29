import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import Login from "./Login";

const Header2 = () => {
  const [btn, setBtn] = useState("Login");

  console.log("Header rendered");
  console.log(`Button text = ${btn}`);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <li>
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

export default Header2;
