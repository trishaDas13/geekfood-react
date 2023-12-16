import './App.css';
import Navbar from './components/header/Header.js'
import Hero from './components/hero/Hero.js'
import About from './components/about/About.js';
import Footer from './components/footer/Footer.js';


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
