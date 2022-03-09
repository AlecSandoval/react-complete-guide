import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expensedData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expensedData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  )
};

export default NewExpense;