import React from 'react'


const Moviedb = ({tvShow}) => {
  return (
    <div className="detail__cast__card" key={tvShow.index}>
    <figure className="detail__imgcont">
      <img
       src={`https://image.tmdb.org/t/p/w500${tvShow.seasons.poster_path}`}
        alt=""
        className="detail__cast__img"
      />
    </figure>
    <h3 className="detail__cast__name">{tvShow?.seasons?.name}</h3>
    <h4 className="detail cast__charct">{tvShow.seasons.overview}</h4>
  </div>
  )
}

export default Moviedb