import React, { useState } from "react";

import { searchMovies } from "../lib/api";

export default function Homepage() {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");

  function fetchMovies(e) {
    e.preventDefault();

    searchMovies(keyword)
      .then(res => {
        setMovies(res.Search);
      })
      .catch(error => {
        console.log(error);
      });

    console.log(movies);
  }

  function onChangeKeyword(e) {
    setKeyword(e.target.value);
  }

  return (
    <>
      <div className="search-wrapper">
        <div className="container">
          <form onSubmit={e => fetchMovies()}>
            <input
              onChange={e => onChangeKeyword(e)}
              type="text"
              placeholder="Masukan judul film"
            />
            <button onClick={e => fetchMovies(e)}>cari</button>
          </form>
        </div>
      </div>
    </>
  );
}
