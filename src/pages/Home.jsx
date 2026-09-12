import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="home-navbar">

        <div className="home-logo">
          🎤 BizVoice<span>AI</span>
        </div>

        <div className="home-nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>

          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="signup-btn">
            Get Started
          </Link>
        </div>

      </nav>

      {/* HERO */}
      <section className="home-hero">

        <div className="hero-text">

          <div className="hero-badge">
            ✨ AI-Powered Business Website Builder
          </div>

          <h1>
            Turn Your Voice Into
            <span> Your Business Website</span>
          </h1>

          <p>
            No coding. No expensive developers.
            Just describe your business and let BizVoice AI
            create your website automatically.
          </p>

          <div className="hero-buttons">

            <Link to="/create" className="start-btn">
              🚀 Create My Website
            </Link>

            <a href="#how-it-works" className="learn-btn">
              ▶ How It Works
            </a>

          </div>

        </div>

        {/* HERO CARD */}
        <div className="hero-card">

          <div className="card-top">
            <span>🎤</span>
            <span>BizVoice AI</span>
          </div>

          <div className="voice-circle">
            🎙️
          </div>

          <h3>
            Tell us about your business
          </h3>

          <p>
            "I run a bakery called Murugan Bakery
            in Coimbatore..."
          </p>

          <div className="ai-status">
            ✨ AI is creating your website...
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section id="features" className="features-section">

        <div className="section-heading">

          <span>POWERFUL FEATURES</span>

          <h2>
            Everything You Need
            <br />
            To Grow Your Business
          </h2>

          <p>
            BizVoice AI makes digital presence simple
            for local businesses.
          </p>

        </div>

        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">🎤</div>
            <h3>Voice to Website</h3>
            <p>
              Describe your business naturally using
              your voice or text.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Generated</h3>
            <p>
              AI automatically creates professional
              business content.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>AI Posters</h3>
            <p>
              Create attractive promotional posters
              for your business.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Friendly</h3>
            <p>
              Your website looks great on phones,
              tablets and computers.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Local Business</h3>
            <p>
              Add your location, phone number and
              business information easily.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Share Anywhere</h3>
            <p>
              Share your website using a simple link
              or QR code.
            </p>
          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="how-section">

        <div className="section-heading">

          <span>SIMPLE PROCESS</span>

          <h2>
            Create Your Website
            <br />
            In 3 Easy Steps
          </h2>

        </div>

        <div className="steps-grid">

          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon">🎤</div>

            <h3>Tell Us</h3>

            <p>
              Tell us about your business using
              simple words or your voice.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon">🤖</div>

            <h3>AI Creates</h3>

            <p>
              BizVoice AI turns your information
              into a professional website.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon">🚀</div>

            <h3>Publish</h3>

            <p>
              Preview your website and share it
              with your customers.
            </p>
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="about-home">

        <div className="about-content">

          <span>ABOUT BIZVOICE AI</span>

          <h2>
            Helping Local Businesses
            <br />
            Go Digital
          </h2>

          <p>
            Many small businesses struggle to create
            an online presence because professional
            websites can be expensive and difficult
            to build.
          </p>

          <p>
            BizVoice AI makes the process simple.
            Business owners can describe their
            business and instantly create a website
            without writing code.
          </p>

          <Link to="/create" className="about-btn">
            Create Your Website →
          </Link>

        </div>

        <div className="about-visual">

          <div className="about-icon">
            🏪
          </div>

          <h3>
            From Local
            <br />
            To Digital
          </h3>

          <p>
            Your business deserves
            an online presence.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="home-cta">

        <h2>
          Ready To Build Your
          <br />
          Business Website?
        </h2>

        <p>
          Start creating your website today.
          No coding required.
        </p>

        <Link to="/create" className="cta-btn">
          🎤 Start With Your Voice
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="home-footer">

        <div className="footer-logo">
          🎤 BizVoice<span>AI</span>
        </div>

        <p>
          AI-powered websites for local businesses.
        </p>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        <p className="copyright">
          © 2026 BizVoice AI. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;
