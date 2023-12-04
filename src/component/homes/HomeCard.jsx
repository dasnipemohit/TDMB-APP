import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import "./home.css"

const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags } }) => {
  const coverRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const coverElement = coverRef.current;
      const scrollPosition = window.scrollY;

      if (coverElement) {
        const coverHeight = coverElement.offsetHeight;
        const opacity = 1 - scrollPosition / coverHeight;
        coverElement.style.opacity = opacity;

        if (scrollPosition <= coverHeight) {
          coverElement.classList.add("sticky");
        } else {
          coverElement.classList.remove("sticky");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content_flex'>
          <div className='coverContent'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <div className='rate'>
                <i className='fas fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star-half'></i>
              </div>
              <label>{rating}(Imdb)</label>
              <span>GP</span>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              <h4>
                <span>Genres </span>
                {genres}
              </h4>
              <h4>
                <span>Tags </span>
                {tags}
              </h4>
            </div>
            <button className='primary-btn'>
              PLAY NOW MOVIES
            </button>
          </div>
          <div className='palyButton row'>
            <Link to={`/singlepage/${id}`}>
              <button className="watch">
                <div className='img'>
                  <img src='./images/play-button.png' alt='' />
                  <img src='./images/play.png' className='change' />

                </div>
                <span className="trailer">WATCH TRAILER</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
