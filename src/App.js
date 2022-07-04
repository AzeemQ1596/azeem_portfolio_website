import { Route, Routes} from 'react-router-dom';
import './App.css';
import './Responsive.css';

import Header from './pages/header'
import Home from "./pages/home";
import About from './pages/about'
import Projects from "./pages/projects";

function App() {
  return (

      <div>
        <Header/>
        <Routes>
            
            <Route index element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/projects' element={<Projects/>} />
          
        </Routes> 
      </div>
  );
}

export default App;
