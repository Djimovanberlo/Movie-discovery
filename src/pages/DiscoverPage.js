import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function DiscoverPage() {
  console.log("SEARCHboy");
  const [searchText, set_searchText] = useState("");

  function search() {
    console.log("TO DO: SEARCH FUNCTION", searchText);
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
    </div>
  );
}
