import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter your email and password.");
      return;
    }

    // Continue to the business creation page
    navigate("/create");
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <Link to="/" className="login-logo">
          🎤 BizVoice<span>AI</span>
        </Link>

        <div className="login-welcome">

          <div className="login-badge">
            ✨ Welcome Back
          </div>

          <h1>
            Build Your Business
            <span> Online.</span>
          </h1>

          <p>
            Log in to continue creating your professional
            business website with BizVoice AI.
          </p>

          <div className="login-features">

            <div>
              🎤
              <span>
                <strong>Voice Powered</strong>
                <small>Describe your business naturally.</small>
              </span>
            </div>

            <div>
              🤖
              <span>
                <strong>AI Generated</strong>
                <small>Let AI create your website.</small>
              </span>
            </div>

            <div>
              🚀
              <span>
                <strong>Easy to Publish</strong>
                <small>Share your business with customers.</small>
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="login-card">

          <div className="mobile-login-logo">
            🎤 BizVoice<span>AI</span>
          </div>

          <div className="login-heading">

            <h2>Welcome Back 👋</h2>

            <p>
              Login to your BizVoice AI account
            </p>

          </div>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="you@example.com"
            />

            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="Enter your password"
            />

            <div className="login-options">

              <label className="remember-option">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-button"
                onClick={() =>
                  alert("Password reset will be added soon.")
                }
              >
                Forgot password?
              </button>

            </div>

            <button
              type="submit"
              className="login-submit"
            >
              🔐 Login
            </button>

          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <button
            type="button"
            className="google-login"
            onClick={() =>
              alert("Google login will be connected later.")
            }
          >
            <span>G</span>
            Continue with Google
          </button>

          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/register">
              Create an account
            </Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;
