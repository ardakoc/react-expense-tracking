import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>May 9th 2023</div>
      <div className='expense-item__description'>
        <h2>Shopping</h2>
        <div className='expense-item__price'>$420</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
