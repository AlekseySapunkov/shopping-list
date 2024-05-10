import ItemCost from "./components/ItemCost";
function App() {
  const costs = [
    {
      date: new Date(2024, 4, 9),
      description: "freezer",
      price: 120,
    },
    {
      date: new Date(2024, 5, 9),
      description: "camera",
      price: 220,
    },
    {
      date: new Date(2024, 4, 9),
      description: "Macbook",
      price: 920,
    },
  ];
  return (
    <div>
      <h1>"Начнем изучение react"</h1>
      <ItemCost
        date={costs[0].date}
        description={costs[0].description}
        price={costs[0].price}
      ></ItemCost>
      <ItemCost
        date={costs[0].date}
        description={costs[1].description}
        price={costs[1].price}
      ></ItemCost>
      <ItemCost
        date={costs[0].date}
        description={costs[2].description}
        price={costs[2].price}
      ></ItemCost>
    </div>
  );
}

export default App;
