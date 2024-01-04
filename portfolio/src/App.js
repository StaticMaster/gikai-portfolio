import "./App.css";
import NavMenu from "./NavMenu/NavMenu";
import Homepage from "./Homepage/Homepage";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import About from "./About/About";
import Footer from "./Footer/Footer";
import { DarkModeProvider } from "./DarkModeContext";
import "./global.css";
import Background from "./Background";

function App() {
  return (
    <div className="App">
      {" "}
      <Background />
      <DarkModeProvider>
        <div>
          {" "}
          <NavMenu />
          <Homepage />
          <About />
          <Project />
          <Skills />
          <Footer />
        </div>
      </DarkModeProvider>
    </div>
  );
}

export default App;
