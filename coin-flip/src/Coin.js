import React from "react";
import imgHeads from "./imgHeads.jpeg";
import imgTails from "./imgTails.jpeg";

const Coin = ({ flip }) => {
  return (
    <img
      src={flip === 1 ? imgHeads : imgTails}
      className="CoinFlip-img"
      alt="coin"
    />
  );
};

export default Coin;
