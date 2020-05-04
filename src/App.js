import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiscoverPage from "./pages/DiscoverPage";
import Movie from "./components/Movie";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Movies (or films, or pictures. Whichever you like)</h1>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/discover" component={DiscoverPage} />
        <Route path="/discover/:imdbID" component={Movie} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}
