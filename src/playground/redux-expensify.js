import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// Expenses Action Generators:
// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
        type: 'ADD_EXPENSE',   
        expense:{
            id: uuid(),
            description,
            note,
            amount,
            createdAt

        }
    }
}
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}
// EDIT_EXPENSE
const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}
// Expenses Reducer: 
const defaultExpState = [];
const expensesReducer = (state = defaultExpState, action) =>{

    switch (action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>{ return id !== action.id });
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id) {
                return {
                    ...expense,
                    ...action.updates
                    }
                } 
            });
        default:
            return state;
    }
};

// Filter Action Generators: 
// SET_TEXT_FILTER
const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}
// SORT_BY_DATE
const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}
// SORT_BY_AMOUNT
const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}
// SET_START_DATE
const setStartDate = (startDate = 0) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}
// SET_END_DATE
const setEndDate = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}
const defaultFilterState = 
    {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
};
// Filters Reducer:
const filtersReducer = (state = defaultFilterState, action) =>{
    
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};
// Store Function
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer

    }));
// Jan 1st 1970 (unix epoch)
// Get Visible Expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;

        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
        return 0
    })
}
store.subscribe(()=>{
    const state = store.getState();
    const visible = getVisibleExpenses(state.expenses, state.filters);
    console.log(visible);
});
// Dispatchs

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 3, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Conta de Luz', amount: 2, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('RENT'));
// store.dispatch(setTextFilter('Conta'));

// store.dispatch(setTextFilter());


store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));

// store.dispatch(setEndDate(2000));



const demoState = {
    expenses: [{
        id: 'qwerty',
        description: 'January Rent',
        note: 'This was the final paymente for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
