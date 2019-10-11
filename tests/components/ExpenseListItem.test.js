import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseListItem from '../../src/components/ExpenseListItem';
import expenses from '../fixtures/expense-state';

// populated
test('should render ExpenseListItem with a expense', ()=>{
    const wrapper = shallow(<ExpenseListItem key={expenses[1].id} {...expenses[1]}/>);

    expect(toJSON(wrapper)).toMatchSnapshot();
});