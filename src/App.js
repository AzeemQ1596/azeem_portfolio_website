import { Route, Routes} from 'react-router-dom';
import './App.css';
import './Responsive.css';

import Header from './pages/header'
import About from './pages/about'
import Projects from "./pages/projects";
import Home from "./pages/home";

function App() {
  return (

      <div>
        <Header />
        <Routes>
            
            <Route path="/azeem_portfolio_website" element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
          
        </Routes> 
      </div>
  );
}

export default App;
