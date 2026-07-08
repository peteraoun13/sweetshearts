import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "../pages/Home/Home.jsx";
import { About } from "../pages/About/About.jsx";
import { Cakes } from "../pages/Cakes/Cakes.jsx";
import { Gallery } from "../pages/Gallery/Gallery.jsx";
import { Contact } from "../pages/Contact/Contact.jsx";
import { NotFound } from "../pages/NotFound/NotFound.jsx";
import { PageTransition } from "../components/common/PageTransition/PageTransition.jsx";

export function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/cakes" element={<PageTransition><Cakes /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}
