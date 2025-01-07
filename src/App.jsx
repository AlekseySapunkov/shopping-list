import React, { useEffect, useState } from "react";
import Costs from "./components/costs/Costs";
import NewCost from "./components/costs/NewCost";
import getApi from "./services/GetApi";

const App = () => {
  let savedItems = [];
  useEffect(() => {
    getApi()
      .then((res) => {
        console.log(res);
        res.forEach((element) => {
          const { id, item_name: description, date, price } = element;
          savedItems.push({ id, description, date: new Date(date), price });
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const [costs, setCosts] = useState(savedItems);
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
