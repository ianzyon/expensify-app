import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import moment from 'moment';
import { ExpenseListFilters } from '../../src/components/ExpenseListFilters';
import {filters, filtersData } from '../fixtures/filters-fixture';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters filters={filters} 
        setTextFilter={setTextFilter} sortByDate={sortByDate} 
        sortByAmount={sortByAmount} setStartDate={setStartDate} 
        setEndDate={setEndDate} />);
});

// snapshot test
test('should render Expense List Filters Correctly', ()=>{
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render Expense List Filters with data filters Correctly', ()=>{
    wrapper.setProps({
        filters: filtersData
    });
    expect(toJSON(wrapper)).toMatchSnapshot();
});

// should handle text change
test('should handle text change', ()=>{
    const value = 'rent';
    wrapper.find('input').simulate('change', { target: { value } });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});
// should sort by date
test('should sort by date', ()=>{
    wrapper.setProps({
        filters: filtersData
    });
    const value = 'date';
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByDate).toHaveBeenCalled();
});
// should sort by amount
test('should sort by amount', ()=>{
    const value = 'amount';
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByAmount).toHaveBeenCalled();
});
// should handle date changes
test('should handle date changes', ()=>{
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);

});
// should handle date focus changes
test('should handle date focus changes', ()=>{
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);

});