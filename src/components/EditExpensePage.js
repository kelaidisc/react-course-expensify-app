import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = () => {
    const expenses = useSelector(state => state.expenses);
    const navigate = useNavigate();
    const {id} = useParams();
    const expense = expenses.find((expense) => expense.id === id);
    const dispatch = useDispatch();
    return (
        <div>
            <ExpenseForm
            expense={expense}
            onSubmit={(expense) => {
                dispatch(editExpense(id, expense));
                navigate('/');
            }}
        />
        <button onClick={() => {
            props.dispatch(removeExpense({ id: props.expense.id }));
            navigate('/');
        }}>Remove</button>
        </div>
    );
};

export default EditExpensePage;