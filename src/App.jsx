import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/register";
import CreateWebsite from "./pages/createwebsite";
import Preview from "./pages/preview";
import PosterGenerator from "./pages/PosterGenerator";
import Business from "./pages/Business";
import QRCodePage from "./pages/QRCode";

function App() {
  return (
    <BrowserRouter basename="/Velayutham-Workshop">
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
    </BrowserRouter>
  );
}

export default App;