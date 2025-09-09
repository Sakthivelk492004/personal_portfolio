import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Email from "./components/EmailForm";
// import ParticleCursor from "./components/ParticleCursor";
import VantaBackground from "./components/VantaBackground"; 
import SplashCursor from './SplashCursor'


const App = () => {
  return (
    <>
    <SplashCursor />
      <VantaBackground />
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="container relative z-20 mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          {/* <Email /> */}
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
