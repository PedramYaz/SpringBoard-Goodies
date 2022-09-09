import React, { useState } from "react";
import "./CoinFlip.css";
import Coin from "./Coin";

function CoinFlip() {
  const flipIdx = () => Math.floor(Math.random() * 2) + 1;

  const [totalFlips, setTotalFlips] = useState(0);
  const [headFlips, setHeadFlips] = useState(0);
  const [tailFlips, setTailFlips] = useState(0);
  const [flip, setFlip] = useState(flipIdx());

  const onFlip = () => {
    const side = flipIdx();
    setFlip(side);
    if (side === 1) {
      setHeadFlips(headFlips + 1);
    } else {
      setTailFlips(tailFlips + 1);
    }
    setTotalFlips(totalFlips + 1);
  };

  return (
    <div className="CoinFlip">
      <h1 className="CoinFlip-title">Let's flip a coin!</h1>
      <Coin flip={flip} />
      <div className="CoinFlip-button-div" onClick={onFlip}>
        <button className="CoinFlip-button" data-testiqd="CoinFlip-button">
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
