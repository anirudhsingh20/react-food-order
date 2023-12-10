import { useContext } from "react";
import { placeOrder } from "../Utils/meal-helper";
import Input from "./Input";
import { MealCtx } from "../Store/meals-context";

function PlaceOrder({...props}) {

    const {cart} = useContext(MealCtx);

    function requiredFn(state) {
        if (state.isBlur && state.value === "") {
            return "This field is required"
        } else {
            return false;
        }
    }

    function validateEmail(state) {
        if (state.isBlur && (state.value === "" || !state.value.trim().includes('@'))) {
            return "Please enter a valid email"
        } else {
            return false;
        }
    }

    function validateLength(state, minLength = 5) {
        if (state.isBlur && (state.value === "" || state.value.length < minLength)) {
            return state.value === "" ? "This Field is required" : "Enter text with length greater than " + minLength 
        } else {
            return false;
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        
        let x = await placeOrder({order : {customer : data, items: cart}});
        console.log(x);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <Input required name="name" validationFunction={requiredFn} type="text" lableText='Full Name' error={null} placeholder="Enter Full Name" />
            <Input required name="email" validationFunction={validateEmail} type="email" lableText='Email' error={null} placeholder="Enter Email" />
            <Input required name="street"
             validationFunction={requiredFn} type="text" lableText='Street' error={null} placeholder="Enter Street" />
            <Input required name="postal-code" validationFunction={validateLength} type="number" lableText='Postal Code' error={null} placeholder="Enter Postal Code" />
            <Input required name="city" validationFunction={requiredFn} type="text" lableText='City' error={null} placeholder="Enter City" />
            <div className="control-row">
                <button className="button">Place Order</button>
            </div>
        </form>
     );
}

export default PlaceOrder;