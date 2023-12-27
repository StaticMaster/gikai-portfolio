import "./App.css";
import NavMenu from "./NavMenu/NavMenu";
import Homepage from "./Homepage/Homepage";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import About from "./About/About";
import Footer from "./Footer/Footer";
import { DarkModeProvider } from "./DarkModeContext";
import "./global.css";

function App() {

  return (
    <div className="App">
      <DarkModeProvider>
        <div>
          <NavMenu />
          <Homepage />
          <Project />
          <Skills />
          <About />
          <Footer />
        </div>
      </DarkModeProvider>
    </div>
  );
}

export default App;
