import ItemCost from "./ItemCost";
import "./costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  console.log(props)
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {props.costs.map((cost)=> 
        <ItemCost
         key={cost.id}
        date={cost.date}
          description={cost.description}
          price={cost.price}/>)}
      </Card>
    </div>
  );
};
export default Costs;
