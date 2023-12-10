import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getMeals } from "../Utils/meal-helper";

export const MealCtx = createContext({
    meals: [],
    cart: [],
    addToCart: (id) => { },
    removeFromCart: (id) => { },
    placeOrder: () => { }
});

function mealDispatch(state, action) {
    if (action.type === 'ADD_TO_CART') {
        let isAdded = false
        const cart = [...state.cart.map((item) => {
            if (action.payload.id === item.id) {
                isAdded = true;
                return { ...item, count: (item.count + 1) }
            }

            return { ...item }
        })];

        if (!isAdded) {
            cart.push({
                id: action.payload.id,
                count: 1,
                name: action.payload.name,
                price: action.payload.price
            })
        }

        return { ...state, cart }

    } else if (action.type === 'ADD_FETCHED_MEALS') {
        return { ...state, meals: action.payload, }

    } else if (action.type === 'REMOVE_FROM_CART') {
        const cart = state.cart.reduce((acc, item) => {
            if (item.id === action.payload) {
                if (item.count > 1) {
                    acc.push({ ...item, count: item.count - 1 })
                }
                return acc;
            }
            acc.push(item);
            return acc;
        }, []);
        return { ...state, cart }

    }

    return state;
}

const MealContextProvider = function MealContextProvider({ children }) {
    const [state, dispatch] = useReducer(mealDispatch, {
        meals: [],
        cart: [],
        addToCart,
        removeFromCart
    });

    function addToCart(id, name, price) {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id,
                name,
                price
            },
        })
    }

    function removeFromCart(id) {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        })
    }

    useEffect(() => {
        async function callApiAndGetData() {
            const fetchedMeals = await getMeals();

            dispatch({
                type: 'ADD_FETCHED_MEALS',
                payload: fetchedMeals
            });
        }

        callApiAndGetData();
    }, [])

    return (
        <MealCtx.Provider value={state}>
            {...children}
        </MealCtx.Provider>
    );
}

export default MealContextProvider;