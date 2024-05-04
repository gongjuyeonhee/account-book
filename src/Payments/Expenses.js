import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div className="list-box">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          name={item.name}
          price={item.price}
          itemType={item.itemType}
          purchaseDay={item.purchaseDay}
          memo={item.memo}
          reOrder={item.reOrder}
        />
      ))}
    </div>
  );
};

export default Expenses;
