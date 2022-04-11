import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isAddingExpense, setIsAddingExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expensedData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expensedData);
    toggleAddExpenseHandler();
  };

  const toggleAddExpenseHandler = () => {
    setIsAddingExpense((prevState) => !prevState);
  };

  return (
    <div className='new-expense'>
      {!isAddingExpense && <button onClick={toggleAddExpenseHandler}>Add New Expense</button>}
      {isAddingExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleAddExpenseHandler}></ExpenseForm>}
    </div>
  )
};

export default NewExpense;