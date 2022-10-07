import logo from './logo.svg';
import './App.css';
import Profile from './components/Home/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/Aboutme/About';
import Experience from './components/Experience/Experience';
import Headerssocial from './components/Header/Headerssocial';
// import Portfolio from './components/Portfolio/Portfolio';
// import Services from './Services/Services';
import Contact from './components/Contactme/Contact';
import Portfolio from "./components/Portfolio/Portfolio"
function App() {
  return (
    <div className="App">
      {/* <Profile/> */}
      <Navbar/>
      <Header/>
      
    
     <About/>
     <Experience/>
     <Portfolio/>
     {/* <Services/> */}
     <Contact/>
     

    </div>
  );
}

export default App;
