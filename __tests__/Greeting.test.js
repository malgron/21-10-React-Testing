import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from "../src/App";
import Greeting from "../src/Greeting";

describe("Test Greeting.js", () => {
  test("renders name and greeting props correctly", () => {
    render(<Greeting greeting="good morning" name="John" />);
    const text = screen.getByText("Hello and good morning, John!");

    expect(text).toBeInTheDocument();
  });
});
