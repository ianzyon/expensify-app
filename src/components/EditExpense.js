import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

// /edit
export class EditExpensePage extends React.Component {
    onSubmit = (expense)=>{   
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onClick = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
                <button onClick={this.onClick}>Remove Expense</button>
            </div>
        );
    }
};
const mapStateToProps = (state, props) =>{
    return {
        expense: state.expenses.find((expense) => { return expense.id === props.expense.id})
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: ({ id }) => dispatch(removeExpense({ id }))

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
