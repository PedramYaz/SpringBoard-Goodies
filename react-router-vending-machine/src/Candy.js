import React from "react";
import { Link } from "react-router-dom";

const Candy = () => {
  return (
    <div>
      <img
        src="https://www.candywarehouse.com/category-images/Types%20Images/type-lollipops-suckers.jpg"
        alt="candy"
      />
      <h1>
        <Link to="/">go back</Link>
      </h1>
    </div>
  );
};
export default Candy;
