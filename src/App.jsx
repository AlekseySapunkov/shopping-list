import React,{useEffect, useState} from "react";
import Costs from "./components/costs/Costs";
import NewCost from "./components/costs/NewCost";

const App = () => {
  let savedItems = []
  const getApi = async()=>{
     const connectionResponse = await fetch("http://localhost:5200/items")
     return connectionResponse.json()
  }
useEffect(()=>{
  getApi()
  .then((res) => {
    res.forEach(element => {
      const {id, item_name:description, date, price} = element
      savedItems.push({id, description, date:new Date(date), price})
    });
  })
  .catch((err) => console.log(err));
},[])
console.log(init)
const[costs,setCosts]=useState(savedItems);
  const onAddCostHandler =(cost)=>{
    console.log(cost)
    setCosts(prevCosts=>{
      return [cost,...prevCosts]
    });
  }
  return (
    <div>
      <NewCost onAddCost= {onAddCostHandler} value={true}/>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
