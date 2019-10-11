import { createStore } from 'redux';

// Action Generators
const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy // simplification of incrementBy: incrementBy
    }
};

const decrementCount = ({decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy // simplification of incrementBy: incrementBy
    }
};
const resetCount = () => {
    return {
        type: 'RESET'
    }
};
const setCount = ({count = 0}) => {
    return {
        type: 'SET',
        count // simplification of count: count
    }
};
// Reducer
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {                
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
            count: action.count
        };
        default:
            return state;
    }
}
// Create Store
const store = createStore(countReducer);
// Subscribe Method
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
}); 

// Actions - increment, decrement, reset 
store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

// unsubscribe();

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(decrementCount());

store.dispatch(setCount({count: 101}));



