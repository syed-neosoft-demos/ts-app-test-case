import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserList from "../pages/UserListPage";

describe("User Listing", () => {
  test("should page render", () => {
    render(<UserList />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });
  test("should list render", async () => {
    render(<UserList />);
    await act(async () => {
      screen.debug();
      const headingElement = await screen.findAllByTestId("user-list");
      screen.debug();
      console.log("headingElement?.length", headingElement?.length);
      expect(headingElement?.length).toBe(10);
    });
  });
});
