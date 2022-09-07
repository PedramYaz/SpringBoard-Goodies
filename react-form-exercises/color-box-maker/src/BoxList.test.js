import React from "react";
import { render, screen } from "@testing-library/react";
import BoxList from "./BoxList";

test("renders wihtout crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});
