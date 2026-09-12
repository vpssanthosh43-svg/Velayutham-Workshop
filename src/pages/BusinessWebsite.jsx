import { useLocation } from "react-router-dom";

function BusinessWebsite() {
  const location = useLocation();

  const businessText = location.state?.businessText || "";
  const businessType = location.state?.businessType || "Shop";

  let businessName = "My Business";

  const nameMatch = businessText.match(
    /(?:shop name is|business name is|business name|name is|called)\s+([^.!?]+)/i
  );

  if (nameMatch) {
    businessName = nameMatch[1].trim();
  }

  let phoneNumber = "Not provided";

  const phoneMatch = businessText.match(/\b\d{10}\b/);

  if (phoneMatch) {
    phoneNumber = phoneMatch[0];
  }

  let businessLocation = "Not provided";

  const locationMatch = businessText.match(
    /(?:located in|location is|located at)\s+([^.!?]+)/i
  );

  if (locationMatch) {
    businessLocation = locationMatch[1].trim();
  }

  return (
    <div className="public-business-page">

      <header className="public-business-header">

        <div>
          <h2>{businessName}</h2>

          <span>
            {businessType}
          </span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

      </header>


      <section id="home" className="public-business-hero">

        <span>{businessType}</span>

        <h1>
          Welcome to {businessName}
        </h1>

        <p>
          Your trusted local business
        </p>

        <a href="#contact">
          Contact Us
        </a>

      </section>


      <section id="about" className="public-business-about">

        <small>ABOUT US</small>

        <h2>
          About {businessName}
        </h2>

        <p>
          We provide quality products and services
          to our customers.
        </p>

      </section>


      <section className="public-business-details">

        <div>
          <span>🏪</span>

          <h3>Business Type</h3>

          <p>{businessType}</p>
        </div>


        <div>
          <span>📍</span>

          <h3>Location</h3>

          <p>{businessLocation}</p>
        </div>


        <div>
          <span>📞</span>

          <h3>Phone</h3>

          <p>{phoneNumber}</p>
        </div>

      </section>


      <section
        id="contact"
        className="public-business-contact"
      >

        <small>GET IN TOUCH</small>

        <h2>
          Contact {businessName}
        </h2>

        <p>
          We would love to hear from you.
        </p>

        <div className="public-contact-info">

          <p>
            📞 {phoneNumber}
          </p>

          <p>
            📍 {businessLocation}
          </p>

        </div>

      </section>


      <footer className="public-business-footer">

        <h3>{businessName}</h3>

        <p>
          {businessType} • {businessLocation}
        </p>

        <p>
          Powered by BizVoice AI
        </p>

      </footer>

    </div>
  );
}

export default BusinessWebsite;
