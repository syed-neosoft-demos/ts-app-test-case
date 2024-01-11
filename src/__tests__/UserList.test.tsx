import { act, render, screen } from "@testing-library/react";
import UserList from "../pages/UserListPage";

describe("User Listing", () => {
  test("should page render", async () => {
    render(<UserList />);
    await act(async () => {
      const headingElement = screen.getByRole("heading");
      expect(headingElement).toBeInTheDocument();
    });
  });
  test("should list render", async () => {
    render(<UserList />);
    const headingElement = await screen.findAllByTestId("user-list");
    expect(headingElement?.length).toBe(10);
  });
});
