import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddExpense } from '../../src/components/AddExpense';
import expenses from '../fixtures/expense-state';

let addExpense, history, wrapper;

beforeEach(()=>{
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpense addExpense={addExpense} history={history} />);
})


// snapshot test
test('should render AddExpense page correctly', ()=>{
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle onSubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});