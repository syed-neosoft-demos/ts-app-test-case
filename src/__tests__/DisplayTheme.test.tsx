import { render, screen } from "@testing-library/react";
import { ThemeProviders } from "../components/mui/mui-them-provider";
import ThemeDisplay from "../pages/ThemeDisplay";
describe("MuiTheme", () => {
  test("render correctly", () => {
    render(<ThemeDisplay />, { wrapper: ThemeProviders });
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
