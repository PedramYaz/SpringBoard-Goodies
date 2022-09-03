import React, { useState } from "react";
import "./CoinFlip.css";
import imgHeads from "./imgHeads.jpeg";
import imgTails from "./imgTails.jpeg";

function CoinFlip() {
  const flipIdx = () => Math.floor(Math.random() * 2) + 1;

  const [totalFlips, setTotalFlips] = useState(0);
  const [headFlips, setHeadFlips] = useState(0);
  const [tailFlips, setTailFlips] = useState(0);
  const [flip, setFlip] = useState(flipIdx());

  return (
    <div className="CoinFlip">
      <h1 className="CoinFlip-title">Let's flip a coin!</h1>
      <img
        src={flip === 1 ? imgHeads : imgTails}
        className="CoinFlip-img"
        alt="coin"
      />
      <div className="CoinFlip-button-div" onClick={() => setFlip(flipIdx())}>
        <button
          onClick={
            flip === 1
              ? () => setTotalFlips(totalFlips + 1)
              : () => setTotalFlips(totalFlips + 1)
          }
          onClickCapture={
            flip === 1
              ? () => setHeadFlips(headFlips + 1)
              : () => setTailFlips(tailFlips + 1)
          }
          className="CoinFlip-button"
          data-testiqd="CoinFlip-button"
        >
          FLIP ME!
        </button>
      </div>
      <p data-testid="CoinFlip-text">
        Out of {totalFlips} flips, there have been {headFlips} heads and{" "}
        {tailFlips} tails
      </p>
    </div>
  );
}

export default CoinFlip;
