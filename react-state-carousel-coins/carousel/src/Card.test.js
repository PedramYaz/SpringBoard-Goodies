import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders the function", function () {
  render(<Card />);
});

it("Matches snapshot", function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMathSnapshot();
});
