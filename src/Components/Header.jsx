import { useContext } from "react";
import logo from "../assets/logo.jpg"
import { MealCtx } from "../Store/meals-context";
function Header({ text, children, handleClick }) {
    const { cart } = useContext(MealCtx);
    return (
        <header id="main-header" >
            <div id="title">
                <img src={logo} alt="logo" />
                <h1>React Food ordering app</h1>
                <nav>
                    <button className="text-button" onClick={handleClick}>Cart {cart.length > 0 && `(${cart.length})`}</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;