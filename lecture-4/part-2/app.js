import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav bar
 * 
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Img
 *          - Name, Star Rating, Cuisines, Delivery time
 *          - 
 * 
 * Footer
 *  - Copyright
 *  - Links
 *  - Addres
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {

    const { resName, cuisine, rating, deliveryTime } = props;

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="res-logo" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>{deliveryTime}</h4>
        </div>

    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian" rating="4.4" deliveryTime="38 minutes" />
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" rating="4.2" deliveryTime="25 minutes" />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)