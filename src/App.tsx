import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UserListPage from "./pages/UserListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="user-list" element={<UserListPage />} />
    </Routes>
  );
}

export default App;
