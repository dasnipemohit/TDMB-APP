import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Single.css"
import Moviedb from './Moviedb';

const SingleUpcomingItem = () => {
    const { id } = useParams();
    const [tvShow, setTvShow] = useState("");

    useEffect(() => {
        async function fetchItemDetails() {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/tv/${id}?api_key=8d4e05a343cafbb6ffb3c2098009ac8a`
                );
                setTvShow(response.data);
                console.log("response", response)
            } catch (error) {
                console.error('Error fetching item details:', error);
            }
        }

        fetchItemDetails();
    }, [id]);

    if (!tvShow) {
        return <div>Loading...</div>;
    }

    return (

        <div className='detail'>
            <div className='detail__inner'>
                <div className="detail__backdrop">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path || tvShow.backdrop_path}`}
                        alt={`Poster for ${tvShow.original_title || tvShow.original_name}`}
                    />
                    <div className="detail__desc">
                         <h3 className="detail__title"><i className='movie-title'>{tvShow.name}</i></h3> 
                        <ul>
                            <li key={id} className='details__genres'>Average :{tvShow.vote_average}</li>
                        </ul>
                        <h3 className="detail__cast__name">Season :{tvShow.number_of_seasons}</h3>
                        <h4 className="detail cast__charct">Number of Episode :{tvShow.number_of_episodes}</h4>
                         <p className="detail__overview">Desc.{tvShow.overview}</p> 
                    </div>
                </div>
            </div>
            <Moviedb tvShow={tvShow} />
        </div>
    );
};
export default SingleUpcomingItem;
