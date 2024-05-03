import React, { useState } from "react";
import "./Forminput.css";

//이름, 가격, 유형, 구입날자, 메모, 재구매의사
const Forminput = () => {
  const [itemState, setItemState] = useState({
    name: "",
    price: 0,
    itemType: "",
    purchaseDay: null,
    memo: "",
    reOrder: null,
  });

  const nameChangeHandler = (e) => {
    setItemState((prevState) => ({ ...prevState, name: e.target.value }));
    console.log(itemState.name);
  };

  const priceChangeHandler = (e) => {
    setItemState((prevState) => ({ ...prevState, price: e.target.value }));
    console.log(itemState.price);
  };

  const typeChangeHandler = (e) => {
    setItemState((prevState) => ({ ...prevState, itemType: e.target.value }));
  };

  const dayChangeHandler = (e) => {
    setItemState((prevState) => ({
      ...prevState,
      purchaseDay: e.target.value,
    }));
  };

  const memoChangeHandler = (e) => {
    setItemState((prevState) => ({ ...prevState, memo: e.target.value }));
  };

  const reOrderChangeHandler = (e) => {
    setItemState((prevState) => ({ ...prevState, reOrder: e.target.value }));
  };

  return (
    <form className="form-input-box">
      <div className="box">
        <label for="name">이름: </label>
        <input
          type="text"
          value={itemState.name}
          onChange={nameChangeHandler}
          required
        />
      </div>
      <div className="box">
        <label for="price">가격: </label>
        <input
          type="number"
          value={itemState.price}
          onChange={priceChangeHandler}
          required
        />
      </div>
      <div className="box">
        <label for="name">유형: </label>
        <select
          name="food-type"
          value={itemState.itemType}
          onChange={typeChangeHandler}
        >
          <option value="aaa">a</option>
          <option value="bbb">b</option>
          <option value="ccc">c</option>
          <option value="ddd">d</option>
          <option value="eee">e</option>
        </select>
      </div>
      <div className="box">
        <label for="date">구입날짜: </label>
        <input
          type="date"
          value={itemState.purchaseDay}
          onChange={dayChangeHandler}
        ></input>
      </div>
      <div className="box">
        <label for="memo">
          메모: <label for="memo-check">메모 작성</label>
          <input type="checkbox"></input>
        </label>
        <input
          type="text"
          value={itemState.memo}
          onChange={memoChangeHandler}
          required
        />
      </div>
      <div className="box">
        <label for="re-order">재구매 의사</label>
        <input type="radio" value={true} onChange={reOrderChangeHandler} />
        <label for="yes">yes</label>
        <input type="radio" value={false} onChange={reOrderChangeHandler} />
        <label for="yes">no</label>
      </div>

      <input type="submit" value="등록" />
    </form>
  );
};

export default Forminput;
