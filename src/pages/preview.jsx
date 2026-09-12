import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Preview.css";

function Preview() {
  const location = useLocation();

  const businessText = location.state?.businessText || "";
  const businessType = location.state?.businessType || "Shop";

  const [showPublishPanel, setShowPublishPanel] = useState(false);
  const [copied, setCopied] = useState(false);

  // =========================
  // BUSINESS NAME
  // =========================

  let businessName = "My Business";

  const nameMatch = businessText.match(
    /(?:shop name is|business name is|business name|name is|called)\s+([^.!?]+)/i
  );

  if (nameMatch) {
    businessName = nameMatch[1].trim();
  }

  // =========================
  // PHONE
  // =========================

  let phoneNumber = "Not provided";

  const phoneMatch = businessText.match(/\b\d{10}\b/);

  if (phoneMatch) {
    phoneNumber = phoneMatch[0];
  }

  // =========================
  // LOCATION
  // =========================

  let businessLocation = "Not provided";

  const locationMatch = businessText.match(
    /(?:located in|location is|located at)\s+([^.!?]+)/i
  );

  if (locationMatch) {
    businessLocation = locationMatch[1].trim();
  }

  // =========================
  // WEBSITE LINK
  // =========================

  const websiteLink = window.location.origin;

  // =========================
  // PUBLISH
  // =========================

  const handlePublish = () => {
    const businessData = {
      businessText,
      businessType,
      businessName,
      phoneNumber,
      businessLocation,
    };

    localStorage.setItem(
      "bizvoiceBusiness",
      JSON.stringify(businessData)
    );

    // Stay on Preview page
    setShowPublishPanel(true);
  };

  // =========================
  // COPY LINK
  // =========================

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(websiteLink);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      alert("Unable to copy the link.");
    }
  };

  // =========================
  // SHARE
  // =========================

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: businessName,
          text: `Check out ${businessName}`,
          url: websiteLink,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      handleCopyLink();
    }
  };

  // =========================
  // WHATSAPP
  // =========================

  const handleWhatsApp = () => {
    const message = `Check out ${businessName}'s website: ${websiteLink}`;

    const whatsappUrl =
      `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="preview-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="preview-navbar">

        <Link
          to="/create"
          className="edit-button"
        >
          ← Edit
        </Link>

        <div className="preview-logo">
          BizVoice<span>AI</span>
        </div>

        <div className="preview-actions">

          <Link
            to="/poster"
            state={{
              businessText,
              businessType,
            }}
            className="poster-button"
          >
            🎨 Create AI Poster
          </Link>

          <button
            type="button"
            className="publish-button"
            onClick={handlePublish}
          >
            🚀 Publish
          </button>

        </div>

      </nav>


      {/* =========================
          GENERATED WEBSITE
      ========================= */}

      <div className="generated-website">

        {/* HEADER */}

        <header className="website-header">

          <div>
            <h2>{businessName}</h2>

            <span className="business-type">
              {businessType}
            </span>
          </div>

          <nav className="website-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

        </header>


        {/* HERO */}

        <section
          id="home"
          className="hero-section"
        >

          <div className="hero-content">

            <span className="hero-badge">
              {businessType}
            </span>

            <h1>
              Welcome to {businessName} 👋
            </h1>

            <p>
              Your trusted local business
            </p>

            <a
              href="#contact"
              className="hero-button"
            >
              Contact Us
            </a>

          </div>

        </section>


        {/* ABOUT */}

        <section
          id="about"
          className="about-section"
        >

          <span className="section-label">
            ABOUT US
          </span>

          <h2>
            About {businessName}
          </h2>

          <p>
            Welcome to {businessName}. We provide
            quality products and services to our
            customers.
          </p>

        </section>


        {/* DETAILS */}

        <section className="details-section">

          <div className="detail-card">

            <div className="detail-icon">
              🏪
            </div>

            <h3>
              Business Type
            </h3>

            <p>
              {businessType}
            </p>

          </div>


          <div className="detail-card">

            <div className="detail-icon">
              📍
            </div>

            <h3>
              Location
            </h3>

            <p>
              {businessLocation}
            </p>

          </div>


          <div className="detail-card">

            <div className="detail-icon">
              📞
            </div>

            <h3>
              Phone
            </h3>

            <p>
              {phoneNumber}
            </p>

          </div>

        </section>


        {/* CONTACT */}

        <section
          id="contact"
          className="contact-section"
        >

          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>
            Contact {businessName}
          </h2>

          <p>
            We would love to hear from you.
          </p>

          <div className="contact-details">

            <div>
              📞 <strong>{phoneNumber}</strong>
            </div>

            <div>
              📍 <strong>{businessLocation}</strong>
            </div>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="website-footer">

          <h3>
            {businessName}
          </h3>

          <p>
            {businessType} • {businessLocation}
          </p>

          <p>
            © 2026 {businessName}. All rights reserved.
          </p>

        </footer>

      </div>


      {/* =========================
          SHARE POPUP
      ========================= */}

      {showPublishPanel && (

        <div
          className="publish-overlay"
          onClick={() =>
            setShowPublishPanel(false)
          }
        >

          <div
            className="publish-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              type="button"
              className="publish-close"
              onClick={() =>
                setShowPublishPanel(false)
              }
            >
              ✕
            </button>


            {/* ICON */}

            <div className="publish-icon">
              🚀
            </div>


            <h2>
              Website Ready!
            </h2>

            <p>
              Your website for{" "}
              <strong>{businessName}</strong>{" "}
              is ready to share.
            </p>


            {/* WEBSITE LINK */}

            <div className="share-link-box">

              <span>
                🔗
              </span>

              <input
                type="text"
                value={websiteLink}
                readOnly
              />

              <button
                type="button"
                onClick={handleCopyLink}
              >
                {copied ? "✓ Copied" : "📋 Copy"}
              </button>

            </div>


            {/* SHARE OPTIONS */}

            <div className="share-options">

              {/* WHATSAPP */}

              <button
                type="button"
                className="share-option whatsapp"
                onClick={handleWhatsApp}
              >
                <span>
                  🟢
                </span>

                <strong>
                  WhatsApp
                </strong>
              </button>


              {/* SHARE */}

              <button
                type="button"
                className="share-option"
                onClick={handleShare}
              >
                <span>
                  📤
                </span>

                <strong>
                  Share
                </strong>
              </button>

            </div>


            {/* INFO */}

            <div className="publish-info">
              💡 Copy the link or share it directly
              with your customers.
            </div>


            {/* DONE */}

            <button
              type="button"
              className="done-button"
              onClick={() =>
                setShowPublishPanel(false)
              }
            >
              Done
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Preview;