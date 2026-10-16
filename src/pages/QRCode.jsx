import { QRCodeSVG } from "qrcode.react";
import "./QRCode.css";

const SITE_URL = "https://vpssanthosh43-svg.github.io/Velayutham-Workshop";

function QRCodePage() {
  return (
    <div className="qrcode-page">
      <header className="qrcode-header">
        <h1>BizVoice AI</h1>
        <p>Scan to visit our website</p>
      </header>

      <main className="qrcode-main">
        <div className="qrcode-card">
          <QRCodeSVG value={SITE_URL} size={260} level="H" />
          <div className="qrcode-url">{SITE_URL}</div>
        </div>
      </main>
    </div>
  );
}

export default QRCodePage;
