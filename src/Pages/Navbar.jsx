import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DayNightToggle from 'react-day-and-night-toggle'

const Header = ({ onSearch }) => {
  const [Mobile, setMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const handleInputSearch = () => {
    if (typeof onSearch === 'function') {
      onSearch(searchQuery);
    } else {
      console.error('onSearch is not a function');
    }
  };
  const toggleMode = () => {
    if (isDarkMode) {
      // Dark Mode
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Has Enabled", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      // Light Mode
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Enabled", "success");
      document.title = "TextUtils - LightMode";
    }

    // Toggle the state
    setIsDarkMode(!isDarkMode);
  };
  return (
    <header>
      <div className='container_flexSB'>
        <div className='logo'>
          <Link className="ink" to="/">
            <img src='./images/logo.png' alt='' />
          </Link>
        </div>

        <nav className={Mobile ? "navMenu-list" : "flexSB"}>
          <ul onClick={() => setMobile(false)}>
            <li>
              <Link className="ink" to='/'>Home</Link>
            </li>
            <li>
              <Link className="ink" to='/search'>Trending</Link>
            </li>
            <li>
              <Link className="ink" to='/latest'>Latest</Link>
            </li>
            <li>
              <Link className="ink" to='/upcoming'>Upcoming</Link>
            </li>
            <li>
              <DayNightToggle
                className="ink"
                onChange={toggleMode}
                checked={isDarkMode}
              />
            </li>
          </ul>
        </nav>

        <div className='account flexSB'>
          <FontAwesomeIcon
            icon={faSearchengin}
            className="fonticon"
            flip="horizontal"
            style={{ color: "#1b6e98" }}
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

        <button className='toggle' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
        </button>
      </div>
    </header>
  );
};

export default Header;
