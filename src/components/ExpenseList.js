import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses-sel';

export const ExpenseList = (props) => (
    <div>
        { props.expenses.length === 0 ? (<p>No Expenses</p>): (props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id} {...expense} />
        }))}
    
    </div>
);
// mapping function
const mapStateToProps = (state)=>{
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};
// conectando o store a um hoc
export default connect(mapStateToProps)(ExpenseList);

