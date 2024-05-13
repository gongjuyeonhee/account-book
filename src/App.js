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
      itemType: "aaa",
      purchaseDay: new Date(2024, 8, 14),
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
