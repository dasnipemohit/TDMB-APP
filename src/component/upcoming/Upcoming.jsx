import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './upcoming.css';
import { Link, useNavigate } from 'react-router-dom';


const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn next' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-chevron-right'></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn prev' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-chevron-left'></i>
      </button>
    </div>
  );
};


const Upcoming = ({ searchQuery }) => {
  const [tvlist, setTvList] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState('');
  const [filterTv, setFilterTv] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchData() {
      const query = searchQuery ? `&query=${searchQuery}` : '';
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/tv?query=show&include_adult=false&language=en-US&page=1&api_key=8d4e05a343cafbb6ffb3c2098009ac8a${query}`
        );
        setTvList(response.data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    const filteredTv = tvlist.filter(item => {
      const originalTitle = item?.original_name?.toLowerCase?.() || '';
      const searchQueryLower = searchQuery?.toLowerCase?.();
      return !searchQuery || originalTitle.includes(searchQueryLower);
    });
    setFilterTv(filteredTv);
  }, [searchQuery, tvlist]);

  const handleClick = (itemId) => {
  
    navigate(`/upcoming/${itemId}`);

  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: tvlist.length >= 5 ? 6 : tvlist,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className='upcoming__container'>
      <h3 className='upcoming-title'>
        <Link to="/upcoming" className='link'>Upcomes Movies</Link></h3>
      <Slider style={{ width: '100%' }} {...settings}>
        {filterTv.filter(upcoming => upcoming.poster_path).map((tvShow, key) => (
          <div
            key={key}
            className={`crd ${hoveredIndex === key ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(key)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(tvShow.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
              className='crd-img'
              alt={`Poster for ${tvShow.original_title || tvShow.original_name}`}
            />
            {hoveredIndex === key && (
              <div className='card-img'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                  alt={`Poster for ${tvShow.original_title || tvShow.original_name}`}
                  className='larger-img'
                />
                <div className='card-details'>
                  <h3 className='name'>{tvShow.original_title || tvShow.original_name}</h3>
                  <p className='card-overview'>{tvShow.overview}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default Upcoming;

