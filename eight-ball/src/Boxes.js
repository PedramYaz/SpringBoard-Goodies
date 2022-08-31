import React, { useState } from "react";
import { choice } from "./helpers";
import Box from "./Box";
import "./boxes.css";

const Boxes = (props) => {
  const [box, setBox] = useState(
    Array.from({ length: props.numBoxes }, () => choice(props.colors))
  );

  const handleClick = (e) => {
    let index = Math.floor(Math.random() * props.numBoxes);

    setBox((box) => {
      let boxCopy = [...box];
      boxCopy[index] = choice(props.allColors);
      return boxCopy;
    });
  };
  const boxComponents = box.map((color, i) => <Box key={i} color={color} />);

  return (
    <div>
      <section className="BoxesContainer">{boxComponents}</section>
      <button onClick={handleClick}>Change a Box</button>
    </div>
  );
};

Boxes.defaultProps = {
  numBoxes: 16,
  colors: [
    { 1: "red" },
    { 2: "green" },
    { 3: "blue" },
    { 4: "yellow" },
    { 5: "orange" },
    { 6: "white" },
    { 7: "black" },
    { 8: "violet" },
    { 9: "purple" },
    { 10: "magenta" },
    { 11: "burgandy" },
    { 12: "cyan" },
    { 13: "rosybrown" },
    { 14: "coral" },
    { 15: "darkgrey" },
    { 16: "gold" },
  ],
};

export default Boxes;
