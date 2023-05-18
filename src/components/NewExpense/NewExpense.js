import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isFormExtended, extendForm] = useState(false);

  function extendFormHandler() {
    extendForm(true);
  }

  function collapseFormHandler() {
    extendForm(false);
  }

  function saveExpenseDataHandler(data) {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    extendForm(false);
  }

  return (
    <div className="new-expense">
      {isFormExtended ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCollapseForm={collapseFormHandler}
        />
      ) : (
        <button onClick={extendFormHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
