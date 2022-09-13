import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
  return (
    <div>
      <img
        src="https://www.rd.com/wp-content/uploads/2018/02/1-1.jpg?resize=700,466"
        alt="soda"
      />
      <h1>
        <Link to="/">go back</Link>
      </h1>
    </div>
  );
};

export default Soda;
