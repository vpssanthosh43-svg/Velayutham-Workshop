import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import "./PosterGenerator.css";

function PosterGenerator() {
  const location = useLocation();
  const navigate = useNavigate();

  const businessText = location.state?.businessText || "";
  const businessType = location.state?.businessType || "Shop";

  // =========================
  // BUSINESS NAME
  // =========================

  let defaultBusinessName = "My Business";

  const nameMatch = businessText.match(
    /(?:shop name is|business name is|business name|name is|called)\s+([^.!?]+)/i
  );

  if (nameMatch) {
    defaultBusinessName = nameMatch[1].trim();
  }

  // =========================
  // PHONE
  // =========================

  let phoneNumber = "";

  const phoneMatch = businessText.match(/\b\d{10}\b/);

  if (phoneMatch) {
    phoneNumber = phoneMatch[0];
  }

  // =========================
  // LOCATION
  // =========================

  let businessLocation = "";

  const locationMatch = businessText.match(
    /(?:located in|location is|located at)\s+([^.!?]+)/i
  );

  if (locationMatch) {
    businessLocation = locationMatch[1].trim();
  }

  // =========================
  // STATES
  // =========================

  const [businessName, setBusinessName] =
    useState(defaultBusinessName);

  const [tagline, setTagline] = useState(
    "Quality you can trust"
  );

  const [posterColor, setPosterColor] =
    useState("purple");

  // =========================
  // DOWNLOAD POSTER
  // =========================

  const downloadPoster = async () => {
    const poster = document.getElementById("poster-preview");

    if (!poster) {
      alert("Poster preview not found.");
      return;
    }

    try {
      const canvas = await html2canvas(poster, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const link = document.createElement("a");

      link.download = `${businessName}-poster.png`;

      link.href = canvas.toDataURL("image/png");

      link.click();
    } catch (error) {
      console.error(error);
      alert("Unable to download poster.");
    }
  };

  return (
    <div className="poster-page">

      {/* =========================
          TOP NAVBAR
      ========================= */}

      <nav className="poster-navbar">

        <button
          type="button"
          className="poster-back-button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <div className="poster-brand">
          🎤 BizVoice<span>AI</span>
        </div>

        <div className="poster-nav-right">
          Poster Generator
        </div>

      </nav>


      {/* =========================
          MAIN
      ========================= */}

      <main className="poster-main">

        {/* HEADING */}

        <section className="poster-heading">

          <div className="poster-badge">
            🎨 AI Poster Generator
          </div>

          <h1>
            Create Your Business Poster
          </h1>

          <p>
            Turn your business information into a
            professional promotional poster.
          </p>

        </section>


        {/* =========================
            CONTENT GRID
        ========================= */}

        <div className="poster-container">


          {/* =========================
              LEFT SETTINGS
          ========================= */}

          <section className="poster-settings">

            <h2>
              Customize Your Poster
            </h2>

            <p className="settings-description">
              Change the information and design
              before downloading your poster.
            </p>


            {/* BUSINESS NAME */}

            <div className="poster-form-group">

              <label>
                Business Name
              </label>

              <input
                type="text"
                value={businessName}
                onChange={(event) =>
                  setBusinessName(event.target.value)
                }
                placeholder="Enter business name"
              />

            </div>


            {/* TAGLINE */}

            <div className="poster-form-group">

              <label>
                Tagline
              </label>

              <input
                type="text"
                value={tagline}
                onChange={(event) =>
                  setTagline(event.target.value)
                }
                placeholder="Enter tagline"
              />

            </div>


            {/* BUSINESS TYPE */}

            <div className="poster-info-box">

              <span>🏪 Business Type</span>

              <strong>
                {businessType}
              </strong>

            </div>


            {/* PHONE */}

            {phoneNumber && (
              <div className="poster-info-box">

                <span>📞 Phone</span>

                <strong>
                  {phoneNumber}
                </strong>

              </div>
            )}


            {/* LOCATION */}

            {businessLocation && (
              <div className="poster-info-box">

                <span>📍 Location</span>

                <strong>
                  {businessLocation}
                </strong>

              </div>
            )}


            {/* COLOR */}

            <div className="poster-form-group">

              <label>
                Poster Style
              </label>

              <div className="color-options">

                <button
                  type="button"
                  className={`color-option purple ${
                    posterColor === "purple"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setPosterColor("purple")
                  }
                >
                  Purple
                </button>

                <button
                  type="button"
                  className={`color-option blue ${
                    posterColor === "blue"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setPosterColor("blue")
                  }
                >
                  Blue
                </button>

                <button
                  type="button"
                  className={`color-option dark ${
                    posterColor === "dark"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setPosterColor("dark")
                  }
                >
                  Dark
                </button>

              </div>

            </div>


            {/* DOWNLOAD */}

            <button
              type="button"
              className="download-poster-button"
              onClick={downloadPoster}
            >
              ⬇️ Download Poster
            </button>

          </section>


          {/* =========================
              POSTER PREVIEW
          ========================= */}

          <section className="poster-preview-area">

            <h2>
              Poster Preview
            </h2>

            <div
              id="poster-preview"
              className={`poster-preview ${posterColor}`}
            >

              <div className="poster-decoration">
                ✦
              </div>

              <div className="poster-content">

                <div className="poster-small-title">
                  WELCOME TO
                </div>

                <h1>
                  {businessName}
                </h1>

                <div className="poster-type">
                  {businessType}
                </div>

                <div className="poster-line"></div>

                <p className="poster-tagline">
                  {tagline}
                </p>

                <div className="poster-details">

                  {phoneNumber && (
                    <div>
                      📞 {phoneNumber}
                    </div>
                  )}

                  {businessLocation && (
                    <div>
                      📍 {businessLocation}
                    </div>
                  )}

                </div>

                <div className="poster-footer">
                  Powered by BizVoiceAI
                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default PosterGenerator;