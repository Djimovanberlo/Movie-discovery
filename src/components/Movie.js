import React from "react";

export default function Movie(props) {
  return (
    <p>
      dit is een film Title: {props.title}, year: {props.year}
    </p>
  );
}
