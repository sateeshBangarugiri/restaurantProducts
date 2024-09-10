import swiggyIcon from "../../assets/images/swiggy-logo.png"
import "./SpinLoader.css"

const SpinLoader = () => {
    return (
        <div>
            <div className="loader" id="spinner">
                <img src={swiggyIcon} className="food-icon" />
            </div>
            <div className="loader-content">Please wait while we are baking the happiness for you.</div>
        </div>
    );
}

export default SpinLoader;