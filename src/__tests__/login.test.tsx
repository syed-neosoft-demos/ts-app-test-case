import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Login from "../pages/LoginPage";

describe("Login", () => {
  test("should render", () => {
    render(<Login />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  test("input field are there", () => {
    render(<Login />);
    const emailElem = screen.getByPlaceholderText(/Enter email/i);
    expect(emailElem).toBeInTheDocument();

    const passElem = screen.getByPlaceholderText(/Enter password/i);
    expect(passElem).toBeInTheDocument();
  });

  test("change inputs", () => {
    render(<Login />);

    const emailElem: HTMLInputElement = screen.getByPlaceholderText(/Enter email/i);
    fireEvent.change(emailElem, { target: { value: "syed-hasnain@yopmail.com" } });
    expect(emailElem.value).toBe("syed-hasnain@yopmail.com");

    const passElem: HTMLInputElement = screen.getByPlaceholderText(/Enter password/i);
    fireEvent.change(passElem, { target: { value: "Test@1122" } });
    expect(passElem.value).toBe("Test@1122");
  });
  test("button working correctly", async () => {
    render(<Login />);
    const buttonElement: HTMLInputElement = screen.getByRole("button", { name: "Submit" });

    expect(buttonElement).toHaveValue("Submit");
    await act(() => {
      userEvent.click(buttonElement);
    });

    expect(buttonElement).toHaveValue("Loading...");
  });
  test("mock login function", async () => {
    render(<Login />);
    const handleLogin = jest.fn();
    const buttonElement: HTMLInputElement = screen.getByRole("button", { name: "Submit" });

    expect(buttonElement).toHaveValue("Submit");
    await act(async () => {
      await userEvent.click(buttonElement);
    });

    // expect(buttonElement).toHaveBeenCalled();
  });
});
