import React from 'react';
import { Link } from "react-router-dom";
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';
 
const AddExpensePage = (props) => {
    const navigate = useNavigate();
    return (
    <div>
        <h1>Add Expense Page</h1>
        <ExpenseForm
            onSubmit={ (expense) => {
                props.dispatch(addExpense(expense));
                navigate('/')
            }} 
        />
    </div>
)}
 
export default connect()(AddExpensePage);