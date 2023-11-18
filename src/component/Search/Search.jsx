import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./search.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
    <div className='control-btn' onClick={onClick}>
        <button className='one'>
            <i className='fa fa-chevron-right'></i>
        </button>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className='control-btn' onClick={onClick}>
        <button className='two'>
            <i className='fa fa-chevron-left'></i>
        </button>
    </div>
);

const Search = ({ searchQuery }) => {
    const [searchList, setSearchList] = useState([]);
    const [filteredSearchList, setFilteredSearchList] = useState([]);

    useEffect(() => {
        // console.log('<--------Search--Query:----------------->', searchQuery);
        async function fetchData() {
            const query = searchQuery ? `&query=${searchQuery}` : '';
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?query=company&include_adult=false&language=en-US&page=1&api_key=8d4e05a343cafbb6ffb3c2098009ac8a${query}`
                );
                setSearchList(response?.data?.results || []);
                // console.log("the api Search data", response.data.results);
            } catch (err) {
                console.log(err);
            }
        }
       
        const filteredResults = searchList.filter(item => {
            const originalTitle = item?.original_title.toLowerCase?.() || '';
            const searchQueryLower = searchQuery?.toLowerCase?.();
            return !searchQuery || originalTitle.includes(searchQueryLower);
        });

        setFilteredSearchList(filteredResults);
        // console.log("Filtered Search data:", filteredResults);
        fetchData();
    }, [searchQuery, searchList]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: searchList.length >= 6 ? 6 : searchList.length,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (

        <div className='upcoming-container'>
            <h1 className='search-heading'>Trending Video</h1>
            <div className='search'>
                <Slider style={{ width: '100%' }} {...settings}>
                    {
                        filteredSearchList.filter(search =>search.poster_path).map((search, id) => (
                            <div className="srch-box" key={id}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${search.poster_path}`}
                                    className="search-pic"
                                    alt={` ${search?.title}`}
                                />
                            </div>
                        ))}
                </Slider>
            </div>

        </div>
    );
};




export default Search;
