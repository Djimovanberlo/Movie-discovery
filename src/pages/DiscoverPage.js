import React, { useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";

export default function DiscoverPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState("");

  console.log("SEARCHboy", searchText);

  async function search() {
    console.log("Searching for...", searchText);
    set_searchState("searching...");
    const data = await axios.get(
      `http://www.omdbapi.com/?s=${searchText}&apikey=a7462395`
    );
    const movies = data.data.Search;

    console.log("movies:", movies);

    function movieText() {
      return (
        <div>
          {movies.map((movie) => {
            console.log(movie);
            return (
              <div>
                <h4>
                  {movie.Title} ({movie.Year})
                </h4>
                <img src={movie.Poster} />
              </div>
            );
          })}
        </div>
      );
    }

    set_searchState(movieText);
  }

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        Write (part of) a movie title and hit search to show all movies
        containing that title
      </p>
      <input
        value={searchText}
        onChange={(event) => set_searchText(event.target.value)}
      />
      <button onClick={search}>Search</button>
      <div>{searchState}</div>
    </div>
  );
}
