import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Movie(props) {
  const [movie, setMovie] = useState({}); // don't forget initial data type... >.>
  const routeParameters = useParams(); // use this to access params in URL (which we wrote in App.js)
  console.log("hoedje van", routeParameters, routeParameters.imdbID);
  async function fetchInfo() {
    const movieInfo = await axios.get(
      `http://www.omdbapi.com/?i=${routeParameters.imdbID}&apikey=28ea8812`
    );
    console.log("movieinfo:", movieInfo);
    setMovie(movieInfo.data);
  }
  useEffect(fetchInfo, []);
  console.log("babyinfo", movie);
  console.log("title: ", movie.Title);

  return (
    <div>
      <h3>{movie.Title}</h3>
      <h3>Year: {movie.Year}</h3>
      <p>{movie.Plot}</p>
    </div>
  );
}
