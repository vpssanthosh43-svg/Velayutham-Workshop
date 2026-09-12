import { useLocation, useParams } from "react-router-dom";
import "./Business.css";

function Business() {
  const location = useLocation();
  const { id } = useParams();

  const savedBusiness = JSON.parse(
    localStorage.getItem("bizvoiceBusiness") || "null"
  );

  const business = location.state || savedBusiness || {};

  const businessName = business.businessName || "My Business";
  const businessType = business.businessType || "Shop";
  const phoneNumber = business.phoneNumber || "Not provided";
  const businessLocation =
    business.businessLocation || "Not provided";
  const businessDescription =
    business.businessDescription ||
    "Welcome to our business. We provide quality products and services to our customers.";

  return (
    <div className="business-page">

      <header className="business-header">

        <div>
          <h2>{businessName}</h2>
          <span>{businessType}</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

      </header>

      <section id="home" className="business-hero">

        <div className="business-hero-content">

          <span className="business-badge">
            {businessType}
          </span>

          <h1>
            Welcome to {businessName} 👋
          </h1>

          <p>
            Your trusted local business
          </p>

          <a href="#contact">
            Contact Us
          </a>

        </div>

      </section>

      <section id="about" className="business-about">

        <span>ABOUT US</span>

        <h2>
          About {businessName}
        </h2>

        <p>
          {businessDescription}
        </p>

      </section>

      <section className="business-details">

        <div className="business-card">
          <div>🏪</div>
          <h3>Business Type</h3>
          <p>{businessType}</p>
        </div>

        <div className="business-card">
          <div>📍</div>
          <h3>Location</h3>
          <p>{businessLocation}</p>
        </div>

        <div className="business-card">
          <div>📞</div>
          <h3>Phone</h3>
          <p>{phoneNumber}</p>
        </div>

      </section>

      <section id="contact" className="business-contact">

        <span>GET IN TOUCH</span>

        <h2>
          Contact {businessName}
        </h2>

        <p>
          We would love to hear from you.
        </p>

        <div className="business-contact-info">

          <p>📞 {phoneNumber}</p>

          <p>📍 {businessLocation}</p>

        </div>

      </section>

      <footer className="business-footer">

        <h3>{businessName}</h3>

        <p>
          {businessType} • {businessLocation}
        </p>

        <p>
          Website ID: {id}
        </p>

        <p>
          © 2026 {businessName}. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Business;