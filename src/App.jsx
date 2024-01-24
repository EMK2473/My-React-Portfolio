import './tailwind.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Working from "./components/Working"

function App() {
  return (
    <main className="text-green-500 bg-black body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Working />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default App
