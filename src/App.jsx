import {  useState } from "react";
import Costs from "./components/costs/Costs";
import NewCost from "./components/costs/NewCost";
import useFetch from "./components/hooks/useFetch";
import useData from "./components/hooks/useData";

const App = () => {
  const originData= {
      id: "",
      amount: "",
      description: "",
      date: "",
  }
  const { items, error, setItems } = useFetch([]);
  const [item, setItem] = useData(originData)
  const [costIsNotChanging, setCostChanging] = useState(true);

  const onAddCostHandler = (cost) => {
    setItem(originData)
    setItems((prevCosts) => {
      const filteredCosts = prevCosts.filter((elem) => elem.id !== cost.id);
      return [cost, ...filteredCosts];
    });
    setCostChanging(true);
  };
  const changeDataHandler = (data) => {
    setCostChanging(false);
    setItem(data);
  };
  const changeValue = () => {
    setCostChanging(true);
  };
  const resetDataHandler = () => {
    setItem(originData);
  };
  if(error){
    return (
      <div><p>503 Service unavailable</p></div>
    )
  }
  return (
    <div>
      <NewCost
        resetData={resetDataHandler}
        data={item}
        onCancelHandler={changeValue}
        onAddCost={onAddCostHandler}
        value={costIsNotChanging}
      />
      <Costs onCostChanging={changeDataHandler} costs={items} />
    </div>
  );
};

export default App;
