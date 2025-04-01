
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LineUp from "./pages/LineUp";
import Tickets from "./pages/Tickets";
import Venues from "./pages/Venues";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";
import PixelCursor from "./components/PixelCursor";
import { Toaster } from "./components/ui/sonner";

import "./App.css";

function App() {
  return (
    <Router>
      <PixelCursor />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lineup" element={<LineUp />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
