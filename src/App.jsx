import { useEffect, useState } from "react";
import Costs from "./components/costs/Costs";
import NewCost from "./components/costs/NewCost";
import useFetch from "./services/useFetch";

const App = () => {
  const { savedItems, error } = useFetch();
  const [costs, setCosts] = useState([]);
  const [data, setData] = useState({
    id:'',
    amount:'',
    description:"",
    date:"",

  });
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
  const changeDataHandler = (data) =>{
    setCostChanging(false)
    setData({
      id:data.id,
      amount:data.amount,
      description:data.description,
      date:data.date,
    })
  }
  const changeValue =()=>{
    setCostChanging(true)
  }
  return (
    <div>
      <NewCost
        data={data}
        onCancelHandler={changeValue}
        onAddCost={onAddCostHandler}
        value={costIsNotChanging}
          />
      <Costs onCostChanging={changeDataHandler}costs={costs} />
    </div>
  );
};

export default App;
