import React, { useState, useEffect } from "react";

import Card from "../component/movies/card";

import { searchMovies } from "../lib/api";

export default function Homepage() {
  const [movies, setMovies] = useState(undefined);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  function fetchMovies(e) {
    e.preventDefault();

    searchMovies(keyword)
      .then(res => {
        setMovies(res.Search);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function onChangeKeyword(e) {
    setKeyword(e.target.value);
  }

  function renderEmptyMovies() {
    return (
      <div>
        <h4>Tidak ada film.</h4>
      </div>
    );
  }

  return (
    <>
      <div className="search-wrapper">
        <div className="container">
          <div className="search--title">
            <h1>Cari film semaumu, se-sukamu</h1>
          </div>
          <form className="search--input" onSubmit={e => fetchMovies(e)}>
            <input
              onChange={e => onChangeKeyword(e)}
              type="text"
              placeholder="Masukan judul film"
            />
            <button onClick={e => fetchMovies(e)}>cari film</button>
          </form>
        </div>
      </div>

      <div className="list-wrapper">
        <div className="container">
          {movies !== undefined ? <Card data={movies} /> : renderEmptyMovies()}
        </div>
      </div>
    </>
  );
}
