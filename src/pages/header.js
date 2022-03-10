import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div className="App-header">
            
            <h2 className="title"> Azeem's Website </h2>
            <div className="header-nav">
                
                <Link className="nav-link" to="./about"> About </Link>
                <Link className="nav-link" to="./contact"> Contact </Link>
                <Link className="nav-link" to="./projects"> Projects </Link>
        
            </div>
        </div>
        )
}