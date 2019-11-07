import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../src/components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', ()=>{
    const wrapper = shallow(<ExpensesSummary totalAmount={1} numOfExpenses={1} />);
    expect(wrapper).toMatchSnapshot();
    
});
test('should correctly render ExpensesSummary with multiple expense', ()=>{
    const wrapper = shallow(<ExpensesSummary totalAmount={350} numOfExpenses={3} />);
    expect(wrapper).toMatchSnapshot();

});
test('should correctly render ExpensesSummary with no expense', ()=>{
    const wrapper = shallow(<ExpensesSummary totalAmount={0} numOfExpenses={0} />);
    expect(wrapper).toMatchSnapshot();

});