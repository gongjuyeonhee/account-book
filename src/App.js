import { useState } from "react";
import "./App.css";
import Forminput from "./components/Forminput";
import TypeFilter from "./components/TypeFilter";

function App() {
  const [goods, setGoods] = useState([
    {
      id: "1",
      name: "아샷추",
      price: 3500,
      itemType: "aaa",
      purchaseDay: new Date(2024, 8, 14),
      memo: "맛있어요",
      reOrder: true,
    },
  ]);

  const getForminputData = (data) => {
    setGoods([
      {
        id: Math.random().toString(),
        name: data.name,
        price: data.price,
        itemType: data.itemType,
        purchaseDay: data.purchaseDay,
        memo: data.memo,
        reOrder: data.reOrder,
      },
    ]);
  };

  return (
    <div className="App">
      <Forminput getForminputData={getForminputData} />
      <TypeFilter />
    </div>
  );
}

export default App;
