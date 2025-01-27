import {  useState } from "react";
import Costs from "./components/costs/Costs";
import NewCost from "./components/costs/NewCost";
import useFetch from "./components/hooks/useFetch";

const App = () => {
  const { savedItems, error, setSavedItems } = useFetch([]);
  const [data, setData] = useState({
    id: "",
    amount: "",
    description: "",
    date: "",
  });
  const [costIsNotChanging, setCostChanging] = useState(true);

  const onAddCostHandler = (cost) => {
    setSavedItems((prevCosts) => {
      const filteredCosts = prevCosts.filter((elem) => elem.id !== cost.id);
      return [cost, ...filteredCosts];
    });
    setCostChanging(true);
  };
  const changeDataHandler = (data) => {
    setCostChanging(false);
    setData({
      id: data.id,
      amount: data.amount,
      description: data.description,
      date: data.date,
    });
  };
  const changeValue = () => {
    setCostChanging(true);
  };
  const resetDataHandler = () => {
    setData({
      id: "",
      amount: "",
      description: "",
      date: "",
    });
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
        data={data}
        onCancelHandler={changeValue}
        onAddCost={onAddCostHandler}
        value={costIsNotChanging}
      />
      <Costs onCostChanging={changeDataHandler} costs={savedItems} />
    </div>
  );
};

export default App;
