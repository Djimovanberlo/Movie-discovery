import React from "react";
import { useParams } from "react-router-dom";

export default function Movie(props) {
  const route_parameters = useParams();
  return (
    <p>
      Dit is een movie component {props.imdbID}
      {/* dit is een film Title: {props.title}, year: {props.year} */}
    </p>
  );
}
