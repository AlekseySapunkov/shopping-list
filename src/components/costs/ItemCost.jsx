import "./ItemCost.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import Button from "./Button";
import deleteApiById from "../../services/DeleteApi";

const ItemCost = (props) => {
  const [isItemDeleted, deleteItem] = useState(false);
  const [description, setDescription] = useState(props.description);
  const month = props.date.toLocaleString("ru-Ru", { month: "long" });
  const day = props.date.toLocaleString("ru-Ru", { day: "numeric" });
  const year = props.date.toLocaleString("ru-Ru", { year: "2-digit" });
  const costTitle = props.price;
  const id = props.id;
  const deleteItemHandler = async (event) => {
    event.preventDefault();
    deleteItem(true);
    try {
      const apiResponse = await deleteApiById(id);
      console.log(apiResponse);
    } catch (err) {
      console.error(error);
    }
  };
  const changeDescriptionHandler = (event) => {
    props.changeOnClick();
  };
  return (
    !isItemDeleted && (
      <Card className="cost-item">
        <div className="cost-date">
          <div className="cost-date__day">{day}</div>
          <div className="cost-date__month">{month}</div>
          <div className="cost-date__year">{year}</div>
        </div>
        <div className="cost-item__description">
          <h2>{description}</h2>
          <div className="cost-item__price">{costTitle}</div>
        </div>
        <Button type="button" onClick={changeDescriptionHandler} value={id}>
          Изменить описание
        </Button>
        <Button onClick={deleteItemHandler}>Удалить</Button>
      </Card>
    )
  );
};
export default ItemCost;
