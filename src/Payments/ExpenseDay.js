import React from "react";

const ExpenseDate = (props) => {
  const dateObj = new Date(props.date);

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  return (
    <>
      <p className="expense-date__month">
        {year}-{month}-{day}
      </p>
    </>
  );
};

export default ExpenseDate;
