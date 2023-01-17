import React from "react";
import ExpenseItem from "./ExpenseItem";
import { useSelector } from "react-redux";

const ExpenseList = () => {
  const expenses = useSelector((state) => {
    return state.expense;
  });

  // const expenses = [
  //   { id: 1, name: "Cake", cost: 300 },
  //   { id: 2, name: "Bank", cost: 3000 },
  //   { id: 3, name: "Bike", cost: 1000 }
  // ];

  return (
    <>
      <ul>
        {expenses.map((expenseItem) => (
          <ExpenseItem
            key={expenseItem.id}
            id={expenseItem.id}
            name={expenseItem.name}
            cost={expenseItem.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
