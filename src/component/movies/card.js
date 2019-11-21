import React from "react";

import "./card.css";

function Card({ data }) {
  return (
    <div className="row">
      {data.map(movie => {
        return (
          <a href={`/movie/detail/${movie.imdbID}`} className="col-md-4 mb-4">
            <div className="card card-custom text-white">
              <img
                style={{ maxHeight: "445px" }}
                src={movie.Poster}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text text-muted">{movie.Year}</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Card;
