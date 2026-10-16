import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import App from "./App";
import "./index.css";

function AppWithRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      sessionStorage.removeItem("redirect");
      navigate(redirect, { replace: true });
    }
  }, [navigate]);
  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWithRedirect />
  </React.StrictMode>
);