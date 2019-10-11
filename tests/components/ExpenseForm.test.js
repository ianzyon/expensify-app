import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import moment from 'moment';
import ExpenseForm from '../../src/components/ExpenseForm';
import expenses from '../fixtures/expense-state';

// component loading
test('should render ExpenseForm page correctly', ()=>{
    // add component instance 
    const wrapper = shallow(<ExpenseForm />);

    expect(toJSON(wrapper)).toMatchSnapshot();
});

// render with expense data
test('should render ExpenseForm page correctly with expense data', ()=>{
    // add component instance 
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
});
// render error 
test('should render error for invalid form submission', ()=>{
    // add component instance 
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', { preventDefault: ()=> {} });

    expect(wrapper.state('error').length).toBeGreaterThan(0);    
    expect(toJSON(wrapper)).toMatchSnapshot();
}); 

// set description on input change
test('should set description on input change', ()=>{
    // add component instance 
    const value = 'New Description'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', { target: { value }})
    expect(wrapper.state('description')).toBe(value);
}); 
// set note on textarea change
test('should set note on textarea change', ()=>{
    // add component instance 
    const value = 'New Note Value'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change', { target: { value }})
    expect(wrapper.state('note')).toBe(value);
}); 
// set amount if valid input
test('should set amount if valid input', ()=>{
    // add component instance 
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { target: { value }})
    expect(wrapper.state('amount')).toBe(value);

}); 
// not set amount if invalid input
test('should not set amount if invalid input', ()=>{
    // add component instance 
    const value = '12.122'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { target: { value }})
    expect(wrapper.state('amount')).toBe('');

}); 

test('should call onSubmit prop for valid form submission', ()=>{
    // spy do jest - fake function
    const onSubmitSpy = jest.fn();

    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', { preventDefault: ()=> {} });
    expect(wrapper.state('error')).toBe('');

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

// on date change
test('should set new date on date change', ()=>{

    const wrapper = shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);

    expect(wrapper.state('createdAt')).toEqual(now);
});

// on focus change
test('should set calendar focus on change', ()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });

    expect(wrapper.state('calendarFocused')).toEqual(focused);
});
