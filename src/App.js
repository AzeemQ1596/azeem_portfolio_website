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
          <Route index element={<Home/>} />
          <Route exact path="/azeem_portfolio_website" element={<Home/>} />
          <Route exact path='/azeem_portfolio_website/about' element={<About/>} />
          <Route exact path='/azeem_portfolio_website/projects' element={<Projects/>} />
        </Routes> 
      </div>
  );
}

export default App;
