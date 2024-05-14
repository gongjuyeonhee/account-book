import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import TypeFilter from "../components/TypeFilter";

const Expenses = (props) => {
  const [typeFilter, setTypeFilter] = useState("1");
  const [sortFilter, setSortFilter] = useState("높은가격");

  const handleChange = (selectedType, filterType) => {
    if (filterType === "type") {
      setTypeFilter(selectedType);
    } else if (filterType === "sort") {
      setSortFilter(selectedType);
    }
  };

  const filteredExpense = props.items
    .slice()
    .filter((expense) => expense.itemType === typeFilter)
    .sort((a, b) => {
      if (sortFilter === "높은가격") {
        return b.price - a.price;
      } else if (sortFilter === "낮은가격") {
        return a.price - b.price;
      } else if (sortFilter === "최신순") {
        return b.purchaseDay - a.purchaseDay;
      } else if (sortFilter === "오래된순") {
        return a.purchaseDay - b.purchaseDay;
      }
      return 0;
    });

  let expenseContent = <p>값이 없습니다</p>;

  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((item) => (
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
      <TypeFilter
        selectedType={typeFilter}
        selectedSort={sortFilter}
        onChangeFilter={(selectedType, filterType) =>
          handleChange(selectedType, filterType)
        }
      />
      {expenseContent}
    </div>
  );
};

export default Expenses;
