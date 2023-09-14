import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'
import { useState } from 'react'
import {v4 as uuid} from "uuid"; 
 
const ExpenseListFilters = (props) => {
    let [calendarFocused,setCalendarFocused] = useState(null)
 
    const onDatesChange = ({startDate,endDate}) => {
        props.dispatch(setStartDate(startDate))
        props.dispatch(setEndDate(endDate))
    }
    const onFocusChange = (calendarFocused) =>{
        setCalendarFocused(calendarFocused)
    }
    return (
    <div>
    <input 
        type="text" 
        value={props.filters.text} 
        onChange={(e)=>{
            props.dispatch(setTextFilter(e.target.value))
    }} />
    <select 
    value={props.filters.sortBy} 
    onChange={(e)=>{
        if(e.target.value === 'date'){
            props.dispatch(sortByDate())
        }
        else if (e.target.value === 'amount'){props.dispatch(sortByAmount())}
    }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
    </select>
    <DateRangePicker
        startDate={props.filters.startDate} // momentPropTypes.momentObj or null,
        startDateId={uuid()} // PropTypes.string.isRequired,
        endDate={props.filters.endDate} // momentPropTypes.momentObj or null,
        endDateId={uuid()} // PropTypes.string.isRequired,
        onDatesChange={onDatesChange} // PropTypes.func.isRequired,
        focusedInput={calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={onFocusChange} // PropTypes.func.isRequired,
        numberOfMonths={1}
        isOutsideRange={()=>false}
        showClearDates={true}
    />
    </div>
    )
}
 
const mapStateToProps = (state) =>{
    return {
        filters:state.filters
    }
}
 
export default connect(mapStateToProps)(ExpenseListFilters)