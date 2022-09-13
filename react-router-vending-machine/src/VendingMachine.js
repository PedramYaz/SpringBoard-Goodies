import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1>
        <Link to="/soda">Soda</Link>
      </h1>
      <h1>
        <Link to="/chips">chips</Link>
      </h1>
      <h1>
        <Link to="/candy">candy</Link>
      </h1>
    </div>
  );
};

export default VendingMachine;
