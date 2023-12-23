import './App.css';
import NavMenu from './NavMenu/NavMenu';
import Homepage from './Homepage/Homepage';
import Project from './Project/Project';
// import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Homepage/>
      <Project/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
