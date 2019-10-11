import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header';
import toJSON from 'enzyme-to-json';

test('should render Header correctly', ()=>{
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    
    
    // expect(wrapper.find('h1').text()).toBe('Expensify Header');
});
// objeto gerado ao criar um componente
// {
//     '$$typeof': Symbol(react.element),
//     type: 'header',
//     key: null,
//     ref: null,
//     props: { children: [ [Object], [Object], [Object], [Object] ] },
//     _owner: null,
//     _store: {}
//   }
