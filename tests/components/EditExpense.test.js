import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { EditExpensePage } from '../../src/components/EditExpense';
import expenses from '../fixtures/expense-state';

let editExpense, removeExpense, history, wrapper;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[2]}/>);
});
// snapshot test
test('should render EditExpense page correctly', ()=>{
    expect(toJSON(wrapper)).toMatchSnapshot();
});
// onSubmit should handle edit Expense
test('should handle onSubmit edit Expense', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});
// onClick should handle remove Expense
test('should handle onClick remove Expense', ()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
