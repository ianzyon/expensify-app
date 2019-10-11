import { sortByDate , sortByAmount, setTextFilter, setStartDate, setEndDate } from '../../src/actions/filters';
import moment from 'moment';

// 6 test cases for filters
// setStartDate
test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});
// setEndDate
test('should generate set end date action object..', ()=>{
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});
// setTextFilter with text
test('should generate set text filter object with a text', ()=>{
    const action = setTextFilter('texto de teste');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'texto de teste'
    });
});
// setTextFilter without text
test('should generate set text filter object with default value', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    });
});
// sortByAmount
test('should generate sort by amount object', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});
// sortByDate
test('should generate sort by date object', ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});