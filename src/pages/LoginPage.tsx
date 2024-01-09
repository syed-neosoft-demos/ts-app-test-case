import "../components/auth/Auth.css";
const LoginPage = () => {
  return (
    <div className="auth">
      <div className="main">
        <h3>Login Page</h3>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter email" />
        </div>
        <div className="input">
          <label htmlFor="email">Password</label>
          <input type="text" placeholder="Enter password " />
        </div>
        <div className="input">
          <input type="submit" />
        </div>
      </div>
      <footer className="footer">
        <p>A Testing App 2024 by SHM</p>
      </footer>
    </div>
  );
};

export default LoginPage;
