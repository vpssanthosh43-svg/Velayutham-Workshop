import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CreateWebsite.css";

function CreateWebsite() {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [businessType, setBusinessType] = useState("Shop");
  const [listening, setListening] = useState(false);

  // =========================
  // VOICE INPUT
  // =========================

  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Voice recognition is not supported in this browser."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      const speechText =
        event.results[0][0].transcript;

      setText((previous) =>
        previous
          ? previous + " " + speechText
          : speechText
      );
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.start();
  };

  // =========================
  // CLEAR
  // =========================

  const clearText = () => {
    setText("");
  };

  // =========================
  // GENERATE WEBSITE
  // =========================

  const generateWebsite = () => {
    if (!text.trim()) {
      alert(
        "Please enter or speak your business information."
      );
      return;
    }

    navigate("/preview", {
      state: {
        businessText: text,
        businessType: businessType,
      },
    });
  };

  return (
    <div className="create-page">

      {/* =========================
          TOP NAVBAR
      ========================= */}
      <nav className="create-navbar">

  <button
    type="button"
    className="back-button"
    onClick={() => navigate(-1)}
  >
    ← Back
  </button>

  <Link
    to="/"
    className="create-brand"
  >
    🎤 BizVoice<span>AI</span>
  </Link>

  <Link
    to="/"
    className="create-home-link"
  >
    Home
  </Link>

</nav>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="create-main">

        {/* PAGE HEADING */}

        <section className="create-heading">

          <div className="create-badge">
            ✨ AI Website Builder
          </div>

          <h1>
            Create Your Website
          </h1>

          <p>
            Turn your business idea into a professional
            website using your voice or simple text.
          </p>

        </section>


        {/* =========================
            CREATION CARD
        ========================= */}

        <section className="create-card">

          {/* VOICE */}

          <div className="voice-section">

            <div
              className={`voice-circle ${
                listening
                  ? "voice-listening"
                  : ""
              }`}
            >
              {listening ? "🎙️" : "🎤"}
            </div>

            <h2>
              Tell Us About Your Business
            </h2>

            <p>
              Speak naturally and let BizVoice AI
              understand your business.
            </p>

            <button
              type="button"
              className={`voice-button ${
                listening
                  ? "voice-active"
                  : ""
              }`}
              onClick={startVoice}
            >
              {listening
                ? "🎙️ Listening..."
                : "🎤 Start Speaking"}
            </button>

          </div>


          {/* DIVIDER */}

          <div className="create-divider">
            <span>
              OR TYPE YOUR INFORMATION
            </span>
          </div>


          {/* BUSINESS INFORMATION */}

          <div className="form-group">

            <label htmlFor="business-info">
              Business Information
            </label>

            <textarea
              id="business-info"
              value={text}
              onChange={(event) =>
                setText(event.target.value)
              }
              placeholder="Example: My shop name is Murugan Bakery. We sell fresh cakes and biscuits. Our phone number is 9876543210. We are located in Coimbatore."
            />

            <div className="character-count">
              {text.length} characters
            </div>

          </div>


          {/* BUSINESS TYPE */}

          <div className="form-group">

            <label htmlFor="business-type">
              Business Type
            </label>

            <select
              id="business-type"
              value={businessType}
              onChange={(event) =>
                setBusinessType(
                  event.target.value
                )
              }
            >

              <option value="Shop">
                🛍️ Shop
              </option>

              <option value="Bakery">
                🍞 Bakery
              </option>

              <option value="Restaurant">
                🍽️ Restaurant
              </option>

              <option value="Salon">
                💇 Salon
              </option>

              <option value="Service">
                🛠️ Service
              </option>

              <option value="Other">
                📦 Other
              </option>

            </select>

          </div>


          {/* ACTION BUTTONS */}

          <div className="create-actions">

            <button
              type="button"
              className="clear-button"
              onClick={clearText}
            >
              🗑️ Clear
            </button>

            <button
              type="button"
              className="generate-button"
              onClick={generateWebsite}
            >
              🚀 Generate Website
            </button>

          </div>


          {/* EXAMPLE */}

          <div className="example-box">

            <div className="example-title">
              💡 Example
            </div>

            <p>
              My shop name is Murugan Bakery.
              We sell fresh cakes and biscuits.
              Our phone number is 9876543210.
              We are located in Coimbatore.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CreateWebsite;
