import React from "react";

export const AddTransaction = () => {
  return (
    <div className="form-wrapper">
      <h2>Add Transaction</h2>
      <form className="form">
        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Amount" />
        <select>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input type="date" />
        <textarea placeholder="Note"></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
