import Loader from "./components/ui/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/WelcomeSection/Welcome";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import CreationsSection from "./components/CreationsSection/CreationsSection";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dawillu from "./pages/Dawillu/Dawillu";
import GalaxyTrucker from "./pages/GalaxyTrucker/GalaxyTrucker";
import Dabot from "./pages/Dabot/Dabot";
import Connect4 from "./pages/Connect4";
import TicTacToe from "./pages/TicTacToe";
import ScrollToTop from "./components/utils/ScrollToTop";
import TuesdaysWithMorrie from "./pages/TuesdaysWithMorrie/TuesdaysWithMorrie";
import About from "./pages/About/About";

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Loader />

      <div id="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Welcome />
                <div style={{backgroundColor: "#1e1f20ff"}}>
                  <ProjectsSection />
                  <CreationsSection />
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="/dawillu" element={<Dawillu />} />
          <Route path="/galaxytrucker" element={<GalaxyTrucker />} />
          <Route path="/dabot" element={<Dabot />} />
          <Route path="/connect4" element={<Connect4 />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/tuesdayswithmorrie" element={<TuesdaysWithMorrie />} />
          <Route path="/about" element={<About />} />
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
