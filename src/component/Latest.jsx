import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';
import "./latest.css";
import Slider from 'react-slick';
import '@fortawesome/fontawesome-free/css/all.css';



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


const Latest = ({ searchQuery }) => {
  const [movieList, setMovieList] = useState([]);
  const [filteredSearchList, setFilteredSearchList] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const query = searchQuery ? `&query=${searchQuery}` : '';
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/tv?query=all&include_adult=false&language=en-US&page=1&api_key=8d4e05a343cafbb6ffb3c2098009ac8a${query}`

          // `https://api.themoviedb.org/3/movie/upcoming?api_key=8d4e05a343cafbb6ffb3c2098009ac8a${queryParam}`
        );
        setMovieList(response?.data?.results);
        // console.log("latest data: ", response?.data?.results);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
    const filteredResults = movieList.filter(item => {
      const originalTitle = item?.original_name?.toLowerCase?.() || '';
      const searchQueryLower = searchQuery?.toLowerCase?.();
      return !searchQuery || originalTitle.includes(searchQueryLower);
  });
  
  setFilteredSearchList(filteredResults);
  }, [searchQuery , movieList]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: movieList.length >= 3 ? 4: movieList.length,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className='upcoming-container'>
        <h1 className='upcoming-heading'> Latest Video</h1>
    <div className="upcoming_imgs"> 
          <Slider style={{ width: '100%' }}{...settings}>
            {filteredSearchList.map((movie, id) => (
              <div className="box-fox"  key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-pic"
                  alt={`Poster for ${movie.original_name}`}
                />
              </div>
            ))}
          </Slider>
        </div>
       </div> 
    </>
  );
};

export default Latest;