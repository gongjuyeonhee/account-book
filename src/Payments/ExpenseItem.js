import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDay";

const ExpenseItem = (props) => {
  return (
    <div className="item-box">
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.itemType}</p>
      <ExpenseDate date={props.purchaseDay} />
      <p>{props.memo}</p>
      <p>{props.reOrder}</p>
    </div>
  );
};

export default ExpenseItem;
