import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total-sel';
import getVisibleExpenses from '../selectors/expenses-sel';
import numeral from 'numeral';

// stateless component
export const ExpensesSummary = (props) => (
    <div>
        <h2>{props.numOfExpenses === 0 ? 'No expenses are visible.' : 
        `Viewing ${props.numOfExpenses} expense${props.numOfExpenses > 1 ? 's' : ''} totalling ${numeral(props.totalAmount / 100).format('$0,0.00')}`}</h2>
    </div>
);
// mapping function state para o props do componente
const mapStateToProps = (state)=>{
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    return {
        totalAmount: selectExpensesTotal(visibleExpenses),
        numOfExpenses: visibleExpenses.length
    };
};
// conectando o store a um hoc
export default connect(mapStateToProps)(ExpensesSummary);