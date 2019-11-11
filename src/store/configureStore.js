import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses-red';
import filtersReducer from '../reducers/filters-red';
import thunk from 'redux-thunk';
// necessario para integrar db applyMiddleware e thunk
// codigo necessario para o devtools funcionar mesmo com midleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    // Store Function
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer

        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
