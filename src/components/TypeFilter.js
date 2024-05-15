import React from "react";
import "./TypeFilter.css";

const TypeFilter = (props) => {
  const dropdownChangeHandler = (e, selectName) => {
    props.onChangeFilter(e.target.value, selectName);
  };

  return (
    <div>
      <div>
        <label>유형필터</label>
        <select
          name="type"
          value={props.selectedType}
          onChange={(e) => dropdownChangeHandler(e, "type")}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div>
        <label>정렬필터</label>
        <select
          name="sort"
          value={props.selectedSort}
          onChange={(e) => dropdownChangeHandler(e, "sort")}
        >
          <option value="높은가격">높은가격</option>
          <option value="낮은가격">낮은가격</option>
          <option value="최신순">최신순</option>
          <option value="오래된순">오래된순</option>
        </select>
      </div>
      <div>
        <label for="start-date">시작 기간: </label>
        <input
          type="date"
          value={props.selectedstart}
          onChange={(e) => dropdownChangeHandler(e, "start")}
        ></input>
      </div>
      <div>
        <label for="end-date">끝 기간: </label>
        <input
          type="date"
          value={props.selectedend}
          onChange={(e) => dropdownChangeHandler(e, "end")}
        ></input>
      </div>
    </div>
  );
};

export default TypeFilter;
