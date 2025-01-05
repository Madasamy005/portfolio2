import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js'

function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
  <Projects />
  <Resume/>
  <Contact/>
  <Footer/>
   
    </>
  );
}

export default App;
