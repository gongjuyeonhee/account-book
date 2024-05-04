import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="item-box">
      <h2>{props.name}</h2>
    </div>
  );
};

export default ExpenseItem;
