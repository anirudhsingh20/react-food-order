import { currencyFormatter } from "../Utils/currency-formatter";

function CartItem({ itemId, name, price, count, addToCart, removeFromCart }) {
    return (
        <li className="cart-item">
                <p>{name} - {count} x {currencyFormatter.format(price)}</p>
            <div className="cart-item-actions">
                <button onClick={() => addToCart(itemId, name, price)}>+</button>
                <span>{count}</span>
                <button onClick={() => removeFromCart(itemId)}>-</button>
            </div>
        </li>
    );
}

export default CartItem;