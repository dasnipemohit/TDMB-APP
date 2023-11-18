import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ onSearch }) => {
  const [Mobile, setMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // const [filteredData, setFilteredData] = useState([]);

  // console.log(typeof onSearch, "type of onsearch");
  const handleInputSearch = () => {
    if (typeof onSearch === 'function') {
      onSearch(searchQuery);
    } else {
      console.error('onSearch is not a function');
    }
  };


  // const handleSearch = (query) => {
  //   if (Array.isArray(filteredData)) {
  //     const filteredResults = filteredData.filter(item =>
  //       item.title.toLowerCase().includes(query.toLowerCase())
  //     );
  //     setFilteredData(filteredResults);
  //     console.log('the query data', query);
  //   } else {
  //     console.error('filteredData is not an array');
  //   }
  // };

  // const handleSearchInputChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     handleInputSearch();
  //   }
  // };
  return (
    <>
      <header>
        <div className='container_flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <Link className="link" to="/" >
                < img className="logo" src='./images/logo.png' alt='' />
              </Link>
            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <Link className="link" to='/'>Home</Link>
              </li>
              <li>
                <Link className="link" to='/search'>Trending</Link>
              </li>
              <li>
                <Link className="link" to='/latest'>Latest</Link>
              </li>
              <li>
                <Link className="link" to='/upcoming'>Upcoming</Link>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'>  </i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <FontAwesomeIcon
              icon={faSearchengin}
              className="fonticon"
              flip="horizontal"
              style={{ color: "#1b6e98", }}
              onClick={handleInputSearch}
            />
            <input
              type="text"
              className="input-icon"
              placeholder="Search Now"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleInputSearch()}
            />
          </div>
        </div>
      </header>
    </>
  )
}


export default Header
