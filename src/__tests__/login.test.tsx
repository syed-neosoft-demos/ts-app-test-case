import { fireEvent, render, screen } from "@testing-library/react";
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
});
