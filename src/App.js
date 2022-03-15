import './App.css';
import Header from './pages/header'
import { Routes, Route, Router} from 'react-router-dom';
import About from './pages/about'
import Contact from "./pages/contact";
import Misc from "./pages/misc";
import Projects from "./pages/projects";

function App() {
  return (
    
    <div>
      <Header/>
   
      <Routes>
        <Route index element={<About/>} />
        <Route exact path="/azeem_portfolio_website" element={<About/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/projects" element={<Projects/>} />
        
      </Routes>
     
    </div>
            
  );
}

export default App;
