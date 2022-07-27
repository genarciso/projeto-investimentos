import "./styles.scss"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="header" >
                <div>
                    Logo
                </div>
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header
