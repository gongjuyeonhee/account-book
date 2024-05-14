import { useState } from "react";
import "./App.css";
import Forminput from "./components/Forminput";
import Expenses from "./Payments/Expenses";

function App() {
  const [goods, setGoods] = useState([
    {
      id: "1",
      name: "아샷추",
      price: 3500,
      itemType: "2",
      purchaseDay: new Date(2024, 8, 14),
      memo: "맛있어요",
      reOrder: "true",
    },
    {
      id: "2",
      name: "곰팡이",
      price: 300,
      itemType: "2",
      purchaseDay: new Date(2024, 3, 14),
      memo: "맛있어요",
      reOrder: "true",
    },
    {
      id: "3",
      name: "테스트",
      price: 5500,
      itemType: "2",
      purchaseDay: new Date(2024, 7, 14),
      memo: "맛있어요",
      reOrder: "true",
    },
    {
      id: "4",
      name: "케이크",
      price: 350220,
      itemType: "2",
      purchaseDay: new Date(2024, 6, 14),
      memo: "맛있어요",
      reOrder: "true",
    },
    {
      id: "5",
      name: "고기고",
      price: 35051560,
      itemType: "2",
      purchaseDay: new Date(2024, 5, 14),
      memo: "맛있어요",
      reOrder: "true",
    },
  ]);

  const getForminputData = (data) => {
    setGoods([
      {
        id: Math.random().toString(),
        name: data.name,
        price: data.price,
        itemType: data.itemType,
        purchaseDay: new Date(data.purchaseDay),
        memo: data.memo,
        reOrder: data.reOrder,
      },
      ...goods,
    ]);
  };

  return (
    <div className="App">
      <Forminput getForminputData={getForminputData} />
      <Expenses items={goods} />
    </div>
  );
}

export default App;
