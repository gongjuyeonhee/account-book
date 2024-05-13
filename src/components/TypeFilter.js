import React from "react";
import "./TypeFilter.css";

const TypeFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div>
      <div>
        <label>유형필터</label>
        <select
          name="food-type"
          value={props.selected}
          onChange={dropdownChangeHandler}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
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
