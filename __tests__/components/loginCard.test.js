import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginCard from "../../src/components/LoginCard";

function MockImage(props) {
    return React.createElement("img", props);
}

jest.mock("next/image", () => MockImage);

describe("LoginCard", () => {
    it("renders correctly", () => {
        const onLogin = jest.fn();
        const onSignUp = jest.fn();

        render(<LoginCard onLogin={onLogin} onSignUp={onSignUp} />);

        // Text renders on screen
        screen.findAllByText("Login");
        screen.getByText("Email");
        screen.getByText("Password");
        screen.getByText("Organization");
        screen.getByText("Forgot Password?");
        screen.getByText("Don't have an account?");
        screen.getByText("Sign Up");

        // Button for Login is disabled and Sign Up is not.

        const loginButton = screen.getByTestId("loginButton");
        loginButton.click();
        expect(onLogin).not.toHaveBeenCalled();

        const signUpButton = screen.getByTestId("signUpButton");
        signUpButton.click();
        expect(onSignUp).toHaveBeenCalledTimes(1);
    });

    it("runs functions correctly when forgot password is chosen", () => {
        const onLogin = jest.fn();
        const onSignUp = jest.fn();
        const onForgotPassword = jest.fn();

        render(
            <LoginCard
                onLogin={onLogin}
                onSignUp={onSignUp}
                onForgotPassword={onForgotPassword}
            />
        );

        // Button for Login is disabled and Sign Up is not.

        const forgotPasswordLink = screen.getByTestId("forgotPasswordLink");
        fireEvent.click(forgotPasswordLink);
        expect(onForgotPassword).toHaveBeenCalledTimes(1);
    });
    describe("disables login button if at least one of the inputs for email, password, or organization are not valid", () => {
        let onLogin;
        let onSignUp;
        let onForgotPassword;

        beforeEach(() => {
            onLogin = jest.fn();
            onSignUp = jest.fn();
            onForgotPassword = jest.fn();
        });
        it("should disable login when no inputs are filled in", () => {
            render(
                <LoginCard
                    onLogin={onLogin}
                    onSignUp={onSignUp}
                    onForgotPassword={onForgotPassword}
                />
            );
            const loginButton = screen.getByTestId("loginButton");
            loginButton.click();
            expect(onLogin).not.toHaveBeenCalled();
        });
        it("should disable login when email is not filled in", () => {
            const MOCK_EMAIL = "email@gmail.com";

            render(
                <LoginCard
                    onLogin={onLogin}
                    onSignUp={onSignUp}
                    onForgotPassword={onForgotPassword}
                />
            );
            const emailInput = screen.getByTestId("emailInput");

            fireEvent.change(emailInput, { target: { value: MOCK_EMAIL } });

            expect(emailInput).toHaveValue(MOCK_EMAIL);

            const loginButton = screen.getByTestId("loginButton");
            loginButton.click();
            expect(onLogin).not.toHaveBeenCalled();
        });
        it("should disable login when password is not filled in", () => {
            const MOCK_PASSWORD = "123password";

            render(
                <LoginCard
                    onLogin={onLogin}
                    onSignUp={onSignUp}
                    onForgotPassword={onForgotPassword}
                />
            );
            const passwordInput = screen.getByTestId("passwordInput");

            fireEvent.change(passwordInput, {
                target: { value: MOCK_PASSWORD },
            });

            expect(passwordInput).toHaveValue(MOCK_PASSWORD);

            const loginButton = screen.getByTestId("loginButton");
            loginButton.click();
            expect(onLogin).not.toHaveBeenCalled();
        });
        it("should disable login when organization is not filled in", () => {
            const MOCK_ORG = "org123";

            render(
                <LoginCard
                    onLogin={onLogin}
                    onSignUp={onSignUp}
                    onForgotPassword={onForgotPassword}
                />
            );
            const orgInput = screen.getByTestId("orgInput");

            fireEvent.change(orgInput, { target: { value: MOCK_ORG } });

            expect(orgInput).toHaveValue(MOCK_ORG);

            const loginButton = screen.getByTestId("loginButton");
            loginButton.click();
            expect(onLogin).not.toHaveBeenCalled();
        });
        it("should enable login when all inputs are filled in", async () => {
            const MOCK_EMAIL = "email@gmail.com";
            const MOCK_PASSWORD = "123password";
            const MOCK_ORG = "org123";

            render(
                <LoginCard
                    onLogin={onLogin}
                    onSignUp={onSignUp}
                    onForgotPassword={onForgotPassword}
                />
            );
            const emailInput = screen.getByTestId("emailInput");
            fireEvent.change(emailInput, { target: { value: MOCK_EMAIL } });

            const passwordInput = screen.getByTestId("passwordInput");
            fireEvent.change(passwordInput, {
                target: { value: MOCK_PASSWORD },
            });

            const orgInput = screen.getByTestId("orgInput");
            fireEvent.change(orgInput, { target: { value: MOCK_ORG } });

            // const loginButton = screen.getByTestId('loginButton');
            // loginButton.click();

            // await waitFor(() => {
            const loginButton = screen.getByTestId("loginButton");
            loginButton.click();
            expect(onLogin).toHaveBeenCalledTimes(1);
            expect(onLogin).toHaveBeenCalledWith(
                MOCK_EMAIL,
                MOCK_PASSWORD,
                MOCK_ORG
            );
            // });
        });
    });
});
