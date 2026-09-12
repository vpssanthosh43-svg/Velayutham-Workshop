import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>Create Account 🚀</h1>

        <p>Start building your business website</p>

        <form>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your name"
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
          />

          <label>Business Name</label>

          <input
            type="text"
            placeholder="Enter your business name"
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

        <Link to="/">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Register;