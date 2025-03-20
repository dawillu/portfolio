import Loader from "./components/ui/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/WelcomeSection/Welcome";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dabot from "./pages/Dawillu/Dabot";
import Connect4 from "./pages/Connect4";
import TicTacToe from "./pages/TicTacToe";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <Router>
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
                <ProjectsSection />
                <AboutSection />
                <Footer />
              </>
            }
          />
          <Route path="/dabot" element={<Dabot />} />
          <Route path="/connect4" element={<Connect4 />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
