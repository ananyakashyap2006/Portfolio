import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Project from "./Component/project";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
