import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../src/app/page";
import "@testing-library/jest-dom";

function MockImage(props) {
    return React.createElement("img", props);
}

jest.mock("next/image", () => MockImage);

describe("Home", () => {
    it("renders a heading", () => {
        render(<Home />);

        const heading = screen.getByTestId("HomeTitle");

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toMatch(/^Get started by editing!!!.*$/);
    });
});
