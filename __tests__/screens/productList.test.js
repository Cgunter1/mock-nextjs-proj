import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Products from "../../src/app/products/page";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

jest.mock("next/router", () => require("next-router-mock"));

function MockImage(props) {
    return React.createElement("img", props);
}

jest.mock("next/image", () => MockImage);

describe("Product List", () => {
    it("renders a the patient details screen", async () => {
        render(<Products />, { wrapper: MemoryRouterProvider });

        const productLink = screen.getByTestId("Product Link 1");

        expect(productLink).toBeInTheDocument();

        fireEvent.click(productLink);

        // Ensure the router was updated:
        expect(mockRouter.asPath).toEqual("/products/1");
    });
});
