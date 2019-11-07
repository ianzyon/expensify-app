import React from 'react';
import { shallow } from 'enzyme';
import selectExpensesTotal from '../../src/selectors/expenses-total-sel';
import expenses from '../fixtures/expense-state';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    exepct(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);

    expect(res).toBe(195);
});

test('should correctly add up a multiple expense', () => {
    const res = selectExpensesTotal([expenses]);

    expect(res).toBe(114195);
});