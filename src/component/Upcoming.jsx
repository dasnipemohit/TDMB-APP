import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './upcoming.css';


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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const query = searchQuery ? `&query=${searchQuery}` : '';
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/tv/day?api_key=8d4e05a343cafbb6ffb3c2098009ac8a${query}`
        );
        setTvList(response?.data?.results);
        // console.log("the api Upcoming data", response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [searchQuery]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: tvlist.length >= 6 ? 6 : tvlist
      .length,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };


  return (
    <div className='upcoming-container'>
      <h3 className='upcoming-title'>Upcoming Videos</h3>
      <Slider style={{ width: '100%' }}{...settings} >
        {tvlist.map((tvShow, di) => (
          <div
            key={di}
            className={`crd ${hoveredIndex === di ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(di)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
              className='crd-img'
              alt={`Poster for ${tvShow.original_title || tvShow.original_name}`}
            />
            {hoveredIndex === di && (
              <div className='crd-img'>
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
