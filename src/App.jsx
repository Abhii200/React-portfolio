import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Project";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-950">
        {/* Background gradient */}
        <div className="fixed top-0 left-0 h-full w-full z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        
        {/* Navbar with higher z-index */}
        <Navbar />
        
        {/* Main content container with appropriate spacing and z-index */}
        <main className="relative z-[1] min-h-screen text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
          <div className="container mx-auto px-8 pt-24"> {/* Reduced padding-top */}
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;