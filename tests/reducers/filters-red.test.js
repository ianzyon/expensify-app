import moment from 'moment';
import filtersReducer from '../../src/reducers/filters-red';

// filter reducer on default
test('should setup default filter values', ()=>{
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});
// sort by amount
test('should set sorBy to amount', ()=>{
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'} );

    expect(state.sortBy).toBe('amount');
});
// sort by date
test('should set sortBy to date', ()=>{
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' }

    const state = filtersReducer(currentState, action );

    expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter', ()=>{
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SET_TEXT_FILTER', text: 'find' }

    const state = filtersReducer(currentState, action );

    expect(state.text).toBe('find');
});
// should set startDate
test('should set startDate', ()=>{
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const startDate = moment();
    const action = { type: 'SET_START_DATE', startDate }

    const state = filtersReducer(currentState, action );

    expect(state.startDate).toEqual(startDate);
});
// should set endDate
test('should set endDate', ()=>{
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const endDate = moment();
    const action = { type: 'SET_END_DATE', endDate }

    const state = filtersReducer(currentState, action );

    expect(state.endDate).toEqual(endDate);
});