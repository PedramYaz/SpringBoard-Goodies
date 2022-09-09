import React from "react";

/** Single card: just renders the card as received from deck. */

function Card({ name, image }) {
  return <img className="Card" alt={name} src={image} />;
}

export default Card;
