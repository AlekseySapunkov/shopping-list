import Costs from "./components/costs/Costs";
import NewCost from "./components/costs/NewCost";
const App = () => {
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
  const onAddCostHandler =(cost)=>{
    console.log(cost);
  }
  return (
    <div>
      <NewCost onAddCost= {onAddCostHandler}/>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
