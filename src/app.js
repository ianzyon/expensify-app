import React from 'react';
import ReactDOM from 'react-dom';
// React-Redux
import { Provider } from 'react-redux';
// importar o estilo
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
// routers
import AppRouter from './routers/AppRouter';
// redux - store
import configureStore from './store/configureStore';
// redux - action generators
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from './actions/filters';
// redux - selector
import getVisibleExpenses from './selectors/expenses-sel';

const store = configureStore();

// store.dispatch(addExpense({description: 'Conta de Agua', amount: 50000, createdAt: 150}));
// store.dispatch(addExpense({description: 'Conta de Gas', amount: 6000, createdAt: 150}));
// store.dispatch(addExpense({description: 'Conta do Aluguel', amount: 109500, createdAt: 1000}));
// // store.dispatch(editExpense(store.getState().expenses[1].id,{description: 'Conta do Aluguel Mod', amount: 2000, createdAt: 1800}));
// // const visible = getVisibleExpenses(store.getState().expenses, store.getState().filters);
// // console.log(store.getState());
// // console.log(visible);

// Setando o Store via provider
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

