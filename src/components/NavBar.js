import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Route>
        <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
          Home
        </NavLink>{" "}
        <NavLink exact to="/discover" activeStyle={{ fontWeight: "bold" }}>
          Discover
        </NavLink>{" "}
        <NavLink exact to="/about" activeStyle={{ fontWeight: "bold" }}>
          About
        </NavLink>
      </Route>
    </div>
  );
}
