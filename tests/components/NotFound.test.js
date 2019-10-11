import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import NotFound from '../../src/components/NotFound';

test('should render NotFound page correctly', ()=>{
    // add component instance 
    const wrapper = shallow(<NotFound />);

    expect(toJSON(wrapper)).toMatchSnapshot();
});
