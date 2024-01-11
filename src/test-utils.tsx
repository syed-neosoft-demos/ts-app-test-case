import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProviders } from "./components/mui/mui-them-provider";

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: ThemeProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
