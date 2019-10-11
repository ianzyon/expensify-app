import React from 'react';
import {connect} from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    
    onDatesChange = ({ startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused)=>{ 
        this.setState(()=>{
            return {
                calendarFocused
            };
        })};

    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value); // refactored for dispatchToProps
    };
    selectOnChangeHandler = (e)=>{
        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount(); // refactored for dispatchToProps
    };
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
                <select value={this.props.filters.sortBy} onChange={this.selectOnChangeHandler}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    isOutsideRange={()=> false}
                    startDateId="ss111"
                    endDateId="ee111"
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    
                />
            </div>
        );  
    };
};
// mapping function - primeiro argumento é o state
const mapStateToProps = (state)=>{
    return {
        filters: state.filters
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setStartDate(endDate)),
        setTextFilter: (textValue) => dispatch(setTextFilter(textValue)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount())
    }
};
// o primeiro argumento de conect recebe o map to props function, e o segundo o componente
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);