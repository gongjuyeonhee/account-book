import "./App.css";
import Forminput from "./components/Forminput";
import TypeFilter from "./components/TypeFilter";

function App() {
  const goods = [
    {
      id: "1",
      name: "아샷추",
      price: 3500,
      itemType: "aaa",
      purchaseDay: new Date(2024, 8, 14),
      memo: "맛있어요",
      reOrder: true,
    },
  ];

  const getForminputData = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <Forminput getForminputData={getForminputData} />
      <TypeFilter />
    </div>
  );
}

export default App;
