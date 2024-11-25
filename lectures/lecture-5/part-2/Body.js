import RestaurantCard from "./RestaurantCard";
import resList from '../utils/mockData.js'
import * as test from '../utils/sample.js'
import { useState } from 'react'

import * as React from 'react';

const Body = () => {

    const [listofRestaurants, setListofRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div>
                test2 = {test.test2.name} <br />
                test3 = {test.test3.name} <br />
                {/* test 1 = {test.test1.name} - error here */}
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterList = listofRestaurants.filter(res => res.info.avgRating > 4)
                    setListofRestaurants(filterList)
                    console.log("button clicked");
                }}>Top rated Restaurant</button>
            </div>
            <div className="res-container">
                {listofRestaurants.map(res => <RestaurantCard key={res.info.id} resObj={res} />)}
            </div>
        </div>
    )
}

export default Body;