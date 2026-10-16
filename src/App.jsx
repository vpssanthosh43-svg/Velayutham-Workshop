import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/register";
import CreateWebsite from "./pages/createwebsite";
import Preview from "./pages/preview";
import PosterGenerator from "./pages/PosterGenerator";
import Business from "./pages/Business";
import QRCodePage from "./pages/QRCode";

function AppRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.redirect && sessionStorage.redirect !== location.pathname) {
      const redirect = sessionStorage.redirect;
      sessionStorage.removeItem("redirect");
      navigate(redirect, { replace: true });
    }
  }, [navigate, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<CreateWebsite />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/poster" element={<PosterGenerator />} />
      <Route path="/business/:id" element={<Business />} />
      <Route path="/qr" element={<QRCodePage />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Velayutham-Workshop">
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
