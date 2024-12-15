import "./ItemCost.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import Button from "./Button";

const ItemCost = (props) => {
  const [description, setDescription] = useState(props.description);
  const month = props.date.toLocaleString("ru-Ru", { month: "long" });
  const day = props.date.toLocaleString("ru-Ru", { day: "numeric" });
  const year = props.date.toLocaleString("ru-Ru", { year: "2-digit" });
  const costTitle = props.price;
  const changeDescriptionHandler = () => {
    setDescription("New Text");
    alert(description);
  };
  return (
    <Card className="cost-item">
      <div className="cost-date">
        <div cost-date__day>{day}</div>
        <div className="cost-date__month">{month}</div>
        <div className="cost-date__year">{year}</div>
      </div>
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">{costTitle}</div>
      </div>
      <Button onClick={changeDescriptionHandler}>Изменить описание</Button>
    </Card>
  );
};
export default ItemCost;
