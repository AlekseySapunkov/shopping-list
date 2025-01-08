import ItemCost from "./ItemCost";
import "./costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostsDiagram from "./CostsDiagram";
const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  const changeDescription = () => {
    props.onCostChanging();
  };
  const filterAndSortProps = (props) => {
    return props.costs
      .filter((cost) => cost.date.getUTCFullYear().toString() === selectedYear)
      .sort(
        (cost1, cost2) =>
          cost1.date.toLocaleString("ru-Ru", { day: "numeric" }) -
          cost2.date.toLocaleString("ru-Ru", { day: "numeric" })
      );
  };
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filterAndSortProps(props)} />
        {filterAndSortProps(props).length === 0 ? (
          <p>в массиве нет элементов</p>
        ) : (
          filterAndSortProps(props).map((cost) => (
            <ItemCost
              key={cost.id}
              id={cost.id}
              date={cost.date}
              description={cost.description}
              price={cost.price}
              changeOnClick={changeDescription}
            />
          ))
        )}
      </Card>
    </div>
  );
};
export default Costs;
