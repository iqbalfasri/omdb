import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { detailMovie } from "../lib/api";

export default function Detailpage(props) {
  const [movie, setMovie] = useState(null);
  const { id } = props.match.params;

  useEffect(() => {
    detailMovie(id)
      .then(res => {
        setMovie(res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function renderDetailMovieTop() {
    console.log(movie);
    return movie == null ? null : (
      <>
        <div className="col-md-4">
          <div className="poster-image">
            {movie.Poster == "N/A" ? (
              <div className="empty-image">
                <p>Not found.</p>
              </div>
            ) : (
              <img src={movie.Poster} />
            )}
          </div>
        </div>
        <div className="col-md-8">
          <Link className="button--default" to="/">
            Ke beranda
          </Link>
          <div className="movies--detail-top">
            <h1>{movie.Title}</h1>
            <p>
              <strong>Tahun rilis</strong>: {movie.Released}
            </p>
            <p>
              <strong>Durasi:</strong>: {movie.Runtime}
            </p>
            <p>
              <strong>Genre</strong>: {movie.Genre}
            </p>
            <p>
              <strong>Bahasa</strong>: {movie.Language}
            </p>
            <p>
              <strong>Aktor</strong>: {movie.Actors}
            </p>

            <br />
            <p>
              <strong>Plot</strong>: {movie.Plot}
            </p>
            <br />
            <p>
              <strong>Penulis</strong>: {movie.Writer}
            </p>
          </div>
        </div>
      </>
    );
  }

  function renderDetailMovieBottom() {
    return movie == null ? null : (
      <>
        <p>{movie.Plot}</p>
      </>
    );
  }

  return (
    <>
      <div className="search-wrapper--full">
        <div className="container">
          <div className="search--title">
            <div className="row">{renderDetailMovieTop()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
