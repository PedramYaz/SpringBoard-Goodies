import React from "react";
import { render, fireEvent, screen, getByText } from "@testing-library/react";
import CoinFlip from "./CoinFlip";

it("renders the function", function () {
  render(<CoinFlip />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<CoinFlip />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on flip me", function () {
  render(<CoinFlip />);

  const textInfo = screen.getByText("Out of", { exact: false });
  const noTextInfo = screen.getByText("Out of 0 flips", { exact: false });

  fireEvent.click(screen.getByText("FLIP ME!"));

  expect(textInfo).toBeInTheDocument();
  expect(noTextInfo).not.toBeInTheDocument();
});

// it("works when you click on flip me", function () {
//   const { getByText } = render(<CoinFlip />);

//   const textInfo = getByText("Out of");
//   const noTextInfo = getByText("0");

//   fireEvent.click(getByText("FLIP ME!"));

//   expect(textInfo).toBeInTheDocument;
//   expect(noTextInfo).not.toBeInTheDocument;
// });
