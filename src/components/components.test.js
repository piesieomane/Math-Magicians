import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import Quote from "./Quote";
import Calculator from "./Calculator";
import Nav from "./Nav";

it("renders correctly", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly", () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("render correctly", () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly", () => {
  < Router >
    const tree = renderer.create(
    <Nav />
    ).toJSON(); expect(tree).toMatchSnapshot();
  </ Router>;
});
