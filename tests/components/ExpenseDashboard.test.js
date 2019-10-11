import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashboard from '../../src/components/ExpenseDashboard';

test('should render ExpenseDashBoard page correctly', ()=>{
    // add component instance 
    const wrapper = shallow(<ExpenseDashboard />);

    expect(toJSON(wrapper)).toMatchSnapshot();
});