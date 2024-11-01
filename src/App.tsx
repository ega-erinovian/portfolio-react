import "./App.css";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
