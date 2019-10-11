import expensesReducer from '../../src/reducers/expenses-red';
import moment from 'moment';
import uuid from 'uuid';
import expenses from '../fixtures/expense-state';

//Set default state 
test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});

    expect(state).toEqual([]);
});
// ADD EXPENSE
test('should set add expense state', () => {
    const expense = {
        id: uuid(),
        description: 'Test Expense',
        note: 'Test Note',
        amount: 200000,
        createdAt: moment()
    }
    const action = {type: 'ADD_EXPENSE', expense }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0],expenses[1],expenses[2], expense]);
});
// EDIT EXPENSE
test('should set edit expense by id', () => {
    const updates = {
        note: 'nota editada'
    };
    const action = {type: 'EDIT_EXPENSE', id: '2', updates};
    const state = expensesReducer(expenses, action);
    expect(state[1].note).toBe(updates.note);
});
// EDIT EXPENSE ID NOT FOUND
test('should not edit expense by id if not found', () => {
    const updates = {
        note: 'nota editada'
    };
    const action = {type: 'EDIT_EXPENSE', id: '4', updates};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
// REMOVE EXPENSE
test('should set remove expense by id', () => {
    const action = {type: 'REMOVE_EXPENSE', id: '2'};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});
// REMOVE EXPENSE ID NOT FOUND
test('should not remove by id if not found', () => {
    const action = {type: 'REMOVE_EXPENSE', id: '4'};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});