import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div className="app-header">
            
            <div className="header-nav">
                
                <Link className="nav-link" to="/home"> Home </Link>
                <Link className="nav-link" to="/about"> About </Link>
                <Link className="nav-link" to="/projects"> Projects </Link>
                
            </div>
        </div>
        )
}