import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us Page test cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    //Assertion - when you are doing expect(something)
    expect(heading).toBeInTheDocument();
  });

  test("Should load button from Contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    //Assertion - when you are doing expect(something)
    expect(button).toBeInTheDocument();
  });

  test("Should load 2 input boxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);
    expect(inputBoxes.length).toBe(2);
  });

  test("Should load 2 input boxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).not.toBe(3);
  });
});
