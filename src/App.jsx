import './App.css';
import About from './component/About';
import Contact from './component/contact';
import Footer from './component/footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Projects from './component/projects';

function App(){
  return(
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;