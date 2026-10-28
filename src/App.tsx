import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Loader from "./components/ui/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/HomePage/WelcomeSection/Welcome";
import ProjectsSection from "./components/HomePage/ProjectsSection/ProjectsSection";
import CreationsSection from "./components/HomePage/CreationsSection/CreationsSection";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";

const Dawillu = lazy(() => import("./pages/Dawillu/Dawillu"));
const LifeAtPark = lazy(() => import("./pages/LifeAtPark/LifeAtPark"));
const AirRoutes = lazy(() => import("./pages/AirRoutes/AirRoutes"));
const GalaxyTrucker = lazy(() => import("./pages/GalaxyTrucker/GalaxyTrucker"));
const Dabot = lazy(() => import("./pages/Dabot/Dabot"));
const Connect4 = lazy(() => import("./pages/Connect4"));
const TicTacToe = lazy(() => import("./pages/TicTacToe"));
const TuesdaysWithMorrie = lazy(
  () => import("./pages/TuesdaysWithMorrie/TuesdaysWithMorrie"),
);
const About = lazy(() => import("./pages/About/About"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const LegalNotice = lazy(() => import("./pages/LegalNotice/LegalNotice"));

function HomePage() {
  return (
    <>
      <Navbar />
      <Welcome />

      <div style={{ backgroundColor: "#1e1f20ff" }}>
        <ProjectsSection />
        <CreationsSection />
        <Footer />
      </div>
    </>
  );
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Loader />

      <div id="content">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dawillu" element={<Dawillu />} />
            <Route path="/lifeatpark" element={<LifeAtPark />} />
            <Route path="/airroutes" element={<AirRoutes />} />
            <Route path="/galaxytrucker" element={<GalaxyTrucker />} />
            <Route path="/dabot" element={<Dabot />} />
            <Route path="/connect4" element={<Connect4 />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route
              path="/tuesdayswithmorrie"
              element={<TuesdaysWithMorrie />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/legalnotice" element={<LegalNotice />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;