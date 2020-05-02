import React, { useState } from "react";
import axios from "axios";

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
    setTimeout(() => set_searchState("Done. data: "), 1000);
    console.log("DATA:", data);
  }

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(event) => set_searchText(event.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <p>{searchState}</p>
    </div>
  );
}
