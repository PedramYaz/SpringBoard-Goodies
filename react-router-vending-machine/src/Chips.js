import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
  return (
    <div>
      <img
        src="https://m.media-amazon.com/images/I/81vJyb43URL._SL1500_.jpg"
        alt="chips"
      />
      <h1>
        <Link to="/">go back</Link>
      </h1>
    </div>
  );
};
export default Chips;
