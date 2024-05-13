import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import TypeFilter from "../components/TypeFilter";

const Expenses = (props) => {
  const [filterType, setFilterType] = useState("1");

  const filterChangeHandler = (selectedType) => {
    setFilterType(selectedType);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.itemType === filterType;
  });

  let expenseContent = <p>값이 없습니다</p>;

  if (filterExpenses.length > 0) {
    expenseContent = filterExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        name={item.name}
        price={item.price}
        itemType={item.itemType}
        purchaseDay={item.purchaseDay}
        memo={item.memo}
        reOrder={item.reOrder}
      />
    ));
  }
  return (
    <div className="list-box">
      <TypeFilter selected={filterType} onChangeFilter={filterChangeHandler} />
      {expenseContent}
    </div>
  );
};

export default Expenses;
