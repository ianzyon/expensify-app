import selectExpenses from '../../src/selectors/expenses-sel';
import moment from 'moment';
import expenses from '../fixtures/expense-state';

// by text
test('should filter by text value', ()=>{
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[1]]);
});
// by start date
test('should filter by startDate', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[0]]);
});
// by endDate
test('should filter by endDate', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[0],expenses[1]]);
});

// should sort by date
test('should filter by date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[2], expenses[0], expenses[1]]);
});

// should sort by amount
test('should filter by amount', ()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([ expenses[1], expenses[2], expenses[0]]);
});