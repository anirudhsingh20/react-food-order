import { useContext } from "react";
import { MealCtx } from "../Store/meals-context";
import CartItem from "./CartItem";
import { currencyFormatter } from "../Utils/currency-formatter";

function Cart({ openPlaceOrder }) {
    const { cart, addToCart, removeFromCart } = useContext(MealCtx);

    const price = cart.reduce((acc, item) => {
        return acc + +(item.price * item.count).toFixed(2)
    }, 0)

    return (
        <>
            <h2>Food Cart</h2>
            <ul>
                {cart.length > 0 && cart.map(item => {
                    return <CartItem key={item.id} name={item.name} price={item.price} itemId={item.id} count={item.count} addToCart={addToCart} removeFromCart={removeFromCart} />
                })}
            </ul>
            {cart.length <= 0 && <p>No item in the cart</p>}
            <div className="cart-total">{currencyFormatter.format(price)}</div>
            <div className="modal-actions">
                <button className="button" onClick={openPlaceOrder} >Place Order</button>
            </div>
        </>
    );
}

export default Cart;