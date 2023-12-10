import { currencyFormatter } from "../Utils/currency-formatter";

function Item({ addToCart, ...props }) {
    return (
        <li className="meal-item">
            <article>
                <img src={'http://localhost:3000/' + props.image} alt="meal-image" />
                <div>
                    <h3>{props.name}</h3>
                    <div className="meal-item-price">{currencyFormatter.format(props.price)}</div>
                    <div className="meal-item-description">{props.description}</div>
                </div>
                <div className="meal-item-actions">
                    <button className="button" onClick={() => addToCart(props.id, props.name, props.price)}>Add to cart</button>
                </div>
            </article>
        </li>
    );
}

export default Item;