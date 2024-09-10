
import { Link } from "react-router-dom";
import "./NavigationBar.css"

const NavigationBar = () => {
    return (
        <div className="header">

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>

                </ul>
            </div>
            <button className="login-btn">
                <Link to="/">Login</Link>
            </button>
        </div>
    );
};

export default NavigationBar;