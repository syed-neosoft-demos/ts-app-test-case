import { Route, Routes } from "react-router-dom";
import { ThemeProviders } from "./components/mui/mui-them-provider";
import LoginPage from "./pages/LoginPage";
import ThemeDisplay from "./pages/ThemeDisplay";
import UserListPage from "./pages/UserListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="user-list" element={<UserListPage />} />
      <Route
        path="theme-display"
        element={
          <ThemeProviders>
            <ThemeDisplay />
          </ThemeProviders>
        }
      />
    </Routes>
  );
}

export default App;
