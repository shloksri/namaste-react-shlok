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

const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="res-logo" />
            <h3>Meghna Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
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
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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