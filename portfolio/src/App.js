import "./App.css";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/homepage/HomePage";
import AboutMe from "./components/aboutme/AbouteMe";
import MyProjects from "./components/myprojects/MyProjects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AboutMe />
      <MyProjects />
      <Contact />
      <Footer />
      <motion.div className="progress-bar" style={{ scaleX }} />
    </div>
  );
}

export default App;
