import { useEffect, useState } from "react";
import Costs from "./components/costs/Costs";
import NewCost from "./components/costs/NewCost";
import useFetch from "./services/useFetch";

const App = () => {
  const { savedItems, error } = useFetch();
  const [costs, setCosts] = useState([]);
  const [costIsNotChanging, setCostChanging] = useState(true);
  useEffect(() => {
    setCosts(savedItems);
  }, [savedItems]);
  const onAddCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
    setCostChanging(true);
  };
  const onCostChangingHandler = () => {
    setCostChanging(false);
  };
  return (
    <div>
      <NewCost onAddCost={onAddCostHandler} value={costIsNotChanging} />
      <Costs onCostChanging={onCostChangingHandler} costs={costs} />
    </div>
  );
};

export default App;
