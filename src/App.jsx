import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateWebsite from "./pages/CreateWebsite";
import Preview from "./pages/Preview";
import PosterGenerator from "./pages/PosterGenerator";
import Business from "./pages/Business";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateWebsite />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/poster" element={<PosterGenerator />} />
        <Route path="/business/:id" element={<Business />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;