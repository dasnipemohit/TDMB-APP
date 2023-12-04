import React from "react";
import "./search.css";

const Enlargment = ({ search }) => {
  return (
    <>
      <div className="enlarged-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${search.poster_path}`}
          className="enlarged-pic"
          alt={` ${search?.title}`}
        />
        <div className="hover-content">
          <h3 className="name">{search.title}</h3>
          <p className="card-overview">{search.overview}</p>
        </div>
      </div>
    </>
  );
};

export default Enlargment;
