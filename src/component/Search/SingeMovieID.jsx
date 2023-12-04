import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MoviesId.css';

const SingleMovieID = () => {
    const { id } = useParams();
    const [tvShow, setTvShow] = useState("");

    useEffect(() => {
        async function fetchMovie() {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=8d4e05a343cafbb6ffb3c2098009ac8a`
                );
                setTvShow(response?.data);
                console.log("Movie Id", response.data);
            } catch (error) {
                console.log("Error fetching items details:", error);
            }
        }

        fetchMovie();
    }, [id]);

    return (
        <div className='detail'>
            <div className='detail__inner'>
                <div className="detail__backdrop">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path || tvShow.backdrop_path}`}
                        alt={`Poster for ${tvShow.original_title || tvShow.original_name}`}
                    />
                    <div className="detail__desc">
                        <h3 className="detail__title">{tvShow.original_name}</h3>
                        <ul>
                            <li key={id} className='details__genres'>
                                
                            </li>
                        </ul>
                        <p className="detail__overview">{tvShow.overview}</p>
                    </div>
                    <button className="detail__backdrop__watchbtn"><span>Watch Now</span></button>
                </div>
            </div>
        </div>

    );
};

export default SingleMovieID;
