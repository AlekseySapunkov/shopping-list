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
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />{" "}
        <ItemCost
          date={props.prices[0].date}
          description={props.prices[0].description}
          price={props.prices[0].price}
        ></ItemCost>
        <ItemCost
          date={props.prices[0].date}
          description={props.prices[1].description}
          price={props.prices[1].price}
        ></ItemCost>
        <ItemCost
          date={props.prices[0].date}
          description={props.prices[2].description}
          price={props.prices[2].price}
        ></ItemCost>
      </Card>
    </div>
  );
};
export default Costs;
