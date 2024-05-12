import Costs from "./components/Costs";
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
        <Costs costs={costs}/>
    </div>
  );
}

export default App;
