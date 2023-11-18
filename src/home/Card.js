import React, { useState } from "react";
import "./card.css";
import Latest from "../component/Latest";
import Upcoming from "../component/Upcoming";
import Homes from "../component/homes/Homes";
import Upcomming from "../component/upcoming/Upcomming";

import { latest, recommended, upcome } from "../dummyData";
import Trading from "../component/Trending/Trading";
import Search from "../component/Search/Search";
const Card = () => {
  const [items, setItems] = useState(upcome);
  const [item, setItem] = useState(latest);
  const [rec, setRec] = useState(recommended);
  return (
    <>
      <div className="app">
        <Latest title="THE LATEST MOVIES APP" />
        <Upcoming />
        <Search/>
        <Trading />
        
        <Upcomming items={items} title="Upcoming Movies" />
        <Upcomming items={item} title="Latest Movies" />
        <Upcomming items={rec} title="Recommended Movies" />
      </div>
    </>
  );
};

export default Card;
