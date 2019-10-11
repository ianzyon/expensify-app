import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseList } from '../../src/components/ExpenseList';
import expenses from '../fixtures/expense-state';
// populated
test('should render ExpenseList with expenses', ()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);

    expect(toJSON(wrapper)).toMatchSnapshot();
});
// unpopulated
test('should render ExpenseList with expenses', ()=>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>);

    expect(toJSON(wrapper)).toMatchSnapshot();
});