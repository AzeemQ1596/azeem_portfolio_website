import './App.css';
import Header from './pages/header'
import { Routes, Route} from 'react-router-dom';
import About from './pages/about'
import Contact from "./pages/contact";
import Misc from "./pages/misc";
import Projects from "./pages/projects";

function App() {
  return (
    
    <div>
      <Header/>
      <Routes>
        <Route path="" element={<About/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="projects" element={<Projects/>} />
        
      </Routes>
    </div>
            
  );
}

export default App;
