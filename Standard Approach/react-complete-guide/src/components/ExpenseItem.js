import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseData = new Date(2023, 6, 5);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 299.98;

  return (
    <div className="expense-item">
      <div>{expenseData.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
