import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const projects = [
  {
    title: "Letter archive website",
    image: "jpg.s.jpeg"
  },
  {
    title: "Website Portofolio",
    desc: "Personal portfolio using React JS",
    image: "jpg.vt.jpeg"
  },
  {
    title: "Chasier Application",
    desc: "Simple cashier program using java",
    image: "jpg.jv.jpeg"
  }
];

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio projects={projects} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
       <p>Created with by Silhi Parintak</p>
      </footer>
    </Router>
  );
}

export default App;