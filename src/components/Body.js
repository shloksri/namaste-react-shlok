import RestaurantCard from "./RestaurantCard";
import resList from '../utils/mockData.js'
import { test2 } from '../utils/sample.js'

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            {/* <div>
                Test - {test2.name}
            </div> */}
            <div className="res-container">
                {resList.map(res => <RestaurantCard key={res.info.id} resObj={res} />)}
            </div>
        </div>
    )
}

export default Body;