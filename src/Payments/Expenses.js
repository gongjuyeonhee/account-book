import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <ExpenseItem name={item.name} />
      ))}
    </div>
  );
};

export default Expenses;
