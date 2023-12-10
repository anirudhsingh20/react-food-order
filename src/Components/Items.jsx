import { useContext } from "react";
import Item from "./Item";
import { MealCtx } from "../Store/meals-context";

function Items({ ...props }) {
    const { meals, addToCart } = useContext(MealCtx);

    return (
        <ul id="meals">
            {meals.map(meal => {
                return <Item key={meal.id} addToCart={addToCart} {...meal} ></Item>
            })}
        </ul>
    );
}

export default Items;