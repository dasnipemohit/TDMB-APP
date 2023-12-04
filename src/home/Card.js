// import React, { useEffect, useState } from "react";
import "./card.css";

import Search from "../component/Search/Search";
import Latest from "../component/Trending/Latest";
import Upcoming from "../component/upcoming/Upcoming";
import Homes from "../component/Homes/Homes";


const Card = ({ searchQuery }) => {


  return (
    <>
      <div className="app">
        <Homes />
        <Latest searchQuery={searchQuery} />
        <Upcoming searchQuery={searchQuery} />
        <Search searchQuery={searchQuery} />
      </div>
    </>
  );
};

export default Card
