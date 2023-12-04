import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Latest from "./component/Trending/Latest";
import { useState } from "react";
import Card from "./home/Card";
import Upcoming from "./component/upcoming/Upcoming" ;
import Search from "./component/Search/Search";
import SingleUpcomingItem from "./component/upcoming/SingleUpcomingItem";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import SingeMovieID from "./component/Search/SingeMovieID";


function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredResults = query
      ? filteredData.filter((item) =>
          item?.title?.toLowerCase().includes(query?.toLowerCase())
        )
      : filteredData;
    setFilteredData(filteredResults);
  };

  return (
    <div className="main-container">
      
      <BrowserRouter>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Card searchQuery={searchQuery} />} />
          <Route
            path="/latest"
            element={<Latest searchQuery={searchQuery} />}
          /> 
          <Route
            path="/upcoming"
            element={<Upcoming searchQuery={searchQuery} />}
          />
          <Route
            path="/search"
            element={<Search searchQuery={searchQuery} />}
          />
          <Route path="/upcoming/:id" element={<SingleUpcomingItem />} />  
          <Route path="/movie/:id"   element={<SingeMovieID/>}  />
          {/* <Route path="/singlepage/:id" element={<SinglePage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
