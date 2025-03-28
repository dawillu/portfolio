import { useState, useEffect } from "react";
import Loader from "./components/ui/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/WelcomeSection/Welcome";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import CreationsSection from "./components/CreationsSection/CreationsSection";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Dawillu from "./pages/Dawillu/Dawillu";
import GalaxyTrucker from "./pages/GalaxyTrucker/GalaxyTrucker";
import Dabot from "./pages/Dabot/Dabot";
import Connect4 from "./pages/Connect4";
import TicTacToe from "./pages/TicTacToe";
import ScrollToTop from "./components/utils/ScrollToTop";
import TuesdaysWithMorrie from "./pages/TuesdaysWithMorrie/TuesdaysWithMorrie";

function RouteChangeListener({
  setIsLoading,
}: {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <ScrollToTop />
      <RouteChangeListener setIsLoading={setIsLoading} />

      {isLoading && <Loader />}

      <div
        id="content"
        style={{
          opacity: isLoading ? 0 : 1,
          visibility: isLoading ? "hidden" : "visible",
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Welcome />
                <ProjectsSection />
                <AboutSection />
                <CreationsSection />
                <Footer />
              </>
            }
          />
          <Route path="/dawillu" element={<Dawillu />} />
          <Route path="/galaxytrucker" element={<GalaxyTrucker />} />
          <Route path="/dabot" element={<Dabot />} />
          <Route path="/connect4" element={<Connect4 />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/tuesdayswithmorrie" element={<TuesdaysWithMorrie />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
