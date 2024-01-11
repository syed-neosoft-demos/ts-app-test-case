import axios from "axios";
import { useState } from "react";
import "../components/auth/Auth.css";
const LoginPage = () => {
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      setLoader(true);
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        password: password ?? "Test@12345",
        email: email ?? "syed-123@yopmail.com",
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="auth">
      <div className="main">
        <h3>Login Page</h3>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            placeholder="Enter password "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="submit"
            value={loader ? "Loading..." : "Submit"}
            onClick={handleLogin}
          />
        </div>
      </div>
      <footer className="footer">
        <p>A Testing App 2024 by SHM</p>
      </footer>
    </div>
  );
};

export default LoginPage;
