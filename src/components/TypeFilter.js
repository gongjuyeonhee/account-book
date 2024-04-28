import React from "react";
import "./TypeFilter.css";

const TypeFilter = () => {
  return (
    <div>
      <div>
        <select name="food-type">
          <option value="">유형필터</option>
          <option value="food">food</option>
          <option value="food">food</option>
          <option value="food">food</option>
          <option value="food">food</option>
        </select>
      </div>
      <div>
        <select name="food-type">
          <option value="">정렬기준</option>
          <option value="food">food</option>
          <option value="food">food</option>
          <option value="food">food</option>
          <option value="food">food</option>
        </select>
      </div>
      <div>
        <label for="date">시작 기간: </label>
        <input type="date"></input>
      </div>
      <div>
        <label for="date">끝 기간: </label>
        <input type="date"></input>
      </div>
    </div>
  );
};

export default TypeFilter;
