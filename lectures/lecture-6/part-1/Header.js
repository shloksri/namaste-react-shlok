import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import Login from "../Login";

const Header = () => {
  console.log("Header rendered");
  console.log("-------");

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
            <Login />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
