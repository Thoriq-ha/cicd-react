// src/Greeting.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // untuk tambahan matchers
import Greeting from "./Greeting";

test("renders a greeting message", () => {
  // Render komponen
  render(<Greeting name="Thoriq" />);

  // Temukan elemen dengan query dan periksa isinya
  const greetingElement = screen.getByText(/Hello, Thoriq!/i);
  expect(greetingElement).toBeInTheDocument();
});
