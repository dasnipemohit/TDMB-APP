import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Latest from "./component/Latest";
import Upcoming from "./component/Upcoming";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Card from "./home/Card";
import SinglePage  from "./component/watch/SinglePage";
import Trading from "./component/Trending/Trading";
import { useState } from "react";
import Search from "./component/Search/Search";
import Homes from "./component/homes/Homes";


function App() {
  const[filteredData, setFilteredData]= useState([]);
  const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (query) => {
      setSearchQuery(query);
    
      // If there's a query, filter the data; otherwise, display all results
      const filteredResults = query
        ? filteredData.filter(item => item?.title?.toLowerCase().includes(query?.toLowerCase()))
        : filteredData;
      setFilteredData(filteredResults);


      // console.log('the query data', query);
    };

  return (
    <div className="main-container">
      <BrowserRouter>
        <Navbar onSearch={handleSearch}/>
        <Homes  /> 
        <Routes>
          <Route path="/" element={< Card />} />

          <Route path="/latest" element={<Latest  searchQuery={searchQuery}/>} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/trending" element={< Trading/>} />
          <Route path="/search" element={<Search searchQuery={searchQuery}/>}  />
          <Route path="/singlepage/:id" element={< SinglePage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
