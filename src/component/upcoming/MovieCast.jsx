import React from 'react'

const MovieCast = () => {
  return (
    <div className="detail__cast__card" key={index}>
            <figure className="detail__imgcont">
              <img
                src={imgUrl + prsn.profile_path}
                alt=""
                className="detail__cast__img"
              />
            </figure>
            <h3 className="detail__cast__name">{prsn.name}</h3>
            <h4 className="detail cast__charct">{prsn.character}</h4>
          </div> 
  )
}

export default MovieCast;
{/* <div className="detail__cast">
      {limitedItems.map((prsn, index) => { */}
//   )