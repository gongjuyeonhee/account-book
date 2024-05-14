import React from "react";

const ExpenseDate = (props) => {
  const dateObj = new Date(props.date); // 문자열을 Date 객체로 변환
  const month = dateObj.getMonth(); // getMonth()는 0부터 시작하므로 1을 더해줍니다.

  const fullmonth = month.toLocaleString("ko-KR", { month: "long" }); // month: "long" 옵션을 사용하여 전체 월 이름을 가져옴

  const day = dateObj.toLocaleString("ko-KR", { day: "2-digit" });
  //const year = dateObj instanceof Date ? dateObj.getFullYear() : null;

  return (
    <>
      <p className="expense-date__month">
        --{fullmonth}월-{day}--
      </p>
    </>
  );
};

export default ExpenseDate;
