import './App.css';
import NavMenu from './NavMenu/NavMenu';
import Homepage from './Homepage/Homepage';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import About from './About/About';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Homepage/>
      <Project/>
      <Skills/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
