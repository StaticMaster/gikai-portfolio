import './App.css';
import NavMenu from './NavMenu/NavMenu';
import Homepage from './Homepage/Homepage';
import Work from './Work/Work';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Homepage/>
      <Work/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
