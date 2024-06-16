import React,{useState} from "react";
import Costs from "./components/costs/Costs";
import NewCost from "./components/costs/NewCost";
const initialCosts = [
  {
    id:'c1',
    date: new Date(2024, 4, 9),
    description: "freezer",
    price: 120,
  },
  {
    id:'c2',
    date: new Date(2024, 5, 9),
    description: "camera",
    price: 220,
  },
  {
    id:'c3',
    date: new Date(2024, 4, 9),
    description: "Macbook",
    price: 920,
  },
];
const App = () => {
  const[costs,setCosts]=useState(initialCosts);
  const onAddCostHandler =(cost)=>{
    console.log(cost)
    setCosts(prevCosts=>{
      return [cost,...prevCosts]
    });
  }
  return (
    <div>
      <NewCost onAddCost= {onAddCostHandler}/>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
