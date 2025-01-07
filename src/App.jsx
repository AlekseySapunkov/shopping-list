import React, { useEffect, useState } from "react";
import Costs from "./components/costs/Costs";
import NewCost from "./components/costs/NewCost";
import useFetch from "./services/useFetch";

const App = () => {
  const { savedItems, error } = useFetch();
  const [costs, setCosts] = useState([]);
  useEffect(() => {
    setCosts(savedItems);
  }, [savedItems]);
  const onAddCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost onAddCost={onAddCostHandler} value={true} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
