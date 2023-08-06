import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../../src/app/about/page";
import "@testing-library/jest-dom";

function MockImage(props) {
    return React.createElement("img", props);
}

jest.mock("next/image", () => MockImage);

describe("About", () => {
    it("renders a heading", () => {
        render(<About />);

        const title = screen.getByTestId("AboutTitle");

        expect(title).toBeInTheDocument();
    });
});
