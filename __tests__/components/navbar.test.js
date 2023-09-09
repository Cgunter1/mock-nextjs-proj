import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../../src/components/Navbar";

function MockImage(props) {
    return React.createElement("img", props);
}

jest.mock("next/image", () => MockImage);

describe("Navbar", () => {
    it("renders title on navbar", () => {
        render(<Navbar />);

        const title = screen.getByTestId("title");

        expect(title.textContent).toEqual("Lost & found Items");

        expect(title).toBeInTheDocument();
    });
    it("renders children inside of navbar", () => {
        render(
            <Navbar>
                <p data-testid="sample_text">Hello</p>
            </Navbar>
        );

        const title = screen.getByTestId("title");

        expect(title.textContent).toEqual("Lost & found Items");

        expect(title).toBeInTheDocument();

        const sampleText = screen.getByTestId("sample_text");

        expect(sampleText.textContent).toEqual("Hello");

        expect(sampleText).toBeInTheDocument();
    });
});
