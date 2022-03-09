import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  /* Setting state one value at a time: */
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState(0);
  // const [enteredDate, setEnteredDate] = useState('');
  
  /* Setting state with a single object: */
  const [expense, setExpense] = useState({ enteredTitle: '', enteredAmount: 0, enteredDate: '' });

  const titleChangeHandler = (event) => {
    /* Setting state one value at a time: */
    // setEnteredTitle(event.target.value);
    
    /* Setting state with a single object,
      MUST hand it a Function that accepts previous state to ensure that the
      most recent state for which you depend on is up to date: */
    setExpense((prevState) => ({...prevState, enteredTitle: event.target.value}));
  };

  const amountChangeHandler = (event) => {
    /* Setting state one value at a time: */
    // setEnteredAmount(event.target.value);
    
    /* Setting state with a single object,
      MUST hand it a Function that accepts previous state to ensure that the
      most recent state for which you depend on is up to date: */
    setExpense((prevState) => ({...prevState, enteredAmount: event.target.value}));
  };
  
  const dateChangeHandler = (event) => {
    /* Setting state one value at a time: */
    // setEnteredDate(event.target.value);
    
    /* Setting state with a single object,
      MUST hand it a Function that accepts previous state to ensure that the
      most recent state for which you depend on is up to date: */
    setExpense((prevState) => ({...prevState, enteredDate: event.target.value}));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title: expense.enteredTitle,
      amount: expense.enteredAmount,
      date: expense.enteredDate
    };

    props.onSaveExpenseData(expenseData);
    setExpense({ enteredTitle: '', enteredAmount: 0, enteredDate: '' });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="expense-title">Title</label>
          <input type="text" id="expense-title" value={expense.enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-amount">Amount</label>
          <input type="number" id="expense-amount" min="0.01" step="0.01" value={expense.enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-date">Date</label>
          <input type="date" id="expense-date" min="2019-01-01" max="2022-12-31" value={expense.enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
};

export default ExpenseForm;