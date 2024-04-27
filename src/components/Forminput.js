import React from "react";
import "./Forminput.css";

//이름, 가격, 유형, 구입날자, 메모, 재구매의사
const Forminput = () => {
  return (
    <form className="form-input-box">
      <div className="box">
        <label for="name">이름: </label>
        <input type="text" required />
      </div>
      <div className="box">
        <label for="price">가격: </label>
        <input type="number" required />
      </div>
      <div className="box">
        <label for="name">유형: </label>
        <select name="food-type">
          <option value="food">food</option>
          <option value="food">food</option>
          <option value="food">food</option>
          <option value="food">food</option>
          <option value="food">food</option>
        </select>
      </div>
      <div className="box">
        <label for="date">구입날짜: </label>
        <input type="date"></input>
      </div>
      <div className="box">
        <label for="memo">
          메모: <label for="memo-check">메모 작성</label>
          <input type="checkbox"></input>
        </label>
        <input type="text" required />
      </div>
      <div className="box">
        <label for="re-order">재구매 의사</label>
        <input type="radio" value="yes" />
        <label for="yes">yes</label>
        <input type="radio" value="no" />
        <label for="yes">no</label>
      </div>

      <input type="submit" value="등록" />
    </form>
  );
};

export default Forminput;
