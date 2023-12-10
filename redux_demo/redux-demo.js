const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'INCREMENT') {
        return { counter: state.counter + 1 }
    } else if (action.type === 'DECREMENT') {
        return { counter: state.counter - 1 }
    }

    return state;
}

const store = redux.createStore(counterReducer)


const counterSubscription = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(counterSubscription);

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })

// output (because of subscription)

// { counter: 1 }
// { counter: 2 }
// { counter: 1 }